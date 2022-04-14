package si.um.feri.ita;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;

import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Date;

@ApplicationScoped
public class VinjetaService {

    @Inject MongoClient mongoClient;

    public List<Zgodovina> listZgodovina() {
        List<Zgodovina> lista = new ArrayList<>();
        try (MongoCursor<Document> cursor = getCollectionZgodovina().find().iterator()) {
            while (cursor.hasNext()) {
                Document document = cursor.next();
                Zgodovina zgodovina = new Zgodovina();
                zgodovina.setId(document.getObjectId("_id").toHexString());
                zgodovina.setRezultat(document.getString("Rezultat").toString());
                zgodovina.setDatum_preverjanja(document.getDate("Datum_preverjanja"));
                zgodovina.setDatum_veljavnosti(document.getDate("Datum_veljavnosti"));
                zgodovina.setPreverjena_vinjeta(document.getString("Preverjena_vinjeta"));
                zgodovina.setVeljavnost(document.getBoolean("Veljavnost"));
                lista.add(zgodovina);
            }
        }
        return lista;
    }

    public List<Vinjeta> list(){
        List<Vinjeta> list = new ArrayList<>();

        try (MongoCursor<Document> cursor = getCollection().find().iterator()) {
            while (cursor.hasNext()) {
                Document document = cursor.next();
                Vinjeta vinjeta = new Vinjeta();
                vinjeta.setId(document.getObjectId("_id").toString());
                vinjeta.setRegistrska_stevilka(document.getString("registrska_stevilka"));
                vinjeta.setCestninski_razred(document.getString("cestninski_razred"));
                vinjeta.setTip(Vinjeta.Tip.valueOf(document.getString("tip")));
                vinjeta.setDatum_od(document.getDate("datum_od"));
                vinjeta.setDatum_do(document.getDate("datum_do"));
                vinjeta.setModelAvta(document.getString("model_avta"));
                vinjeta.setZnamkaAvta(document.getString("znamka_avta"));
                list.add(vinjeta);
            }
        }
        return list;
    }


    public void addVinjeta(Vinjeta vinjeta){

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        Calendar c = Calendar.getInstance();

        Date trenuten = new Date(System.currentTimeMillis());

        c.setTime(trenuten);

        if (vinjeta.getTip().equals(Vinjeta.Tip.mesecna)){
            c.add(Calendar.MONTH, 1);
        }else if(vinjeta.getTip().equals(Vinjeta.Tip.letna)){
            c.add(Calendar.YEAR, 1);
        }else {
            c.add(Calendar.DATE, 1);
        }
        Date datum_do = c.getTime();

        vinjeta.setDatum_od(trenuten);
        vinjeta.setDatum_do(datum_do);

        System.out.println(vinjeta.toString()); // Izpis celotnega objekta vinjeta

        Document document = new Document()
                .append("registrska_stevilka", vinjeta.getRegistrska_stevilka())
                .append("cestninski_razred", vinjeta.getCestninski_razred())
                .append("datum_od", vinjeta.getDatum_od())
                .append("tip", vinjeta.getTip().toString())
                .append("datum_do", vinjeta.getDatum_do())
                .append("model_avta", vinjeta.getModelAvta())
                .append("znamka_avta", vinjeta.getZnamkaAvta());
        getCollection().insertOne(document);
    }

    public String checkRegistrska(String registrska){
        String result = null;
        try (MongoCursor<Document> cursor = getCollection().find().iterator()) {
            Date date_max = new Date(System.currentTimeMillis());
            while (cursor.hasNext()) {
                Document document = cursor.next();
                if (document.getString("registrska_stevilka").equals(registrska)){
                    Date datum_od = document.getDate("datum_od");
                    Date datum_do = document.getDate("datum_do");

                    if (datum_od.before(new Date(System.currentTimeMillis())) && datum_do.after(new Date(System.currentTimeMillis()))){
                        if(result == null){ // Java - ker je null, potem na null zalapi string dalje a.k.a. nullVinjeta REGISTRSKA je veljavna
                            result = "";
                        }
                        if (datum_do.after(date_max)){ // Če je datum vinjete ki jo preverjamo kasnejši od temp max
                            date_max = datum_do; // Zadnji datum - največja veljavnost
                            result = "Vinjeta  za registrsko: " + registrska + " je veljavna do: " + date_max.toString() + " \n "; // Rezultat merge
                        }
                    }
                }
            }
            if (result == null){
                result = "Vinjeta  za registrsko: " + registrska + " NI veljavna";
            }
            System.out.println(result);
            boolean vinjeta_veljavna;
            if (result.contains("NI veljavna")){
                vinjeta_veljavna = false;
            }else{
                vinjeta_veljavna = true;
            }


            Document document = new Document()
                    .append("Rezultat", result)
                    .append("Datum_preverjanja", new Date(System.currentTimeMillis()))
                    .append("Datum_veljavnosti", date_max)
                    .append("Preverjena_vinjeta", registrska)
                    .append("Veljavnost", vinjeta_veljavna);
            getCollectionZgodovina().insertOne(document);
        }
        return result;
    }

    private MongoCollection getCollection(){
        return mongoClient.getDatabase("vinjete").getCollection("vinjete");
    }
    private MongoCollection getCollectionZgodovina(){
        return mongoClient.getDatabase("vinjete").getCollection("zgodovina_preverjanja");
    }

}
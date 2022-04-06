package si.um.feri.ita;

import java.util.Date;

public class Zgodovina {

    private String _id;
    private String Rezultat;
    private Date datum_preverjanja;
    private Date datum_veljavnosti;
    private String preverjena_vinjeta;
    private boolean veljavnost;

    public Zgodovina() {
    }

    public Zgodovina(String _id, String Rezultat, Date datum_preverjanja, Date datum_veljavnosti, String preverjena_vinjeta, boolean veljavnost) {
        this._id = _id;
        this.Rezultat = Rezultat;
        this.datum_preverjanja = datum_preverjanja;
        this.datum_veljavnosti = datum_veljavnosti;
        this.preverjena_vinjeta = preverjena_vinjeta;
        this.veljavnost = veljavnost;
    }

    public String getId() {
        return _id;
    }

    public void setId(String _id) {
        this._id = _id;
    }

    public String getRezultat() {
        return Rezultat;
    }

    public void setRezultat(String Rezultat) {
        this.Rezultat = Rezultat;
    }

    public Date getDatum_preverjanja() {
        return datum_preverjanja;
    }

    public void setDatum_preverjanja(Date datum_preverjanja) {
        this.datum_preverjanja = datum_preverjanja;
    }

    public Date getDatum_veljavnosti() {
        return datum_veljavnosti;
    }

    public void setDatum_veljavnosti(Date datum_veljavnosti) {
        this.datum_veljavnosti = datum_veljavnosti;
    }

    public String getPreverjena_vinjeta() {
        return preverjena_vinjeta;
    }

    public void setPreverjena_vinjeta(String preverjena_vinjeta) {
        this.preverjena_vinjeta = preverjena_vinjeta;
    }

    public boolean isVeljavnost() {
        return veljavnost;
    }

    public void setVeljavnost(boolean veljavnost) {
        this.veljavnost = veljavnost;
    }

}

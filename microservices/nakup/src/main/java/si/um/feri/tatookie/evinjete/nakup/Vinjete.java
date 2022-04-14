package si.um.feri.tatookie.evinjete.nakup;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import java.util.Date;
import java.util.Objects;

public class Vinjete {

    @Id
    private String id;
    @Indexed
    private String registrska_stevilka;
    private String cestninski_razred;
    private Date datum_od;
    private Date datum_do;
    private String model_avta;
    private String znamka_avta;

    enum Tip {
        mesecna, dnevna, letna
    }
    private Tip tip;

    public Vinjete() {
    }

    public Vinjete(String registrska_stevilka, String cestninski_razred, Date datum_od, Date datum_do, Tip tip, String model_avta, String znamka_avta) {
        this.registrska_stevilka = registrska_stevilka;
        this.cestninski_razred = cestninski_razred;
        this.datum_od = datum_od;
        this.datum_do = datum_do;
        this.tip = tip;
        this.model_avta = model_avta;
        this.znamka_avta = znamka_avta;

    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRegistrska_stevilka() {
        return registrska_stevilka;
    }

    public void setRegistrska_stevilka(String registrska_stevilka) {
        this.registrska_stevilka = registrska_stevilka;
    }

    public String getCestninski_razred() {
        return cestninski_razred;
    }
    public void setCestninski_razred(String cestninski_razred) {
        this.cestninski_razred = cestninski_razred;
    }

    public Date getDatum_od() {
        return datum_od;
    }
    public void setDatum_od(Date datum_od) {
        this.datum_od = datum_od;
    }

    public Date getDatum_do() {
        return datum_do;
    }
    public void setDatum_do(Date datum_do) {
        this.datum_do = datum_do;
    }

    public Tip getTip() {
        return tip;
    }

    public void setTip(Tip tip) {
        this.tip = tip;
    }

    public String getModel_avta() {
        return model_avta;
    }
    public void setModel_avta(String model_avta) {
        this.model_avta = model_avta;
    }

    public String getZnamka_avta() {
        return znamka_avta;
    }

    public void setZnamka_avta(String znamka_avta) {
        this.znamka_avta = znamka_avta;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Vinjete)) {
            return false;
        }

        Vinjete other = (Vinjete) obj;

        return Objects.equals(other.registrska_stevilka, this.registrska_stevilka);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.registrska_stevilka);
    }

    public String toString()
    {
        return registrska_stevilka + " " + cestninski_razred + " " + tip + " "
                + model_avta + " " + znamka_avta + " " + datum_od + " " + datum_do;
    }

}

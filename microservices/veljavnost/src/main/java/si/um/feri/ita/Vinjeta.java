package si.um.feri.ita;

import java.util.Date;
import java.util.Objects;

public class Vinjeta {

    private String id;
    private String registrska_stevilka;
    private String cestninski_razred;
    private Date datum_od;
    private Date datum_do;
    private String modelAvta;
    private String znamkaAvta;

    enum Tip {
        mesecna, dnevna, letna
    }
    private Tip tip;

    public Vinjeta() {
    }

    public Vinjeta(String registrska_stevilka, String cestninski_razred, Date datum_od, Date datum_do, Tip tip, String modelAvta, String znamkaAvta) {
        this.registrska_stevilka = registrska_stevilka;
        this.cestninski_razred = cestninski_razred;
        this.datum_od = datum_od;
        this.datum_do = datum_do;
        this.tip = tip;
        this.modelAvta = modelAvta;
        this.znamkaAvta = znamkaAvta;

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

    public String getModelAvta() {
        return modelAvta;
    }
    public void setModelAvta(String modelAvta) {
        this.modelAvta = modelAvta;
    }

    public String getZnamkaAvta() {
        return znamkaAvta;
    }

    public void setZnamkaAvta(String znamkaAvta) {
        this.znamkaAvta = znamkaAvta;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Vinjeta)) {
            return false;
        }

        Vinjeta other = (Vinjeta) obj;

        return Objects.equals(other.registrska_stevilka, this.registrska_stevilka);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.registrska_stevilka);
    }

    public String toString()
    {
        return registrska_stevilka + " " + cestninski_razred + " " + tip + " "
                + modelAvta + " " + znamkaAvta + " " + datum_od + " " + datum_do;
    }

}

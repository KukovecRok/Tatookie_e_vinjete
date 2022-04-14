package si.um.feri.tatookie.evinjete.nakup;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VinjetaRepository extends MongoRepository<Vinjete, String> {


    //public Vinjeta findByRegistrskaStevilka(String registrska_stevilka);
    public List<Vinjete> findAll();

}
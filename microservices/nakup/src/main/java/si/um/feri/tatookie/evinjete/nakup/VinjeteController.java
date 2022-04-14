package si.um.feri.tatookie.evinjete.nakup;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VinjeteController {

    Date convertToDateViaInstant(LocalDateTime dateToConvert) {
        return java.util.Date
                .from(dateToConvert.atZone(ZoneId.systemDefault())
                        .toInstant());
    }

    @Autowired
    private VinjetaRepository vinjetaRepository;

    @PostMapping(path = "/vinjete/nakup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String ustvari(@RequestBody Vinjete vinjeta) {
        LocalDateTime datum_od = LocalDateTime.now();
        LocalDateTime datum_do = LocalDateTime.now();
        try {
            if(vinjeta.getTip() == Vinjete.Tip.mesecna){
                datum_do = datum_od.plusYears(1);
            }else if(vinjeta.getTip() == Vinjete.Tip.letna){
                datum_do = datum_od.plusMonths(1);
            }else if(vinjeta.getTip() == Vinjete.Tip.dnevna){
                datum_do = datum_od.plusDays(1);
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        vinjeta.setDatum_od(convertToDateViaInstant(datum_od));
        vinjeta.setDatum_do(convertToDateViaInstant(datum_do));
        Vinjete savedVinjete = vinjetaRepository.insert(vinjeta);
        return "naredo vinjete"; // Copilot recommendation
    }


    @GetMapping("/vinjete/all")
    public List<Vinjete> findAll() {
        return vinjetaRepository.findAll();
    }

    @GetMapping("/vinjete/test")
    public String index() {
        return "Delamo vinjete"; // Copilot recommendation
    }


}

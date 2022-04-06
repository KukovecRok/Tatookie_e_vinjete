package si.um.feri.ita;

import si.um.feri.ita.jms.consumer.VinjetaConsumer;

import javax.inject.Inject;
import javax.jms.ConnectionFactory;
import javax.jms.JMSContext;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/vinjete")
public class VinjetaResource {

    @Inject
    VinjetaConsumer vinjetaConsumer;

    @Inject
    ConnectionFactory connectionFactory;

    @POST
    @Path("/preveri")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String lastRegistrska(String registrska) {
        System.out.println("Preverjam vinjeto z registrsko: " + registrska);
        vinjetaConsumer.setLastRegistrska(registrska);
        String veljavnost = vinjetaService.checkRegistrska(registrska);
        vinjetaConsumer.setVeljavnost(veljavnost);
        try (JMSContext context = connectionFactory.createContext(JMSContext.AUTO_ACKNOWLEDGE)) {
            context.createProducer().send(context.createQueue("vinjete"), veljavnost);
        }
        return veljavnost;
    }


    @Inject
    VinjetaService vinjetaService;

    @GET
    public List<Vinjeta> list() {
        return vinjetaService.list();
    }

    @POST
    public List<Vinjeta> add(Vinjeta vinjeta) {
        vinjetaService.addVinjeta(vinjeta);
        return list();
    }

}

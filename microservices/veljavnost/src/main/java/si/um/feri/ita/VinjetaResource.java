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
    ConnectionFactory connectionFactory;

    @POST
    @Path("/preveri")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String lastRegistrska(String registrska) {
        System.out.println("Preverjam vinjeto z registrsko: " + registrska);
        try (JMSContext context = connectionFactory.createContext(JMSContext.AUTO_ACKNOWLEDGE)) {
            context.createProducer().send(context.createQueue("vinjete"), registrska);
        }
        return "sprejeto";
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

    @GET
    @Path("/zgodovina")
    public List<Zgodovina> listZgodovina() {
        return vinjetaService.listZgodovina();
    }


}

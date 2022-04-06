package si.um.feri.ita.jms.consumer;

import io.quarkus.logging.Log;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;
import si.um.feri.ita.VinjetaService;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.jms.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@ApplicationScoped
public class VinjetaConsumer implements Runnable {

    @Inject
    ConnectionFactory connectionFactory;

    private final ExecutorService scheduler = Executors.newSingleThreadExecutor();


    private volatile String lastRegistrska;
    String veljavnost;
    public void setVeljavnost(String veljavnost) {
        this.veljavnost = veljavnost;
    }
    public String getVeljavnost() {
        return veljavnost;
    }

    public String setLastRegistrska(String lastRegistrska) {
        return this.lastRegistrska = lastRegistrska;
    }

    void onStart(@Observes StartupEvent ev) {
        scheduler.submit(this);
    }

    void onStop(@Observes ShutdownEvent ev) {
        scheduler.shutdown();
    }

    @Inject
    VinjetaService vinjetaService;

    @Override
    public void run() {

        try (JMSContext context = connectionFactory.createContext(JMSContext.AUTO_ACKNOWLEDGE)) {
            JMSConsumer consumer = context.createConsumer(context.createQueue("vinjete"));
            while (true) {
                Message message = consumer.receive();
                if (message == null) return;
                Log.info("Preverjam vinjeto: " + message);
                String veljavnost = vinjetaService.checkRegistrska( message.getBody(String.class));
                context.createProducer().send(context.createQueue("zgodovina"), veljavnost);
                Log.info("lastRegistrska: %s".formatted( message.getBody(String.class)));
            }
        } catch (JMSException e) {
            throw new RuntimeException(e);
        }


    }
}
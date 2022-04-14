package si.um.feri.tatookie.evinjete.nakup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NakupApplication  implements CommandLineRunner {

	//@Autowired
	//private VinjetaRepository vinjetaRepository;

	public static void main(String[] args) {
		SpringApplication.run(NakupApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("laufam");
		//for (Vinjete vinjete : vinjetaRepository.findAll()) {
		//	System.out.println(vinjete);
		//}
	}
}

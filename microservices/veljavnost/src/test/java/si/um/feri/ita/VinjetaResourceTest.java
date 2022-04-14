package si.um.feri.ita;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class VinjetaResourceTest {
    /*
    @Test
    public void testVinjetaEndpointGET() {
        given()
          .when().get("/vinjete")
          .then()
             .statusCode(200);
    }

    @Test
    public void testVinjetaEndpointPOST() {
        given()
                .contentType("application/json").body("{\n" +
                        "    \"registrska_stevilka\": \"MBUR535\",\n" +
                        "    \"cestninski_razred\": \"B2\",\n" +
                        "    \"tip\": \"mesecna\",\n" +
                        "    \"modelAvta\": \"Trafic\",\n" +
                        "    \"znamkaAvta\": \"Renault\"\n" +
                        "}")
                .when().post("/vinjete")
                .then()
                .statusCode(200);
    }

    @Test
    public void testVinjetaEndpointPREVERI_POST() {
        given()
                .contentType("text/plain").body("MBUR535")
                .when().post("/vinjete/preveri")
                .then()
                .statusCode(200);
    }
*/
}
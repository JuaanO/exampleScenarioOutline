package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class prueba {

    @Given("^un navegador abierto en Google$")
    public void unNavegadorAbiertoEnGoogle() {
        System.out.println("un navegador abierto en Google");
    }

    @When("^el usuario busque en la caja (.*?) opciones$")
    public void elUsuarioBusqueEnLaCaja(String opcion) {
        System.out.println("La busqueda fue: "+opcion);
    }

    @When("^el usuario presione buscar$")
    public void elUsuarioPresioneBuscar() {
        System.out.println("Presiono buscar");
    }

    @Then("^se mostrara el resultado de la busqueda en la pantalla$")
    public void seMostraraElResultadoDeLaBusquedaEnLaPantalla() {
        System.out.println("El resultado");
    }

}

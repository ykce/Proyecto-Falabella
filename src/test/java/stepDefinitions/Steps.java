package stepDefinitions;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import utilerias.FindElements;
import utilerias.InstanciarNavegador;

public class Steps {
	private WebDriver driver;
	
		@Given("^el usuario está en la página de linkedIn$")
		public void el_usuario_está_en_la_página_de_linkedIn() throws Throwable {
			driver = InstanciarNavegador.getInstance();
			driver.get("https://www.linkedin.com/");   
		}

		@When("^el usuario ingresa el \"([^\"]*)\" y \"([^\"]*)\"$")
		public void el_usuario_ingresa_el_And(String usuario, String contraseña) throws Throwable {
		   FindElements.existElementId("login-email").sendKeys(usuario);
		   FindElements.existElementId("login-password").sendKeys(contraseña);
		}
		@When("^inicia sesion$")
		public void inicia_sesion() throws Throwable {
			FindElements.existElementId("login-submit").click();
		}
		@When("^ingresa a tus contactos y selecciona un contacto$")
		public void ingresa_a_tus_contactos_y_selecciona_un_contacto() throws Throwable {
		    FindElements.existElementId("mynetwork-tab-icon").click();
		    FindElements.existElementCssSelector(".mn-connections-summary__see-all").click();
		    FindElements.existElementCssSelector(".mn-connection-card__name").click();
		}

		@Then("^visualizas el perfil de tu contacto$")
		public void visualizas_el_perfil_de_tu_contacto() throws Throwable {
			
		}
		@Then("^cierro sesión$")
		public void cierro_sesión() throws Throwable {
			FindElements.existElementId("profile-nav-item").click();
			FindElements.existElementlinkTest("Cerrar sesión").click();
		}

		@Then("^el usuario debería ver el mensaje \"([^\"]*)\"$")
		public void el_usuario_debería_ver_el(String mensaje) throws Throwable {
			//new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("pagekey-uas-consumer-captcha-v2")));
			//new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".rc-anchor-logo-portrait")));
			//FindElements.existElementCssSelector(".rc-anchor-logo-portrait").click();
			String resultado=FindElements.existElementId("session_key-login-error").getText();
			//String resultado=FindElements.existElementId("app__container").getText();
			Assert.assertEquals(resultado, mensaje);
		}
		@When("^accedo a mi perfil$")
		public void accedo_a_mi_perfil() throws Throwable {
		    FindElements.existElementCssSelector(".tap-target").click();    
		}

		
		@When("^añado una nueva experiencia con los siguientes datos: \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
		public void añado_una_nueva_experiencia_con_los_siguientes_datos(String cargo, String compañia, String locación, String mes_inicio, String año_inicio, String descripción_posición) throws Throwable {
			FindElements.existElementCssSelector(".pe-hub-section__expand-button").click();
			FindElements.existElementCssSelector(".pe-hub-card-content__action-icon").click();
			FindElements.existElementId("position-title-typeahead").click();
			FindElements.existElementId("position-title-typeahead").clear();
			FindElements.existElementId("position-title-typeahead").sendKeys(cargo);
			FindElements.existElementId("position-company-typeahead").click();
			FindElements.existElementId("position-company-typeahead").clear();
			FindElements.existElementId("position-company-typeahead").sendKeys(compañia);
			FindElements.existElementId("position-location-typeahead").click();
			FindElements.existElementId("position-location-typeahead").clear();
			FindElements.existElementId("position-location-typeahead").sendKeys(locación);
			FindElements.existElementId("position-start-month").click();
			new Select(FindElements.existElementId("position-start-month")).selectByVisibleText(mes_inicio);
			FindElements.existElementId("position-start-year").click();
			new Select(FindElements.existElementId("position-start-year")).selectByVisibleText(año_inicio);
			//FindElements.existElementId("position-currently-works-here").click();
			//FindElements.existElementId("position-update-headline-checkbox").click();
			//FindElements.existElementId("position-headline").click();
			//FindElements.existElementId("position-headline").sendKeys("Analista Banco Falabella");
			FindElements.existElementId("position-description").click();
			FindElements.existElementId("position-description").clear();
			FindElements.existElementId("position-description").sendKeys(descripción_posición);
			FindElements.existElementXpath("(.//*[normalize-space(text()) and normalize-space(.)='Compartir con tu red'])[1]/following::button[1]").click();
		}
		
		@Then("^Se actualiza el perfil con la nueva experiencia$")
		public void se_actualiza_el_perfil_con_la_nueva_experiencia() throws Throwable {
			//utilizado en caso de que se genere mensaje 
			//FindElements.existElementXpath("(.//*[normalize-space(text()) and normalize-space(.)='Cambios guardados. No has actualizado tus demás idiomas del perfil. ¿Quieres guardar y cerrar?'])[1]/following::button[1]").click();
		}
}

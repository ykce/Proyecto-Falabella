package runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/FunctionTestLinkedIn/LinkedIn.feature",
		glue= {"stepDefinitions"},
		plugin = {"html:reportes/cucumber-html-report"}
		)
public class TestRunnerPerfilContactoLinked {

}

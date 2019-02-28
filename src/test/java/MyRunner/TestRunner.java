package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.*;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/home/moganraj/eclipse-workspace/BDDFrameworkModel/src/main/java/Features/",
		glue = {"stepDefinitions"},
		format = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome = true, 
		strict = true, 
		dryRun = false 
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		)

public class TestRunner {

	
}

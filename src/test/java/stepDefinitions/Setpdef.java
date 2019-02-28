package stepDefinitions;

import com.auto.Driver.BaseDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Setpdef extends BaseDriver{
	
	@Before
	public void setup() {
		System.out.println("Open Browser");
		Initilization();
	}
	
	@After
	public void Teardown() throws InterruptedException {
		System.out.println("Close Browser");
		Thread.sleep(5000);
		driver.quit();
	}	
	
	@Given("^User in the login page$")
	public void user_in_the_login_page() throws Throwable {
		System.out.println("User in the login page");
	}

	@When("^User enter username and password$")
	public void user_enter_username_and_password() throws Throwable {
		System.out.println("User enter username and password");
	}

	@When("^User click the Loginbutton$")
	public void user_click_the_Loginbutton() throws Throwable {
		System.out.println("User click the Loginbutton");
	}

	@Then("^User navigate to the Homepage$")
	public void user_navigate_to_the_Homepage() throws Throwable {
		System.out.println("User navigate to the Homepage");
	}

	@Given("^User Navigate to new account setup$")
	public void user_Navigate_to_new_account_setup() throws Throwable {
		System.out.println("User Navigate to new account setup");
	}

	@When("^Registeration page is loaded$")
	public void registeration_page_is_loaded() throws Throwable {
		System.out.println("Registeration page is loaded");
	}

	@Then("^Fill the form and Submit$")
	public void fill_the_form_and_Submit() throws Throwable {
		System.out.println("Fill the form and Submit");
	}



	
}

package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SampleScenarioOutline {
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
		System.out.println("user is already on Login Page");
	}

	@When("^title of login page$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
		System.out.println("title of login page");
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		System.out.println("user enters: " + arg1 + "-" + arg2);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    System.out.println("user clicks on login button");
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.out.println("user is on home page");
	}

	@Given("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() throws Throwable {
		System.out.println("user moves to new contact page");
	}

	@When("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String arg1, String arg2, String arg3) throws Throwable {
		System.out.println("user enters contact details: " + arg1 + "-" + arg2 + "-" + arg3);
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		System.out.println("Close the browser");
	}


}

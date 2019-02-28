Feature: Sample Create Contacts

@RegressionTest @End2End
Scenario Outline: Sample Create a new contact scenario

Given user is already on Login Page
When title of login page
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on home page
Given user moves to new contact page
When user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
	| username | password | firstname | lastname | position |
	| mogan  | test@123 | Mogan 	  | NM    | Automation QE  |
	| sadha  | test@123 | Sadha 	  | NM   | Dev |	
	
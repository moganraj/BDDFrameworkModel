Feature: Sample Login Page Feature

@RegressionTest @SmokeTest @End2End
Scenario: Login to Sample

Given User in the login page
When User enter username and password
And User click the Loginbutton
Then User navigate to the Homepage
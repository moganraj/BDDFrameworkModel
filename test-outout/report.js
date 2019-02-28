$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Login Page Feature",
  "description": "",
  "id": "sample-login-page-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6225353585,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to Sample",
  "description": "",
  "id": "sample-login-page-feature;login-to-sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click the Loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigate to the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Setpdef.user_in_the_login_page()"
});
formatter.result({
  "duration": 84491979,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_enter_username_and_password()"
});
formatter.result({
  "duration": 140341,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_click_the_Loginbutton()"
});
formatter.result({
  "duration": 170111,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_navigate_to_the_Homepage()"
});
formatter.result({
  "duration": 135150,
  "status": "passed"
});
formatter.after({
  "duration": 5076928000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register as new user in Sample",
  "description": "",
  "id": "register-as-new-user-in-sample",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2394447889,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Signup",
  "description": "",
  "id": "register-as-new-user-in-sample;user-signup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User Navigate to new account setup",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Registeration page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill the form and Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "Setpdef.user_Navigate_to_new_account_setup()"
});
formatter.result({
  "duration": 45369,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.registeration_page_is_loaded()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.fill_the_form_and_Submit()"
});
formatter.result({
  "duration": 56594,
  "status": "passed"
});
formatter.after({
  "duration": 5080922184,
  "status": "passed"
});
});
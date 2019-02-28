$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SampleScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Create Contacts",
  "description": "",
  "id": "sample-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sample Create a new contact scenario",
  "description": "",
  "id": "sample-create-contacts;sample-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "sample-create-contacts;sample-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "sample-create-contacts;sample-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "mogan",
        "test@123",
        "Mogan",
        "NM",
        "Automation QE"
      ],
      "line": 17,
      "id": "sample-create-contacts;sample-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "sadha",
        "test@123",
        "Sadha",
        "NM",
        "Dev"
      ],
      "line": 18,
      "id": "sample-create-contacts;sample-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6991635824,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Sample Create a new contact scenario",
  "description": "",
  "id": "sample-create-contacts;sample-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"mogan\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"Mogan\" and \"NM\" and \"Automation QE\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleScenarioOutline.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 87332306,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 70883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mogan",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 25
    }
  ],
  "location": "SampleScenarioOutline.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2212535,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 120167,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_is_on_home_page()"
});
formatter.result({
  "duration": 136920,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 112840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mogan",
      "offset": 29
    },
    {
      "val": "NM",
      "offset": 41
    },
    {
      "val": "Automation QE",
      "offset": 50
    }
  ],
  "location": "SampleScenarioOutline.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 354319,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.close_the_browser()"
});
formatter.result({
  "duration": 185729,
  "status": "passed"
});
formatter.after({
  "duration": 5094798774,
  "status": "passed"
});
formatter.before({
  "duration": 3681300261,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Sample Create a new contact scenario",
  "description": "",
  "id": "sample-create-contacts;sample-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"sadha\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"Sadha\" and \"NM\" and \"Dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleScenarioOutline.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 68237,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sadha",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 25
    }
  ],
  "location": "SampleScenarioOutline.user_enters_and(String,String)"
});
formatter.result({
  "duration": 149928,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 55888,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_is_on_home_page()"
});
formatter.result({
  "duration": 49254,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 46494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sadha",
      "offset": 29
    },
    {
      "val": "NM",
      "offset": 41
    },
    {
      "val": "Dev",
      "offset": 50
    }
  ],
  "location": "SampleScenarioOutline.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 99220,
  "status": "passed"
});
formatter.match({
  "location": "SampleScenarioOutline.close_the_browser()"
});
formatter.result({
  "duration": 28567,
  "status": "passed"
});
formatter.after({
  "duration": 5068960312,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Login Page Feature",
  "description": "",
  "id": "sample-login-page-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2764041835,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to Sample",
  "description": "",
  "id": "sample-login-page-feature;login-to-sample",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
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
  "duration": 65847,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_enter_username_and_password()"
});
formatter.result({
  "duration": 56029,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_click_the_Loginbutton()"
});
formatter.result({
  "duration": 63614,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.user_navigate_to_the_Homepage()"
});
formatter.result({
  "duration": 77963,
  "status": "passed"
});
formatter.after({
  "duration": 5075477280,
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
  "duration": 2406001150,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Signup",
  "description": "",
  "id": "register-as-new-user-in-sample;user-signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
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
  "duration": 59435,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.registeration_page_is_loaded()"
});
formatter.result({
  "duration": 55055,
  "status": "passed"
});
formatter.match({
  "location": "Setpdef.fill_the_form_and_Submit()"
});
formatter.result({
  "duration": 50196,
  "status": "passed"
});
formatter.after({
  "duration": 7313706320,
  "status": "passed"
});
});
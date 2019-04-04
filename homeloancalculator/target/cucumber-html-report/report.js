$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoanCalculaterScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "To test the home loan calculator feature in the ANZ home loan website",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To check the borrowing estimate of a borrower based on his details",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-check-the-borrowing-estimate-of-a-borrower-based-on-his-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am in the Home Loan calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the details \"\u003cApplicationType\u003e\" \"\u003cNoOfDependents\u003e\" \"\u003cProperty Type\u003e\" of the borrower",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the earnings \"\u003cincome\u003e\" \"\u003cotherincome\u003e\" of the borrower",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the expenses \"\u003cexpenses\u003e\" \"\u003chomeloan\u003e\" \"\u003cotherloan\u003e\" \"\u003cothercommitment\u003e\" \"\u003ccreditcardlimit\u003e\" of the borrower",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Borrowing estimate of \"\u003cborrowestimation\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-check-the-borrowing-estimate-of-a-borrower-based-on-his-details;",
  "rows": [
    {
      "cells": [
        "ApplicationType",
        "NoOfDependents",
        "Property Type",
        "income",
        "otherincome",
        "expenses",
        "homeloan",
        "otherloan",
        "othercommitment",
        "creditcardlimit",
        "borrowestimation"
      ],
      "line": 12,
      "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-check-the-borrowing-estimate-of-a-borrower-based-on-his-details;;1"
    },
    {
      "cells": [
        "Single",
        "0",
        "ToLive",
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000",
        "$479,000"
      ],
      "line": 13,
      "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-check-the-borrowing-estimate-of-a-borrower-based-on-his-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "To check the borrowing estimate of a borrower based on his details",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-check-the-borrowing-estimate-of-a-borrower-based-on-his-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am in the Home Loan calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the details \"Single\" \"0\" \"ToLive\" of the borrower",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the earnings \"80000\" \"10000\" of the borrower",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the expenses \"500\" \"0\" \"100\" \"0\" \"10000\" of the borrower",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Borrowing estimate of \"$479,000\" is displayed",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoanBorrowstimate.BrowserSetup()"
});
formatter.result({
  "duration": 2500338703,
  "status": "passed"
});
formatter.match({
  "location": "LoanBorrowstimate.NavigateToHomeLoanPage()"
});
formatter.result({
  "duration": 14165691168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 21
    },
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "ToLive",
      "offset": 34
    }
  ],
  "location": "LoanBorrowstimate.EnterBorrowerDetails(String,String,String)"
});
formatter.result({
  "duration": 354864376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 22
    },
    {
      "val": "10000",
      "offset": 30
    }
  ],
  "location": "LoanBorrowstimate.EnterBorrowerEarnings(String,String)"
});
formatter.result({
  "duration": 482998826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "100",
      "offset": 32
    },
    {
      "val": "0",
      "offset": 38
    },
    {
      "val": "10000",
      "offset": 42
    }
  ],
  "location": "LoanBorrowstimate.EnterBorrowerExpenses(String,String,String,String,String)"
});
formatter.result({
  "duration": 3951317861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$479,000",
      "offset": 23
    }
  ],
  "location": "LoanBorrowstimate.BorrowingEstimateCalculation(String)"
});
formatter.result({
  "duration": 80121236,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Clearing of the entered data in the form",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;clearing-of-the-entered-data-in-the-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click the start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoanBorrowstimate.Startover()"
});
formatter.result({
  "duration": 5210880966,
  "status": "passed"
});
formatter.match({
  "location": "LoanBorrowstimate.CloseBrowser()"
});
formatter.result({
  "duration": 2479326200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "To verify the message text when we enter only 1$ for living expense field",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-verify-the-message-text-when-we-enter-only-1$-for-living-expense-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I open a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I am in the Home Loan calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter \"\u003cexpenses\u003e\" for the living expense and submit",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I get an message stating we are unable to give you a quote",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-verify-the-message-text-when-we-enter-only-1$-for-living-expense-field;",
  "rows": [
    {
      "cells": [
        "expenses"
      ],
      "line": 28,
      "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-verify-the-message-text-when-we-enter-only-1$-for-living-expense-field;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 29,
      "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-verify-the-message-text-when-we-enter-only-1$-for-living-expense-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "To verify the message text when we enter only 1$ for living expense field",
  "description": "",
  "id": "to-test-the-home-loan-calculator-feature-in-the-anz-home-loan-website;to-verify-the-message-text-when-we-enter-only-1$-for-living-expense-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I open a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I am in the Home Loan calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter \"1\" for the living expense and submit",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I get an message stating we are unable to give you a quote",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoanBorrowstimate.BrowserSetup()"
});
formatter.result({
  "duration": 1707519376,
  "status": "passed"
});
formatter.match({
  "location": "LoanBorrowstimate.NavigateToHomeLoanPage()"
});
formatter.result({
  "duration": 9628874329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "LoanBorrowstimate.EnterOnlyLivingExpense(String)"
});
formatter.result({
  "duration": 2263931878,
  "status": "passed"
});
formatter.match({
  "location": "LoanBorrowstimate.VerifyUnableToGetQuoteMsg()"
});
formatter.result({
  "duration": 161561138,
  "status": "passed"
});
formatter.match({
  "location": "LoanBorrowstimate.CloseBrowser()"
});
formatter.result({
  "duration": 138188428,
  "status": "passed"
});
});
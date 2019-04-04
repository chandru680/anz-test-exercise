Feature: To test the home loan calculator feature in the ANZ home loan website

  Scenario Outline: To check the borrowing estimate of a borrower based on his details
    Given I open a web browser
    And I am in the Home Loan calculator page
    When I enter the details "<ApplicationType>" "<NoOfDependents>" "<Property Type>" of the borrower
    And I enter the earnings "<income>" "<otherincome>" of the borrower
    And  I enter the expenses "<expenses>" "<homeloan>" "<otherloan>" "<othercommitment>" "<creditcardlimit>" of the borrower
    Then Borrowing estimate of "<borrowestimation>" is displayed

    Examples:
      | ApplicationType | NoOfDependents   |Property Type|income|otherincome|expenses|homeloan|otherloan|othercommitment|creditcardlimit|borrowestimation|
      | Single    | 0 | ToLive           |80000          |10000 |500|0       |100|0    |10000    |$479,000    |


    Scenario: Clearing of the entered data in the form
      Then I click the start over button
       And I close the Browser

  Scenario Outline: To verify the message text when we enter only 1$ for living expense field
    Given I open a web browser
    Given I am in the Home Loan calculator page
    When I enter "<expenses>" for the living expense and submit
    Then I get an message stating we are unable to give you a quote
    And I close the Browser

    Examples:
    |expenses|
    |1       |

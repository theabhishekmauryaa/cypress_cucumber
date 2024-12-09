

Feature: Simple Form Submission
Scenario: Submit form successfully
    Given I open the Simple Form page
    When I fill  in Name and  in Email
    Then the form is submitted
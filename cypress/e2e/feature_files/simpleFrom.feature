# Feature: Simple form
# Scenario: To verify the form is working for all mandatory fiel
# Given open the url
# And Enter username and pasword
# Then click on button

Feature: Simple Form Submission
Scenario: Submit form successfully
    Given I open the Simple Form page
    When I fill  in Name and  in Email
    Then the form is submitted
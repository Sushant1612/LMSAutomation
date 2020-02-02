Feature: Vadilate Keycloak login page functionality

   
    Scenario: Verify Rakuten user is logged in successfully.

        Given I landed on Keycloak Login page
        When I enter "qauser1" in username and "qauser123" in password
        And I click Submit button
        Then I should be LoggedIn successfully and "Cloud University11" Dashboard page is displayed.
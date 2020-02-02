Feature: Verify user can navigate to My Learning Page

Scenario: To verify user is able to click on my learning Icon 

Given I am landed on UC portal Login page
When  I Entered "sudhant.nagdive" in username field and "sushant16" in password field
Then  I clicked on submit button 
Then  Verify the dashboard title "User Dashboard"
When  I cliked on my learning icon
Then  Verify the my learning page title "My Learning"

Scenario: To verify the All tab and mandatory section

Given I cliked on my learning icon and my learning page opens up
Then  Verify the All tab is present on my learning page "All"
Then  Verify the mandatory section title as "MANDATORY 01"
Then  Verify the image of the course is present
Then  Verify the title of the course is "Verify the total Lectures Completed is present"
Then  Verify the ratings five stars are displyed
Then  Verify the count of people rated is present
Then  Verify the enrollment date is displyed
Then  Verify the total Lectures Completed is present "0/1 Lectures Completed"

















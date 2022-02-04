Feature: Frontend test-developer technical assignment Add page


Scenario: Add valid a New asset valid username

Given I add a New asset on Add asset page
When I enter a valid New asset ARTM1234567890
And I click on the SEND button
Then I should be presented with the following message Correct format

Scenario: Add a New asset invalid username

Given I add a New asset on Add asset page
When I enter a invalid New asset artm1234567890
And I click on the SEND button
Then I should be presented with the following message Incorrect format

#Scenario: Your N-th case
#
#Given ...
#When ...
#And ...
#Then ....

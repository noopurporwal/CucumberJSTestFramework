Feature: Automate Women Summer Dresses Listing Page

Scenario: Navigate to Summer Women Listing Page
Given We are at home Page
When Navigate to Summer->Dresses->Summer Dresses
Then Verify if the navigation was successful

Scenario: Verify Filter results
When Apply any filter "Yellow"
Then Verify if the listing is filtered

Scenario:Verify Sorting results
When Apply sorting with "Price"
Then Verify if the listing is sorted
When Apply sorting with "Product Name"
Then Verify is the listing is sorted
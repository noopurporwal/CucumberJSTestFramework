Feature:Navigate to various pages and verify the presence of header and footer element

Scenario:See if we can launch chrome browser
Given We are at home Page 
Then Verify the presence of "header" element
And Verify the presence of "footer" element

Scenario: See if contact page is also loaded with header and footer
When I open "Contact Us"
Then Verify the presence of "header" element
And Verify the presence of "footer" element


Scenario: See if Sign in page is also loaded with header and footer
When I open "Log in to your customer account"
Then Verify the presence of "header" element
And Verify the presence of "footer" element
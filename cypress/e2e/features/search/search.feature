Feature: Searching product


    Scenario Outline: Visit MP page and perform different searches for an iPhone 13
        Given I am visit MP page
        When I perform a search by name <word>
        Then I should validate that I am get a list of the only mentioned 
        Examples:
        | word |
        | iPhone 13 |
        | Apple |
        | Error |
       
        
    

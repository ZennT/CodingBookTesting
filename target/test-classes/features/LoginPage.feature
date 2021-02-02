Feature:
  Scenario: Go to CodingBook website and test Login Page
    Given Navigate to CodingBook website
    And click on Login button on main page
    And type username or email
    And type password
    And check the remember username checkbox
    When click on login button
    Then verify success login

#    I created scenario about main page.

Feature: Comment Test
  Scenario Outline: Write a comment
    Given Navigate to CodingBook website
    And click on Test Automation sub-menu under Courses menu
    And click on Curriculum
    And click on Test NG – Summary
    And write a comment "<Comment>"
    And type name "<Name>"
    And type email "<Email>"
    And type Website
    And check the Save my information check-box
    When click on Post Comment button
    Then verify success Comment
    Examples:
      | Comment | Name | Email |
      |  C1     |  Ahmet|   ahmet@gmail.com |

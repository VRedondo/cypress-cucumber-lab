Feature: WebdriverUniversity - Contact Us Page

  Scenario: Valid Contact Us From Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact button
    And I type a first name
    And I type a last name
    And I type a email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a succesful contact us submission message
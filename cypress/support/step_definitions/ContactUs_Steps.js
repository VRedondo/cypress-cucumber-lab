const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When(`I type a first name`, () => {
  cy.get('[name="first_name"]').type("Victor");
});

When(`I type a last name`, () => {
  cy.get('[name="last_name"]').type("Redondo");
});

When(`I type a email address`, () => {
  cy.get('[name="email"]').type("dev.victor.redondo@gmail.com");
});

When(`I type a comment`, () => {
  cy.get('textarea[name="message"]').type("Comment added from Cypress");
});

When(`I click on the submit button`, () => {
  cy.get('[type="submit"]').click();
});

Then(
  `I should be presented with a succesful contact us submission message`,
  () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
);

// import Given from "@badeball/cypress-cucumber-preprocessor"; https://github.com/badeball/cypress-cucumber-preprocessor/issues/614
const { When, Given } = require("@badeball/cypress-cucumber-preprocessor");

const url = "http://www.webdriveruniversity.com/";

Given(`I navigate to the webdriveruniversity homepage`, () => {
  cy.visit(url);
});

When(`I click on the contact button`, () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click();
});

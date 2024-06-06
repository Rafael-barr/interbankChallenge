const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { searchPage } = require("../../../pageObjects/SearchPage");
const { visitPage } = require("../../../pageObjects/VisitPage");

Given("I am visit MP page", function () {
  visitPage.visit();
});

When(/^I perform a search by name (.*)$/, function (product) {
  product === "iPhone 13"
    ? searchPage.wayToResultsPage(product)
    : searchPage.anotherPathResult(product);
});

Then(
  "I should validate that I am get a list of the only mentioned",
  function () {
    cy.origin('https://www.mercadolibre.com', { args: { searchPage } }, ({ searchPage }) => {
      cy.get('body');
      cy.get('.center-card__title').should('be.visible').contains('¡Hola! Para comprar, ingresá a tu cuenta');
      

    });  
  });

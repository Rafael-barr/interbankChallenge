const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { visitPage } = require("../../../pageObjects/VisitPage");

Given("I am visit MP page", function () {
  visitPage.visit();
});

Then(/^I should validate that I am on the right page$/, function () {
  visitPage.validateHeaderComponent();
});

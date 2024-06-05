const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { visitPage } = require("../../pageObjects/VisitPage");

Given("I am visit MP pages", function () {
  visitPage.visit();
});

Then(/^I should validate that I am on the right pages$/, function () {
  visitPage.validateHeaderComponent();
});

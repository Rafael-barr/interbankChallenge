const {
    Given,
    When,
    Then,
  } = require("@badeball/cypress-cucumber-preprocessor");
const { apiSearchPage } = require("../../../pageObjects/ApiSearch");
  
  Given("I send a direct request to the MP API", function () {
      const apiURL = 'https://api.mercadolibre.com/sites/$SITE_ID/search?q=Iphone%2013'
  });
  
  Then("I should validate the response", function () {
    apiSearchPage.sendResquest();
  });
  
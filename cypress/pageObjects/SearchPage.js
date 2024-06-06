export class SearchPage {
  constructor() {
    this.selectors = {
      logo: ".andes-tag__label",
      searchInput: "#cb1-edit",
      iconButton: ".nav-search-btn",
      categoryButton: ".nav-menu-categories-link",
      laterButton: ".ui-search-breadcrumb__title",
      smartphoneOption:
        ":nth-child(6) > ul > :nth-child(3) > .ui-search-link > .ui-search-filter-name",
      iphone13Option:
        ":nth-child(5) > ul > :nth-child(7) > .ui-search-link > .ui-search-filter-name",
      topSearchTitle: ".ui-search-top-keywords__list > :nth-child(1)",
      top1: ":nth-child(2) > .ui-search-top-keywords__link",
      top2: ":nth-child(3) > .ui-search-top-keywords__link",
      top3: ":nth-child(4) > .ui-search-top-keywords__link",
      searchResultsContainer: ".ui-search-results",
      result01:
        ".ui-search-result__content-wrapper > .ui-search-item__group--title",
      buyButton: "#\\:R15d3a6c4um\\:",
      loginCard: ":R17:",
      cardTitle: ".center-card__title",
      createAccButton: "#registration-link > span",
      loginButton: "#\\:R577\\: > span",
    };
  }

  wayToResultsPage(product) {
    cy.get(this.selectors.searchInput)
      .should("be.visible")
      .and("have.attr", "placeholder", "Buscar productos, marcas y más…")
      .click()
      .type(product);
    cy.get(this.selectors.iconButton).should("be.visible").click();
    this.validateSearchResultsComponent(product);
    cy.get(this.selectors.result01).first().click();
    cy.get(this.selectors.buyButton).first().click();
  }

  anotherPathResult(product) {
    cy.get(this.selectors.searchInput)
      .should("be.visible")
      .and("have.attr", "placeholder", "Buscar productos, marcas y más…")
      .click()
      .type(product);
    cy.get(this.selectors.iconButton).should("be.visible").click();
    this.validateSearchResultsComponent(product);
    cy.get(this.selectors.smartphoneOption)
      .should("be.visible")
      .contains("Celulares y Smartphones")
      .click();
    cy.get(this.selectors.iphone13Option)
      .scrollIntoView()
      .should("be.visible")
      .contains("iPhone 13")
      .click();
    cy.get(this.selectors.result01).first().click();
    cy.get(this.selectors.buyButton).first().click();
  }

  tryLogin() {
    cy.get('body');
    cy.get(this.selectors.cardTitle).should('be.visible').contains('¡Hola! Para comprar, ingresá a tu cuenta');
  }

  validateHeaderVisibility(product) {
    const option = product === "iPhone 13" ? "Iphone 13" : "Apple";
    cy.get(this.selectors.laterButton).should("be.visible").contains(option);
  }

  validateTopSearch() {
    cy.get(this.selectors.topSearchTitle)
      .should("be.visible")
      .contains("Búsquedas relacionadas");
  }

  validateTop1Result(product) {
    const option = product === "iPhone 13" ? "iphone 14" : "magsafe";
    cy.get(this.selectors.top1).should("be.visible").contains(option);
  }

  validateTop2Result(product) {
    const option = product === "iPhone 13" ? "iphone 11" : "apple watch";
    cy.get(this.selectors.top2).should("be.visible").contains(option);
  }

  validateTop3Result(product) {
    const option = product === "iPhone 13" ? "iphone 15" : "apple watch se";
    cy.get(this.selectors.top3).should("be.visible").contains(option);
  }

  validateResultsContainer() {
    cy.get(this.selectors.searchResultsContainer).should("be.visible");
  }

  validateResults01() {
    cy.get(this.selectors.result01).should("be.visible");
  }

  validateSearchResultsComponent(product) {
    this.validateHeaderVisibility(product);
    this.validateTopSearch();
    this.validateTop1Result(product);
    this.validateTop2Result(product);
    this.validateTop3Result(product);
    this.validateResultsContainer();
    this.validateResults01();
  }
}

export const searchPage = new SearchPage();

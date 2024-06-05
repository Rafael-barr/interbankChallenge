export class VisitPage {
  constructor() {
    this.selectors = {
      header: ".nav-header > .nav-bounds",
      argOption: "#AR",
      logo: ".nav-logo",
      searchInput: "#cb1-edit",
      subscribeButton: ".exhibitor__picture > img",
      addressButton: ".nav-menu-cp > .nav-menu-link-cp",
      categoryButton: ".nav-menu-categories-link",
      offerButton: ":nth-child(2) > .nav-menu-item-link",
      historyButton: ":nth-child(3) > .nav-menu-item-link",
      supermarketButton: ":nth-child(4) > .nav-menu-item-link",
      registrationButton: '[href="https://www.mercadolibre.com.ar/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2F#nav-header"]',
      loginButton: '[href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&loginType=explicit#nav-header"]',
      purchasesButton: '[href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header"]',
      shoppingCartButton: ".nav-icon-cart"
    };
  }

  visit() {
    cy.visit("https://www.mercadolibre.com.ar/");
  }

  validateHeaderVisibility() {
    cy.get(this.selectors.header).should("be.visible");
  }

  validateLogo() {
    cy.get(this.selectors.logo)
      .should("be.visible")
      .contains("Mercado Libre Argentina - Donde comprar y vender de todo");
  }

  validateSearchInput() {
    cy.get(this.selectors.searchInput)
      .should("be.visible")
      .and("have.attr", "placeholder", "Buscar productos, marcas y más…");
  }

  validateSubscribeButton() {
    cy.get(this.selectors.subscribeButton)
      .should("be.visible")
      .and("have.attr", "title", "Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos");
  }

  validateAddressButton() {
    cy.get(this.selectors.addressButton)
      .should("be.visible")
      .contains("Ingresa tu domicilio");
  }

  validateCategoryButton() {
    cy.get(this.selectors.categoryButton)
      .should("be.visible")
      .contains("Categorías");
  }

  validateOfferButton() {
    cy.get(this.selectors.offerButton)
      .should("be.visible")
      .contains("Ofertas");
  }

  validateHistoryButton() {
    cy.get(this.selectors.historyButton)
      .should("be.visible")
      .contains("Historial");
  }

  validateSupermarketButton() {
    cy.get(this.selectors.supermarketButton)
      .should("be.visible")
      .contains("Supermercado");
  }

  validateRegistrationButton() {
    cy.get(this.selectors.registrationButton)
      .should("be.visible")
      .contains("Creá tu cuenta");
  }

  validateLoginButton() {
    cy.get(this.selectors.loginButton)
      .should("be.visible")
      .contains("Ingresá");
  }

  validatePurchasesButton() {
    cy.get(this.selectors.purchasesButton)
      .should("be.visible")
      .contains("Mis compras");
  }

  validateShoppingCartButton() {
    cy.get(this.selectors.shoppingCartButton).should("be.visible");
  }

  validateHeaderComponent() {
    this.validateHeaderVisibility();
    this.validateLogo();
    this.validateSearchInput();
    this.validateSubscribeButton();
    this.validateAddressButton();
    this.validateCategoryButton();
    this.validateOfferButton();
    this.validateHistoryButton();
    this.validateSupermarketButton();
    this.validateRegistrationButton();
    this.validateLoginButton();
    this.validatePurchasesButton();
    this.validateShoppingCartButton();
  }
}

export const visitPage = new VisitPage();

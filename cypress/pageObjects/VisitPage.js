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
      registrationButton:
        '[href="https://www.mercadolibre.com.ar/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2F#nav-header"]',
      loginButton:
        '[href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&loginType=explicit#nav-header"]',
      purchasesButton:
        '[href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header"]',
      shoppingCartButton: ".nav-icon-cart",
    };
  }

  visit() {
    const env = Cypress.env("Test")[0];
    cy.intercept("GET", env.departments).as("deps");
    cy.visit(env.url);
    cy.wait("@deps").then((interception) => {
      const resp = interception.response.body;
      const dep = resp.departments[0];
      const cat = dep.categories;
      const lang = resp.landings;
      cy.log(interception);
      expect(resp).to.have.all.keys(
        "departments",
        "landings",
        "more_categories",
        "high_priority"
      );
      expect(dep).to.exist.and.to.be.an("object");
      expect(cat).to.exist.and.to.be.an("array");
      expect(lang).to.exist.and.to.be.an("array");

      // Verify that the array has elements
      expect(cat.length).to.be.at.least(6);

      // Verify that each element of the array has the expected attr and their types
      cat.slice(0, 6).forEach(function (item, index) {
        (
          `Result item at index ${index} should have correct structure`,
          function () {
            expect(item).to.have.property("id").that.is.a("string");
            expect(item).to.have.property("name").that.is.a("string");
            expect(item).to.have.property("permalink").that.is.a("string");
          }
        );
      });

      // Verify that the array has elements
      expect(lang.length).to.be.at.least(17);

      // Verify that each element of the array has the expected attr and their types
      lang.slice(0, 17).forEach(function (item, index) {
        (
          `Result item at index ${index} should have correct structure`,
          function () {
            expect(item).to.have.property("label").that.is.a("string");
            expect(item).to.have.property("permalink").that.is.a("string");
          }
        );
      });

      const expectedResults = {
        departments: [
          {
            name: "Tecnología",
            categories: [
              {
                id: "MLA1051",
                name: "Celulares y Teléfonos",
                permalink:
                  "https://www.mercadolibre.com.ar/c/celulares-y-telefonos#menu=categories",
                children_categories: [
                  {
                    id: "MLA1055",
                    name: "Celulares y Smartphones",
                    permalink:
                      "https://listado.mercadolibre.com.ar/celulares-telefonos/celulares-smartphones/#menu=categories",
                  },
                  {
                    id: "MLA3502",
                    name: "Accesorios para Celulares",
                    permalink:
                      "https://listado.mercadolibre.com.ar/celulares-telefonos/accesorios-celulares/#menu=categories",
                  },
                  {
                    id: "MLA3813",
                    name: "Repuestos de Celulares",
                    permalink:
                      "https://listado.mercadolibre.com.ar/celulares-telefonos/repuestos-celulares/#menu=categories",
                  },
                ],
              },
              {
                id: "MLA1648",
                name: "Computación",
                permalink:
                  "https://www.mercadolibre.com.ar/c/computacion#menu=categories",
                children_categories: [
                  {
                    id: "MLA3794",
                    name: "Componentes de PC",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/componentes-pc/#menu=categories",
                  },
                  {
                    id: "MLA2141",
                    name: "Impresión",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/impresion/#menu=categories",
                  },
                  {
                    id: "MLA400950",
                    name: "Tablets y Accesorios",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/tablets-accesorios/tablets/#menu=categories",
                  },
                  {
                    id: "MLA1649",
                    name: "PC",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/pc-escritorio/pc/#menu=categories",
                  },
                  {
                    id: "MLA1700",
                    name: "Conectividad y Redes",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/conectividad-redes/#menu=categories",
                  },
                  {
                    id: "MLA1656",
                    name: "Monitores y Accesorios",
                    permalink:
                      "https://listado.mercadolibre.com.ar/computacion/monitores-accesorios/#menu=categories",
                  },
                ],
              },
              {
                id: "MLA1039",
                name: "Cámaras y Accesorios",
                permalink:
                  "https://www.mercadolibre.com.ar/c/camaras-y-accesorios#menu=categories",
                children_categories: [
                  {
                    id: "MLA1042",
                    name: "Cámaras Digitales",
                    permalink:
                      "https://listado.mercadolibre.com.ar/camaras-accesorios/camaras/camaras-digitales/#menu=categories",
                  },
                  {
                    id: "MLA1049",
                    name: "Accesorios para Cámaras",
                    permalink:
                      "https://listado.mercadolibre.com.ar/camaras-accesorios/accesorios-camaras/#menu=categories",
                  },
                  {
                    id: "MLA392132",
                    name: "Filmadoras y Cámaras de Acción",
                    permalink:
                      "https://listado.mercadolibre.com.ar/camaras-accesorios/filmadoras-camaras-accion/#menu=categories",
                  },
                ],
              },
              {
                id: "MLA1000",
                name: "Electrónica, Audio y Video",
                permalink:
                  "https://www.mercadolibre.com.ar/c/electronica-audio-y-video#menu=categories",
                children_categories: [
                  {
                    id: "MLA409810",
                    name: "Audio",
                    permalink:
                      "https://listado.mercadolibre.com.ar/electronica-audio-video/audio/#menu=categories",
                  },
                  {
                    id: "MLA3690",
                    name: "Accesorios para Audio y Video",
                    permalink:
                      "https://listado.mercadolibre.com.ar/electronica-audio-video/accesorios-audio-video/#menu=categories",
                  },
                  {
                    id: "MLA11830",
                    name: "Componentes Electrónicos",
                    permalink:
                      "https://listado.mercadolibre.com.ar/electronica-audio-video/componentes-electronicos/#menu=categories",
                  },
                  {
                    id: "MLA352294",
                    name: "Drones y Accesorios",
                    permalink:
                      "https://listado.mercadolibre.com.ar/electronica-audio-video/drones-accesorios/#menu=categories",
                  },
                  {
                    id: "MLA1003",
                    name: "Audio para Vehículos",
                    permalink:
                      "https://listado.mercadolibre.com.ar/accesorios-vehiculos/audio-vehiculos/#menu=categories",
                  },
                  {
                    id: "MLA1002",
                    name: "Televisores",
                    permalink:
                      "https://listado.mercadolibre.com.ar/electronica-audio-video/televisores/#menu=categories",
                  },
                ],
              },
              {
                id: "MLA1144",
                name: "Consolas y Videojuegos",
                permalink:
                  "https://www.mercadolibre.com.ar/c/consolas-y-videojuegos#menu=categories",
                children_categories: [
                  {
                    id: "MLA373840",
                    name: "Videojuegos",
                    permalink:
                      "https://listado.mercadolibre.com.ar/consolas-videojuegos/videojuegos/#menu=categories",
                  },
                  {
                    id: "MLA373769",
                    name: "Para PlayStation",
                    permalink:
                      "https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/playstation/#menu=categories",
                  },
                  {
                    id: "MLA373768",
                    name: "Para Nintendo",
                    permalink:
                      "https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/nintendo/#menu=categories",
                  },
                ],
              },
              {
                id: "MLA1002",
                name: "Televisores",
                permalink:
                  "https://listado.mercadolibre.com.ar/electronica-audio-video/televisores/#menu=categories",
                children_categories: [
                  {
                    id: "MLA123858",
                    permalink: "#menu=categories",
                  },
                  {
                    id: "MLA124820",
                    permalink: "#menu=categories",
                  },
                  {
                    id: "MLA321526",
                    permalink: "#menu=categories",
                  },
                  {
                    id: "MLA321622",
                    permalink: "#menu=categories",
                  },
                ],
              },
            ],
          },
        ],
        landings: [
          {
            label: "Hogar y Muebles",
            permalink:
              "https://www.mercadolibre.com.ar/c/hogar-muebles-y-jardin#menu=categories",
          },
          {
            label: "Electrodomésticos",
            permalink:
              "https://www.mercadolibre.com.ar/c/electrodomesticos-y-aires-ac#menu=categories",
          },
          {
            label: "Herramientas",
            permalink:
              "https://www.mercadolibre.com.ar/c/herramientas#menu=categories",
          },
          {
            label: "Construcción",
            permalink:
              "https://www.mercadolibre.com.ar/c/construccion#menu=categories",
          },
          {
            label: "Deportes y Fitness",
            permalink:
              "https://www.mercadolibre.com.ar/c/deportes-y-fitness#menu=categories",
          },
          {
            label: "Accesorios para Vehículos",
            permalink:
              "https://www.mercadolibre.com.ar/c/accesorios-para-vehiculos#menu=categories",
          },
          {
            label: "Moda",
            permalink:
              "https://www.mercadolibre.com.ar/c/ropa-y-accesorios#menu=categories",
          },
          {
            label: "Juegos y Juguetes",
            permalink:
              "https://www.mercadolibre.com.ar/c/juegos-y-juguetes#menu=categories",
          },
          {
            label: "Bebés",
            permalink:
              "https://www.mercadolibre.com.ar/c/bebes#menu=categories",
          },
          {
            label: "Belleza y Cuidado Personal",
            permalink:
              "https://www.mercadolibre.com.ar/c/belleza-y-cuidado-personal#menu=categories",
          },
          {
            label: "Salud y Equipamiento Médico",
            permalink:
              "https://www.mercadolibre.com.ar/c/salud-y-equipamiento-medico#menu=categories",
          },
          {
            label: "Industrias y Oficinas",
            permalink:
              "https://www.mercadolibre.com.ar/c/industrias-y-oficinas#menu=categories",
          },
          {
            label: "Agro",
            permalink: "https://www.mercadolibre.com.ar/c/agro#menu=categories",
          },
          {
            label: "Productos Sustentables",
            permalink:
              "https://www.mercadolibre.com.ar/productos-sustentables#menu=categories",
          },
          {
            label: "Servicios",
            permalink:
              "https://www.mercadolibre.com.ar/c/servicios#menu=categories",
          },
          {
            label: "Más vendidos",
            permalink:
              "https://www.mercadolibre.com.ar/mas-vendidos#menu=categories",
          },
          {
            label: "Tiendas oficiales",
            permalink:
              "https://www.mercadolibre.com.ar/tiendas-oficiales#menu=categories",
          },
        ],
        more_categories: {
          label: "Ver más categorías",
          permalink:
            "https://www.mercadolibre.com.ar/categorias#menu=categories",
        },
        high_priority: [
          {
            label: "Vehículos",
            permalink:
              "https://www.mercadolibre.com.ar/vehiculos/#menu=categories",
          },
          {
            label: "Inmuebles",
            permalink:
              "https://www.mercadolibre.com.ar/inmuebles/#menu=categories",
          },
          {
            label: "Supermercado",
            permalink:
              "https://www.mercadolibre.com.ar/ofertas/supermercado#menu=categories",
          },
        ],
      };
      
if (expectedResults.departments && expectedResults.departments[0] && expectedResults.departments[0].categories) {
  expectedResults.departments[0].categories.forEach((expected, index) => {
    (`Category at index ${index} should match expected values`, function() {
      const result = cat[index]; 
      expect(result.id).to.eql(expected.id);
      expect(result.name).to.eql(expected.name);
      expect(result.permalink).to.eql(expected.permalink);
    });
  });
}

if (expectedResults.landings) {
  expectedResults.landings.forEach((expected, index) => {
    (`Landing at index ${index} should match expected values`, function() {
      const result = lang[index]; 
      expect(result.label).to.eql(expected.label);
      expect(result.permalink).to.eql(expected.permalink);
    });
  });
}
      expect(interception.response.statusCode).to.eq(200);
    });
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
      .and(
        "have.attr",
        "title",
        "Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
      );
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
    cy.get(this.selectors.offerButton).should("be.visible").contains("Ofertas");
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
    cy.get(this.selectors.loginButton).should("be.visible").contains("Ingresá");
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

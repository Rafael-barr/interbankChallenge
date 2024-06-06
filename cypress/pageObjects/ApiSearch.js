export class ApiSearchPage {
    constructor() { }
    

  sendResquest() {
    const env = Cypress.env("Test")[0];
    const apiUrl = env.api_url;
        cy.request({
            url: apiUrl, method: "GET",
            headers: {
                accept: "*/*",
                Authorization: `Bearer $ACCESS_TOKEN`,
            },
            qs: {
                q: 'Iphone 13'
            }
        }).then((response) => {
        
      // Validating status code
      expect(response.status).to.eq(200);

      // Validating response structure
      expect(response.body).to.have.property("site_id", "MLA");
      expect(response.body).to.have.property("query", "Iphone 13");
      expect(response.body).to.have.property("paging");
      expect(response.body.paging).to.have.property("total").to.be.a("number");
      expect(response.body.paging)
        .to.have.property("primary_results")
        .to.be.a("number");
      expect(response.body.paging).to.have.property("offset").to.be.a("number");
      expect(response.body.paging).to.have.property("limit").to.be.a("number");
      expect(response.body).to.have.property("results").to.be.an("array");

      // Validating the first item in the results array
      const firstItem = response.body.results[0];
      expect(firstItem).to.have.property("id").to.be.a("string");
      expect(firstItem).to.have.property("title").to.be.a("string");
      expect(firstItem).to.have.property("condition").to.be.a("string");
      expect(firstItem).to.have.property("thumbnail_id").to.be.a("string");
      expect(firstItem)
        .to.have.property("catalog_product_id")
        .to.be.a("string");
      expect(firstItem).to.have.property("listing_type_id").to.be.a("string");
      expect(firstItem).to.have.property("permalink").to.be.a("string");
      expect(firstItem).to.have.property("buying_mode").to.be.a("string");
      expect(firstItem).to.have.property("site_id").to.be.a("string");
      expect(firstItem).to.have.property("category_id").to.be.a("string");
      expect(firstItem).to.have.property("domain_id").to.be.a("string");
      expect(firstItem).to.have.property("thumbnail").to.be.a("string");
      expect(firstItem).to.have.property("currency_id").to.be.a("string");
      expect(firstItem).to.have.property("price").to.be.a("number");
      expect(firstItem)
        .to.have.property("original_price")
        .to.satisfy((value) => {
          return value === null || typeof value === "number";
        });
      expect(firstItem)
        .to.have.property("available_quantity")
        .to.be.a("number");
      expect(firstItem)
        .to.have.property("official_store_id")
        .to.satisfy((value) => {
          return value === null || typeof value === "number";
        });
      expect(firstItem)
        .to.have.property("accepts_mercadopago")
        .to.be.a("boolean");
      expect(firstItem).to.have.property("shipping").to.be.an("object");
      expect(firstItem).to.have.property("seller").to.be.an("object");
      expect(firstItem).to.have.property("attributes").to.be.an("array");
      expect(firstItem)
        .to.have.property("installments")
        .to.satisfy((value) => {
          return value === null || typeof value === "object";
        });
      expect(firstItem).to.have.property("catalog_listing").to.be.a("boolean");
    });
  }
}

export const apiSearchPage = new ApiSearchPage();

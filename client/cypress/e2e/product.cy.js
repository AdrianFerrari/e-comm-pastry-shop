/// <reference types="cypress" />

describe("browse and add products to carts", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/products')
        cy.fixture('data.json').as('cakes_data')
        cy.intercept('GET', 'http://localhost:3000/api/data/*', 'cakes_data').as('getCakesData')
    })

    it("categories menu should change from dropdown to categories", () => {
        cy.viewport(400, 500)
        cy.get(".sidebar").should("be.not.visible")
        cy.get(".menu-container").should("be.visible")

        cy.viewport(901,900)
        cy.get(".sidebar").should("be.visible")
        cy.get(".menu-container").should("be.not.visible")
    })

    it("change product categories", () => {
        cy.contains("Chocolate Stout").as("Stout")
        cy.contains("Coffe cake").as("Coffe")

        cy.viewport(400, 500)
        cy.get(".menu-container").click().contains("Cafe").click()
        cy.get("@Stout").should("not.exist")
        cy.get("@Coffe").should("be.visible")

        cy.get(".menu-container").contains("All").click()
        cy.get("@Stout").should("be.visible")

        cy.viewport(901,900)
        cy.get(".sidebar > button").contains("Cafe").click()
        cy.get("@Stout").should("not.exist")
        cy.get("@Coffe").should("be.visible")
    })

    it("can add a product to the cart and remove it", () => {
        cy.get(".product").first().click()
        cy.contains("Agregar al carrito").click()
        cy.get(".cart-link").click()
        cy.get(".cart-item").as("product").should("be.visible")
        cy.get(".bin-icon").click()
        cy.get("@product").should("not.exist")
    })

    it("grid and list buttons work", () => {
        cy.get(".list-button").click()
        cy.get(".description").should("be.visible")
        cy.get(".grid-button").click()
        cy.get(".description").should("be.not.visible")
    })
})
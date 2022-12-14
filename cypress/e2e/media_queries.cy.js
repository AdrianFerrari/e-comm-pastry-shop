/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe("Media queries for Home page", () => {
    it("test different viewports", () => {
        cy.visit('/')

        cy.viewport(500, 500)
        cy.get(".home-section-1-img").wait(500).should("not.be.visible")
        cy.get(".chef-cards").should("have.css", "flex-direction", "column")

        cy.viewport(616, 600)
        cy.get(".home-section-1-img").wait(1200).should("be.visible")
        cy.get(".chef-cards").should("have.css", "flex-direction", "row")
    })
    it("Media queries for Product page", () => {
        cy.visit('/products')

        cy.viewport(400, 500)
        cy.get(".sidebar").should("not.exist")
        cy.get(".menu-container").should("be.visible")

        cy.viewport(901,900)
        cy.get(".sidebar").should("be.visible")
        cy.get(".menu-container").should("be.not.visible")
    })
})  
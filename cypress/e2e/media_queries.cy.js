/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe("Media queries for Home page", () => {
    it("test different viewports", () => {
        cy.visit('/')

        cy.viewport(500, 500)
        cy.get(".home-section-1-img").wait(500).should("not.be.visible")
        cy.get(".chef-cards").should("have.css", "flex-direction", "column")

        cy.viewport(916, 916)
        cy.get(".home-section-1-img").wait(1200).should("be.visible")
        cy.get(".chef-cards").should("have.css", "flex-direction", "row")
    })
})  
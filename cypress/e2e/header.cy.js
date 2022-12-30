/// <reference types="cypress" />

describe("header", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("current page highlighter works when changing page to home", () => {
    cy.get(".home-link").click()
      .then((pos1) => {
        cy.get(".nav-pointer")
          .wait(1000)
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
  it("current page highlighter works when changing page to product", () => {
    cy.get(".product-link").click()
      .then((pos1) => {
        cy.get(".nav-pointer")
          .wait(1000)
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
  it("current page highlighter works when changing pages to contact", () => {
    cy.get(".contact-link").click()
      .then((pos1) => {
        cy.get(".nav-pointer")
          .wait(1000)
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
});

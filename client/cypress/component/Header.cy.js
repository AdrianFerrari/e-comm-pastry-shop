import Header from "../../src/components/Header";
import React from "react";

describe("Header", () => {
  it("current page highlighter works when changing page to home", () => {
    cy.mount(<Header currentPage={"home"} />);
    cy.get(".home-link")
      .then((pos1) => {
        cy.get(".nav-pointer")
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
  it("current page highlighter works when changing page to product", () => {
    cy.mount(<Header currentPage={"products"} />);
    cy.get(".product-link")
      .then((pos1) => {
        cy.get(".nav-pointer")
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
  it("current page highlighter works when changing pages to contact", () => {
    cy.mount(<Header currentPage={"contact"} />);
    cy.get(".contact-link")
      .then((pos1) => {
        cy.get(".nav-pointer")
          .should("be.visible")
          .then((pos2) => {
            expect(pos1.position().left).to.be.eq(pos2.position().left);
          });
      });
  });
});

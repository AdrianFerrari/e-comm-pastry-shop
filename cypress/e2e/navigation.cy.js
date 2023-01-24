/// <reference types="cypress" />

describe('can change pages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can change to products', () => {
    cy.get('header').contains("Productos").click()
    cy.location('pathname').should('eq', '/products')
    
  })

  it('can change to contacts', () => {
    cy.get('header').contains("Contactos").click()
    cy.location('pathname').should('eq', '/contact')
  })

  it('can go to shopping cart', () => {
    cy.get(".cart-link").click()
    cy.location('pathname').should('eq', '/cart')
  })

  it('can go to the buy product page of each item', () => {
    cy.get('header').contains("Productos").click()
    
    cy.get('.product').each((product) => {
      const name = product.find('h3').text()
      cy.visit(product.find('.image-container').attr('href'))
      cy.get('h3').should('have.text', name)
      cy.go('back')
    })

  })
})

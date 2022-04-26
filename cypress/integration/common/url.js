/// <reference types="Cypress" />

describe("Test Contract us Url", () => {

    it.only("Url verification on contact us form", () => {
        let contactUrl = 'https://webdriveruniversity.com/Contact-Us/contactus.html'
        cy.visit(contactUrl);
        cy.url().should('contain', 'Contact-Us');
        cy.url().should('include', 'contactus');
        cy.url().should('eq', contactUrl);
    })
})
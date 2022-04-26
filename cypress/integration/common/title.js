/// <reference types="Cypress" />

describe("Test Contract us Title", () => {

    it.only("Title verification on contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        let expected_title = 'WebDriver | Contact Us';
        cy.title().should('include', expected_title);
        cy.title().should('eq', expected_title);
    })
})
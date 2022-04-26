/// <reference types="Cypress" />

describe("Test Contract us from via webdriveruni", () => {

    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.get('[name="first_name"]').type("Cypress");
        cy.get('[name="last_name"]').type("Cypress");
        cy.get('[name="email"]').type("mail@test.com");
        cy.get('textarea.feedback-input').type('This is a test');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    })

    it("Should not be able to submit a successful submission via contact us form as all fileds are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Cypress");
        cy.get('[name="last_name"]').type("Cypress");
        cy.get('textarea.feedback-input').type('This is a test');
        cy.get('[type="submit"]').click();
        cy.get('body').should('contain', 'Error: all fields are required');
    })

    it("Should not be able to submit a successful submission via contact us form as valid email is required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Cypress");
        cy.get('[name="last_name"]').type("Cypress");
        cy.get('[name="email"]').type("mailtest.com");
        cy.get('textarea.feedback-input').type('This is a test');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Invalid email address');
    })

})
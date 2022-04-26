describe("Test Contract us from via webdriveruni", () => {

    it.only("Document Title and success message verification", () => {
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
})
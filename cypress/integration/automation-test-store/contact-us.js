/// <reference types="Cypress" />

describe("Test Contract us from via Automation Test Store", () => {

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Cypress')
        cy.get('#ContactUsFrm_email').type('test')
        cy.get('#ContactUsFrm_enquiry').type('Awesome')
        cy.get('.col-md-6 > .btn').click()
    })

})
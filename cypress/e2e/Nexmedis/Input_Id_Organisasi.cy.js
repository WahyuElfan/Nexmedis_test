import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

   Given("User membuka halaman utama", () => {
      
      cy.visit('https://stg-app.nexmedis.com/')

   });

   When("User input id organisasi", () => {

      cy.get('#id').type('official_nexmedis').click()
      cy.wait(5000)

   });

   Then("Berhasil masuk ke halaman login", () => {

      cy.get('.btn')
        .should('be.visible')
        .click()

   });
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

   Given("Akses halaman id organisasi", () => {
      
      cy.visit('https://stg-app.nexmedis.com/')

   });

   When("User tidak input field id organisasi", () => {

      cy.get('#id').should('be.empty')

      cy.wait(5000)

   });

   Then("Tampil notifiksai Gagal", () => {

      cy.get('.btn', { timeout: 5000})
        .click()
    
      cy.on("window:alert", (alertText) => {
         expect(alertText).to.include("Gagal");
        });

   });
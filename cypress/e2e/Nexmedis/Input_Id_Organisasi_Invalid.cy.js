import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

   Given("User akses halaman id organisasi", () => {
      
      cy.visit('https://stg-app.nexmedis.com/')

   });

   When("User input id organisasi tidak valid", () => {

      cy.get('#id').type('official tidak valid').click()

      cy.wait(5000)

   });

   Then("Tampil dialog Gagal", () => {

      cy.get('.btn').click()

   });
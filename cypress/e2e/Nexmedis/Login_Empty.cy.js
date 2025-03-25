import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Akses halaman login", () => {
   cy.visit('https://stg-app.nexmedis.com/');

   cy.get('#id').type('official_nexmedis').click()
   
   cy.get('.btn').click()
});

When("User tidak input username & password", () => {
   cy.wait(5000)
   cy.get("#id").should('be.empty')
   cy.get("#password").should('be.empty')
});

Then("Menampilkan notif Gagal", () => {
   cy.get(".btn")
     .should("be.visible")
     .click();

    cy.on("window:alert", (alertText) => {
       expect(alertText).to.include("Gagal");
    });
});

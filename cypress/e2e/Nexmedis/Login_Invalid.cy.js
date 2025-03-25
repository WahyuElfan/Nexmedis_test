import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User akses halaman login", () => {
   cy.visit('https://stg-app.nexmedis.com/');

   cy.get('#id').type('official_nexmedis').click()
   
   cy.get('.btn').click()
});

When("User input username & password Invalid", () => {
   cy.wait(5000)
   cy.get("#id").should("be.visible").type("qa")
   cy.get("#password").type("p");
});

Then("Tampil notif Gagal", () => {
   cy.get(".btn")
     .should("be.visible")
     .click();

    cy.on("window:alert", (alertText) => {
       expect(alertText).to.include("Gagal");
    });
});

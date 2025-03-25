import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User membuka halaman login", () => {
   cy.visit('https://stg-app.nexmedis.com/');

   cy.get('#id').type('official_nexmedis').click()
   
   cy.get('.btn').click()
});

When("User input username & password", () => {
   cy.wait(5000)
   cy.get("#id").should("be.visible").type("qa-rec@nexmedis.com")
   cy.get("#password").type("password1234");
});

Then("Berhasil masuk ke halaman dashboard", () => {
   cy.get(".btn")
     .should("be.visible")
     .click();
   
   cy.on("window:alert", (alertText) => {
      expect(alertText).to.include("Sukses");
   });
});

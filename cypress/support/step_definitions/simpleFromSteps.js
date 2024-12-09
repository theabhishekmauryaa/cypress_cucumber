// import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";
// Given('open the url',()=>{
// cy.visit('https://the-internet.herokuapp.com/login');
// })
// And("Enter username and pasword",()=>{
// cy.get("#username").type("tomsmith");
// cy.get('[type="password"]').type("SuperSecretPassword!");
// })
// Then('click on button',()=>{
// cy.get(".radius").click();
// })



import { Given, When, Then } from  "cypress-cucumber-preprocessor/steps";

Given("I open the Simple Form page", () => {
  cy.visit("https://v1.training-support.net/selenium/simple-form");
});

When("I fill  in Name and  in Email", () => {
  cy.get('input[id="firstName"]').type('Abhishek');
  cy.get('input[id="lastName"]').type('Maurya');
  cy.get('input[type="email"]').type('mauryaabhi@gmail.com');
  cy.get('input[id="number"]').type('7371815289');
});

Then("the form is submitted", () => {
  cy.get('input[type="submit"]').click();
  cy.get('input[value="submit"]').should("be.visible");
  cy.get('input[value="Clear"]').click();
});
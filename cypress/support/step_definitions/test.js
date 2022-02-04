/// <reference types="cypress" />

import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//Your test-case glue-code should be here :)
Before(() => {
    cy.visit('/add');
})

Given('I add a New asset on Add asset page', () => {
    cy.url('/add');
})

When('I enter a valid New asset {word}', (newAsset) => {
    cy.get('#defaultFormAddAsset').type(newAsset);
})

And ('I click on the SEND button', () => {
    cy.get('[data-test="button"]').click();
})

Then('I should be presented with the following message {word} {word}', (correctFormat, correctFormat2) => {
    cy.get('.valid-feedback').should('have.text', correctFormat, correctFormat2);
})





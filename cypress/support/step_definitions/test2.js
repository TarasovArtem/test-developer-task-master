/// <reference types="cypress" />

import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('Add a New asset invalid New asset', () => {
    cy.url('/add');
})

When('I enter a invalid New asset {word}', (invalidNewAsset) => {
    cy.get('#defaultFormAddAsset').type(invalidNewAsset);
})

And ('I click on the SEND button', () => {
    cy.get('[data-test="button"]').click();
})

Then('I should be presented with the following message {word} {word}', (incorrectFormat, incorrectFormat2) => {
    //cy.get('.invalid-feedback').should('have.text', incorrectFormat, incorrectFormat2);
    cy.log(incorrectFormat, incorrectFormat2);
})
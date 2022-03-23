import { buttonSelectors } from "../integration/selectors.spec";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      storedVideo(storedNumber: number): Cypress.Chainable<void>;
    }
  }
}

Cypress.Commands.add("storedVideo", (storedNumber) => {
  for (let i = 0; i < storedNumber; i++) {
    cy.get(buttonSelectors.searchTabStoredButton).first().click();
  }
});

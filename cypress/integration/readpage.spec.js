import * as locators from '../locators/locators';

describe('read page', () => {
  beforeEach(() => {
    cy.visit('/read');
  });

  context('warning messages', () => {
    it('should display a message if there are no comments', () => {
      cy.get(locators.noCommentsMessage).should('be.visible');
    });
  });
});

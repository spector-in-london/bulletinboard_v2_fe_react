import * as locators from '../locators/locators';
import Routes from '../../src/constants/routes';

context('post message', () => {
  before(() => {
    cy.server();
    cy.route('POST', '/api/comments', 'fixture:post-comment');
    cy.route('/api/comments?offset=0&sort=desc', 'fixture:post-comment');
    cy.visit(Routes.WRITE);
  });

  it('should redirect to read page if message is posted', () => {
    cy.get('input[name="name"]').type('name');
    cy.get('input[name="title"]').type('title');
    cy.get('textarea[name="body"]').type('body');

    cy.get(locators.writePageSubmitButton)
      .click();

    cy.location('pathname').should('eq', Routes.READ);
  });
});

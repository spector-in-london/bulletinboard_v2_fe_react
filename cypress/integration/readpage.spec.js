import * as locators from '../locators/locators';
import Routes from '../../src/constants/routes';

context('server error message', () => {
  before(() => {
    cy.server({ status: 500 });
    cy.route('/api/comments?offset=0&sort=desc');
    cy.visit(Routes.READ);
  });

  it('should display an error message on server error', () => {
    cy.get(locators.errorMessage).should('be.visible');
  });
});

context('no comments message', () => {
  before(() => {
    cy.server();
    cy.route('/api/comments?offset=0&sort=desc', 'fixture:comments-empty');
    cy.visit(Routes.READ);
  });

  it('should display a message if there are no comments', () => {
    cy.get(locators.noCommentsMessage).should('be.visible');
  });
});

context('comments', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/api/comments?offset=0&sort=desc', 'fixture:comments').as('comments');
    cy.route('/api/comments?offset=1&sort=desc', 'fixture:comments-more');
    cy.route('/api/comments?offset=0&sort=asc', 'fixture:comments');
    cy.route('/api/comments?offset=1&sort=asc', 'fixture:comments-more');
    cy.visit(Routes.READ);
    cy.wait('@comments');
  });

  it('should load comments on page load', () => {
    cy.get(locators.commentsComponent)
      .children()
      .its('length')
      .should('be.gt', 0);
  });

  it('should load more comments when load more button is clicked', () => {
    cy.get(locators.loadMoreButton)
      .click()
      .then(() => {
        cy.get(locators.commentsComponent)
          .children()
          .its('length')
          .should('be.gt', 0);
      });
  });

  it('should reload comments when sort button is clicked', () => {
    cy.get(locators.sortButton)
      .click()
      .then(() => {
        cy.get(locators.commentsComponent)
          .children()
          .its('length')
          .should('be.gt', 0);
      });
  });
});

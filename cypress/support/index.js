Cypress.on('window:before:load', window => {
  delete window.fetch;
});

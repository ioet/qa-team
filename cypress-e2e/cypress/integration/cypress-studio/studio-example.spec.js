/* ==== Test Created with Cypress Studio ==== */
it('contact-us', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.ioet.com/contact');
  cy.get('#input_comp-kbl0rnzl').clear();
  cy.get('#input_comp-kbl0rnzl').type('Vanessa');
  cy.get('#input_comp-kbl0rnzq').clear();
  cy.get('#input_comp-kbl0rnzq').type('Iñiguez');
  cy.get('#input_comp-kbl0rnzu').clear();
  cy.get('#input_comp-kbl0rnzu').type('vane@gmail.com');
  cy.get('#input_comp-kbl0rnzw').clear();
  cy.get('#input_comp-kbl0rnzw').type('099999999');
  cy.get('#textarea_comp-kbl0rnzx2').click();
  /* ==== End Cypress Studio ==== */
});
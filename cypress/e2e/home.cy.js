describe('My React App Tests', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:4040');
    cy.contains('Page Home');
    cy.contains('Accueil');
    cy.contains('Contact');
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Page Home').should('not.exist');
  });
});

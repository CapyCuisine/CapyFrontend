describe('Navigation Tests', () => {
  it('should navigate to Accueil', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Nos dernières recettes');
    cy.contains('Accueil');
    cy.contains('Catégories');
    cy.contains('A propos');
    cy.contains('Contact');
    cy.contains('Admin');
  });

  it('should navigate to Catégories', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Catégories').click();
    cy.url().should('include', '/categories');
    cy.contains('Nos catégories de recette :');
  });

  it('should navigate to À propos', () => {
    cy.visit('http://localhost:3000');
    cy.contains('A propos').click();
    cy.url().should('include', '/propos');
  });

  it('should navigate to Contact', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Contactez-nous');
  });

  it('should navigate to Admin', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Admin').click();
    cy.url().should('include', '/admin');
  });

  it('should return to Accueil', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Nos dernières recettes');
    cy.contains('Accueil');
    cy.contains('Catégories');
    cy.contains('A propos');
    cy.contains('Contact');
    cy.contains('Admin');
  });
});

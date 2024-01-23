describe('Contact Form', () => {
    it('should submit the contact form', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Contact').click();
        cy.url().should('include', '/contact');
        cy.contains('Contactez-nous');
        
        cy.get('#nom').type('Classique Fabien');
        cy.get('#email').type('classique.fabien@burger.com');
        cy.get('#message').type('C\'est quoi un classique burger enfaite ? Enfaite un gnew burger c\'est comme un classique burger mais un classique burger enfaite');
        
    });
  });
  
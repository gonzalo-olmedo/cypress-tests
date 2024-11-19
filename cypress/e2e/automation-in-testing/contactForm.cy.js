describe('Pruebas del formulario de contacto', { testIsolation: false }, () => {
    beforeEach(() => {
      cy.visit('https://automationintesting.online/');
    });
  
    it('Validar envío de formulario vacío', () => {
      cy.get('#submitContact').click();
      cy.get('.alert').should('be.visible');
      cy.get('p').contains('Message must be between 20 and 2000 characters.');
      cy.get('p').contains('Subject may not be blank');
      cy.get('p').contains('Name may not be blank');
      cy.get('p').contains('Message may not be blank');
      cy.get('p').contains('Subject must be between 5 and 100 characters.');
      cy.get('p').contains('Email may not be blank');
      cy.get('p').contains('Phone must be between 11 and 21 characters.');
      cy.get('p').contains('Phone may not be blank');
    });
  
    it('Validar envío de formulario con datos incorrectos', () => {
      cy.get('input[placeholder="Name"]').type('asd');
      cy.get('input[placeholder="Email"]').type('asdasd');
      cy.get('input[placeholder="Phone"]').type('123');
      cy.get('input[placeholder="Subject"]').type('asdasd');
      cy.get('[data-testid="ContactDescription"]').type('asdasd');
      cy.get('#submitContact').click();
      cy.get('.alert').should('be.visible');
      
      cy.get('p').contains('Phone must be between 11 and 21 characters.');
      cy.get('p').contains('Message must be between 20 and 2000 characters.');
      cy.get('p').contains('must be a well-formed email address');
    });
  
    it('Validar envío de formulario con datos correctos', () => {
      cy.get('input[placeholder="Name"]').type('Juan Pérez');
      cy.get('input[placeholder="Email"]').type('juan@gmail.com');
      cy.get('input[placeholder="Phone"]').type('35123696457');
      cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X');
      cy.get('[data-testid="ContactDescription"]').type(
        'Este es un mensaje de prueba con más de 20 caracteres para validar el formulario.'
      );
      cy.get('#submitContact').click();
  
      cy.get('.col-sm-5').first().within(() => {
        cy.contains('h2', 'Thanks for getting in touch Juan Pérez!');
        cy.contains('p', 'Reserva de habitación para fecha X');
      });
    });
  });
  
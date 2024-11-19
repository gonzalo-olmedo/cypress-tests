describe('Pruebas en la página Automation in Testing', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/');
  });

  it('Verifica que el nombre del hotel esté presente', () => {
    cy.get('.contact p').eq(0).should('contain.text', 'Shady Meadows B&B');
  });

  it('Verifica que la dirección del hotel sea correcta', () => {
    cy.get('.contact p').eq(1).should(
      'contain.text',
      'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S'
    );
  });

  it('Verifica que el número de teléfono esté presente', () => {
    cy.get('.contact p').eq(2).should('contain.text', '012345678901');
  });

  it('Verifica que el correo electrónico esté presente', () => {
    cy.get('.contact p').eq(3).should('contain.text', 'fake@fakeemail.com');
  });

  it('Verifica que la imagen del logo esté visible', () => {
    cy.get('img.hotel-logoUrl').should('be.visible');
  });

  it('Confirma que la descripción del hotel sea la esperada', () => {
    cy.get('.hotel-description p').should(
      'contain.text',
      'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.'
    );
  });
});

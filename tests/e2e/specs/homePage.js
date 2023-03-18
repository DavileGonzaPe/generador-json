// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {
  it('Visita la url raiz y comprueba que se renderiza', () => {
    cy.visit('/')
    cy.contains('JSON Generator')
  })

  it('Deben mostrarse los resultados de la búsqueda', () => {
    cy.visit('/')
    cy.get('.searchbar-input').type('lorem')
    cy.get('ion-item').should('exist')
  })

  it('La imagen debe mostrarse', () => {
    cy.visit('/')
    cy.get('ion-img').should('be.visible')
  })

})
describe('pagina inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.get('#main3')
    
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.get('#main4')
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.get('#main5')
  })

  it('Deve renderizar p com o texto correto!', () => {
    cy.get('#main6')
  })

  it('Deve renderizar as divs com sucesso', () => {
    cy.get('#main')
  })
  
  it('Deve renderizar as imagensn  com sucesso', () => {
    cy.get('#main2')
  })
})
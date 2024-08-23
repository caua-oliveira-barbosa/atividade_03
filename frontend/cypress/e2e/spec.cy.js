describe('pagina inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getBynumber("principal").find("h1").should("contain", "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
    
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.getByData('segundo-titulo').contains('Vantagens do nosso banco:')
    
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('terceiro-titulo').contains('Conta e cartão gratuitos')
    cy.getByData('terceiro-titulo').contains('Saques sem custo')
    cy.getByData('terceiro-titulo').contains('Programa de pontos')

  })

  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('paragrafo').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('paragrafo').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.') 
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('terceiro-titulo').contains('Conta e cartão gratuitos')
    cy.getByData('terceiro-titulo').contains('Seguro Dispositivos')
  })

  it('Deve renderizar as divs com sucesso', () => {
    cy.get('#main')
  })
  it('Deve renderizar as imagens com sucesso', () => {
    cy.get('#main2')
  })

  describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões'), () => {
    cy.visit('http://localhost:3000')
}})

})
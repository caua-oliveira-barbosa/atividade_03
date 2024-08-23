describe('Jornadas de usuário (Tranferencia)', () => {
    it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.location('pathname').should('eq','/home')
    cy.getByData('select-opcoes').select('Transferência') 
    
    cy.getByData('form-input').type('80') 
    cy.getByData('realiza-transacao').click()
    
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80') 
    
    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq','/')
    })})

    describe('Jornadas de usuário (Deposito)', () => {
        it('Deve permitir que o usuário acesse a aplicação, realize um deposito e faça logout', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.location('pathname').should('eq','/home')
        cy.getByData('select-opcoes').select('Depósito') 
        
        cy.getByData('form-input').type('80') 
        cy.getByData('realiza-transacao').click()
        
        cy.getByData('lista-transacoes').find('li').last().contains('R$ 80') 
        
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq','/')
        })})
    
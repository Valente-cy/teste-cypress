/// <reference types="Cypress" />


describe('Testes de Login', () => {
    //beforeEach(() => {
        // Visita a página antes de cada teste
        //cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");
     //});

    it('Login corretamente', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Retorne false para evitar que o Cypress falhe o teste ao encontrar um erro não tratado
            return false;
        });

        //Entrar na pagina
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type("31618984276");
        cy.get('#birthDate').type("10042001");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo URL
        cy.url().should('eq', 'https://produtos.staging.ciclic.com.br/saude/consulta/selecao-produtos');
    });

    it('Login com dependente', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type("62624791124");
        cy.get('#birthDate').type("22102015");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo que erro foi informado no CPF
        cy.get('span').should('have.text', 'Informações inválidas, verifique e tente novamente');

    });

    it('Login sem CPF', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type(" ");
        cy.get('#birthDate').type("10042001");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo que erro foi informado no CPF
        cy.get('span').should('have.text', 'Informe seu CPF');

    });

    it('Login sem Data de Nascimento', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type("31618984276");
        cy.get('#birthDate').type(" ");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo que erro foi informado no CPF
        cy.get('span').should('have.text', 'Informe sua data de nascimento');

    });

    it('Login com CPF incorreto', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type("12332122232");
        cy.get('#birthDate').type("10042001");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo que erro foi informado no CPF
        cy.get('span').should('have.text', 'CPF Inválido');

    });

    it('Login com Data de Nascimento incorreta', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        // CPF e Data de Nascimento
        cy.get('#identity').type("31618984276");
        cy.get('#birthDate').type("10042007");

        //Clicar para entrar
        cy.get('.btn').click();

        //Conferindo que erro foi informado no CPF
        cy.get('.login__form__errors--message').should('have.text', 'Informações inválidas, verifique e tente novamente');

    });

    it('Validar texto do botão de interrogação', () => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");

        cy.get('.form__helper')
        .invoke('attr', 'tooltip') // Obtém o valor do atributo 'tooltip'
        .then((tooltipText) => {
          cy.log('Texto do tooltip:', tooltipText); // Imprime o texto do tooltip no console do Cypress
          expect(tooltipText).to.contain('Se seu pacote é individual o CPF é o seu. Se seu pacote é casal ou familia o CPF do titular é o do responsável da conta'); // Verifica o conteúdo do tooltip
        });
      
    });
});

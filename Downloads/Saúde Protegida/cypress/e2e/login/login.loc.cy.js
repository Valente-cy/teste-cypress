/// <reference types="Cypress" />
// cypress/fixtures/locators.js

import { locators, login } from '../../fixtures/locators';
console.log(locators);

describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

   
    it('Login corretamente', () => {

        cy.get(locators.identityInput).type("31618984276");
        cy.get(locators.birthDateInput).type("10042001");
        cy.get(locators.loginButton).click();
        cy.url().should('eq', 'https://produtos.staging.ciclic.com.br/saude/consulta/selecao-produtos');
    });

    it('Login com dependente', () => {
        cy.get(locators.identityInput).type("62624791124");
        cy.get(locators.birthDateInput).type("22102015");
        cy.get(locators.loginButton).click();
        cy.get(locators.errorMessage).should('have.text', locators.errorInvalidCpf);
    });

    it('Login sem CPF', () => {
        cy.get(locators.identityInput).type(" ");
        cy.get(locators.birthDateInput).type("10042001");
        cy.get(locators.loginButton).click();
        cy.get(locators.errorMessage).should('have.text', locators.errorCpfRequired);
    });

    it('Login sem Data de Nascimento', () => {
        cy.get(locators.identityInput).type("31618984276");
        cy.get(locators.birthDateInput).type(" ");
        cy.get(locators.loginButton).click();
        cy.get(locators.errorMessage).should('have.text', locators.errorBirthDateRequired);
    });

    it('Login com CPF incorreto', () => {
        cy.get(locators.identityInput).type("12332122232");
        cy.get(locators.birthDateInput).type("10042001");
        cy.get(locators.loginButton).click();
        cy.get(locators.errorMessage).should('have.text', locators.errorInvalidCpfMessage);
    });

    it('Login com Data de Nascimento incorreta', () => {
        cy.get(locators.identityInput).type("31618984276");
        cy.get(locators.birthDateInput).type("10042007");
        cy.get(locators.loginButton).click();
        cy.get(locators.errorInvalidInfo).should('have.text', 'Informações inválidas, verifique e tente novamente');
    });

    it('Validar texto do botão de interrogação', () => {
        cy.get(locators.tooltip)
            .invoke('attr', 'tooltip')
            .then((tooltipText) => {
                cy.log('Texto do tooltip:', tooltipText);
                expect(tooltipText).to.contain('Se seu pacote é individual o CPF é o seu. Se seu pacote é casal ou familia o CPF do titular é o do responsável da conta');
            });
    });
});

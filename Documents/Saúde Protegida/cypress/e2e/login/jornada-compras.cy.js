/// <reference types="Cypress" />
import { locators, login } from '../../locators';
import { faker } from '@faker-js/faker';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fullName = `${firstName} ${lastName}`;
describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit("https://produtos.staging.ciclic.com.br/saude/planos/");
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('Jornada de Compra - Plano Essencial - Fluxo Básico', () => {
        cy.get(locators.planoEssencial).click();
        cy.get(locators.cadastroMasculino).click();
        cy.get(locators.cadastroNome).type(fullName);
        cy.get(locators.cadastroNascimento).type('10/04/2001');
        cy.get(locators.cadastroCPF).type('501.090.990-10');
        cy.get(locators.cadastroCelular).type('85984736459');
        cy.get(locators.cadastroEmail).type(firstName+'@gmail.com');
        
    });
});

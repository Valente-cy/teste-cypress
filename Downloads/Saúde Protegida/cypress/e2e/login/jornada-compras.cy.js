/// <reference types="Cypress" />
import { locators, login } from '../../fixtures/locators';
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
        cy.get('.gender > :nth-child(3) > .label').click();
        cy.get('#name').type(fullName);
        cy.get('#birthDate').type('10/04/2001');
        cy.get('#cpf').type()
    });
});

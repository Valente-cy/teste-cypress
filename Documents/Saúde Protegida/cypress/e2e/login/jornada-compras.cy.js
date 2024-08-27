/// <reference types="Cypress" />
import { locators } from '../../locators';
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
        cy.get(locators.cadastroCPF).type('440.658.820-52');
        cy.get(locators.cadastroCelular).type('85984736459');
        cy.get(locators.cadastroEmail).type(firstName+'@gmail.com');
        cy.get(locators.cadastroReemail).type(firstName+'@gmail.com')
        locators.aceitartermos();
        cy.contains('button', 'Continuar').click();
        cy.get(locators.endereçoCEP).type('60744870').wait(6000);
        cy.get(locators.endereçoRua).should('have.value', 'Rua VI');
        cy.get(locators.endereçoComplemento).type('Na rua do mercantil');;
        cy.get(locators.endereçoNumero).type('123');
        cy.get(locators.endereçoBairro).should('have.value', 'Serrinha');
        cy.get(locators.endereçoCidade).should('have.value', 'Fortaleza');
        cy.get(locators.endereçoEstado).should('have.value', 'CE');
        cy.contains('button', 'Continuar').click();
        cy.get(locators.selecionarPagamento).click();
        cy.get(locators.selecionarCartão).click();
        cy.get(locators.numeroCartão).type('4111111111111111');
        cy.get(locators.validadeCartão).type('11/45');
        cy.get(locators.cvvCartão).type('123');
        cy.get(locators.nomeCartão).type('Automatizado Testers');
        cy.get(locators.cpfCartão).type('501.090.990-10');
        cy.get(':nth-child(1) > .confirmTerms__label').click();
        cy.get(':nth-child(2) > .confirmTerms__label').click();
        cy.contains('button', 'Concluir pagamento').click();
        cy.url().should('eq', 'https://produtos.staging.ciclic.com.br/saude/planos/confirmacao/');
        cy.get('.card__resume--bottom > .grid__value').should('eq', 'R$ 29,90');
        cy.get('.card__details__title > .title__style').contains('Plano Individual Essencial')
        cy.get('b').contains(firstName+'@gmail.com');
    });
});

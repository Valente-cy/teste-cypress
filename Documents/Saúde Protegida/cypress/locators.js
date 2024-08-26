// cypress/locators.js

//Botões
const locators = {
  // Saúde Protegida - Consulta
    identityInput: '#identity',
    birthDateInput: '#birthDate',
    loginButton: '.btn',
    errorMessage: 'span',
    tooltip: '.form__helper',
    errorInvalidCpf: 'Informações inválidas, verifique e tente novamente',
    errorCpfRequired: 'Informe seu CPF',
    errorBirthDateRequired: 'Informe sua data de nascimento',
    errorInvalidCpfMessage: 'CPF Inválido',
    errorInvalidInfo: '.login__form__errors--message',
    
    // Saúde Protegida - Jornada de Compra

    planoEssencial: '.plans-option__container--essential > .plans-option__button > :nth-child(2) > .plans-option__button--step',
    planoEspecial:  '.plans-option__container--special > .plans-option__button > :nth-child(2) > .plans-option__button--step',
    planoPlus:      '.plans-option__container--plus > .plans-option__button > :nth-child(2) > .plans-option__button--step',
    dependenteEssencial: '.plans-option__container--essential > .plans-option__features > :nth-child(2) > .grid__options > :nth-child(3)',
    dependenteEspecial: '.plans-option__container--special > .plans-option__features > :nth-child(2) > .grid__options > :nth-child(3)',
    dependentePlus: '.plans-option__container--plus > .plans-option__features > :nth-child(2) > .grid__options > :nth-child(3)',
    cadastroFeminino: '.gender > :nth-child(2) > .label',
    cadastroMasculino: '.gender > :nth-child(3) > .label',
    cadastroOutro: ':nth-child(4) > .label',
    cadastroNome: '#name',
    cadastroNascimento: '#birthDate',
    cadastroCPF: '#cpf',
    cadastroCelular: '#phone',
    cadastroEmail: '#email',
    cadastroReemail: '#checkEmail'
  };

  
  // Funções
  const login = (cpf, birthDate) => {
    cy.visit("https://produtos.staging.ciclic.com.br/saude/consulta/");
    cy.get(locators.identityInput).type(cpf);
    cy.get(locators.birthDateInput).type(birthDate);
    cy.get(locators.loginButton).click();
  };
  
  export { locators, login };
  
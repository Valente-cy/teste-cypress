# Cypress Testing Suite

## Visão Geral

Este projeto utiliza o [Cypress](https://www.cypress.io/) como a principal ferramenta de testes automatizados.

## Índice

- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Ambientes de Teste](#ambientes-de-teste)
- [Estratégia de Seletores (`locators`)](#estratégia-de-seletores-locators)
- [Melhores Práticas](#melhores-práticas)
- [Dicas e Resolução de Problemas](#dicas-e-resolução-de-problemas)

## Instalação

### Pré-requisitos

- Node.js (>= 12.x)
- npm (>= 6.x) ou Yarn (>= 1.x)
- Git

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Valente-cy/teste-cypress.git
   cd repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. (Opcional) Instale o Cypress globalmente para acesso rápido:
   ```bash
   npm install -g cypress
   ```

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
cypress/
│
├── e2e/            # Onde são feitos e executados os testes
├── fixtures/       # Arquivos estáticos para simular dados
├── plugins/        # Plugins personalizados do Cypress
├── support/        # Comandos e configurações globais
├── locators.js     # Arquivo com mapeamento de seletores
└── reports/        # Relatórios de testes gerados

```

### Arquivo `locators.js`

Este arquivo centraliza todos os seletores de elementos da aplicação, facilitando a manutenção e evitando duplicação. Recomendamos que todos os seletores sejam armazenados e reutilizados a partir deste arquivo.

## Como Executar os Testes

### Executando Localmente

1. Para abrir o Cypress no modo interativo:
   ```bash
   npx cypress open
   ```

2. Para rodar os testes em modo headless:
   ```bash
   npx cypress run
   ```

### Executando em CI/CD

Certifique-se de configurar as variáveis de ambiente necessárias e use o comando abaixo em seus pipelines de CI/CD:

```bash
npx cypress run --record --key <seu-cypress-dashboard-key>
```

## Ambientes de Teste

Os testes podem ser executados em diferentes ambientes (desenvolvimento, staging, produção). As URLs e configurações para cada ambiente estão definidas no arquivo `cypress.json`.

## Estratégia de Seletores (`locators`)

Utilizamos uma abordagem centralizada para os seletores de elementos, definidos no arquivo `locators.js`. Isso melhora a legibilidade e facilita a atualização dos testes quando há mudanças no DOM.

### Exemplo de Seletores no `locators.js`

```javascript
export const locators = {
  login: {
    username: '#username',
    password: '#password',
    submitButton: 'button[type="submit"]',
  },
  dashboard: {
    welcomeMessage: '.welcome-banner',
    logoutButton: '#logout',
  },
};
```

Ao utilizar seletores centralizados, evitamos a duplicação e reduzimos a manutenção, facilitando alterações globais nos elementos da aplicação.

## Relatório de Testes

- **Rodando os Testes:** Para rodar os testes deve ser aplicado o comando `npx cypress run` e para rodar um teste específico `npx cypress run --spec "cypress/e2e/seu-teste.cy.js"`.
- **Gerar Relatório:** Para gerar o relatório dos testes deve se usar `npx mochawesome-merge cypress/reports/mochawesome/*.json -o cypress/reports/mochawesome/output.json` que junta os relatórios Json e o comando `npx marge cypress/reports/mochawesome/output.json -f report -o cypress/reports/mochawesome` que gera o relatório em HTML.



## Melhores Práticas

- **Organização dos Testes:** Agrupe testes relacionados em arquivos separados dentro da pasta `integration`.
- **Uso de `cy.fixture`:** Armazene e reutilize dados de teste usando arquivos `.json` dentro de `fixtures`.
- **Comandos Customizados:** Defina comandos personalizados em `support/commands.js` para simplificar testes repetitivos.
- **Restrições de Tempo (`timeouts`):** Configure timeouts apropriados para testes em diferentes ambientes.

## Dicas e Resolução de Problemas

- **Testes Intermitentes:** Verifique se há dependências de rede ou assincronismo que podem ser otimizadas.
- **Configuração de Timeout:** Ajuste o `defaultCommandTimeout` e `pageLoadTimeout` no arquivo `cypress.json` conforme necessário.
- **Modo Verboso:** Use a flag `--headed` com `cypress run` para visualizar a execução em tempo real.

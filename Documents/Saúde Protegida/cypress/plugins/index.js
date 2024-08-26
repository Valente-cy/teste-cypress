// cypress/plugins/index.js

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    // on é utilizado para "ouvir" eventos do Cypress
    // config é a configuração Cypress, você pode modificá-la aqui
  
    // Exemplo: adicionar um listener para o evento "file:preprocessor"
    on('file:preprocessor', (file) => {
      // Fazer algo com o arquivo antes de ser processado
      console.log('File being processed:', file.filePath)
      return file
    })
  
    // Exemplo: modificar as configurações de ambiente
    config.env.myCustomVariable = 'custom value'
  
    // Exemplo: modificar as configurações de tempo limite
    config.defaultCommandTimeout = 10000
  
    return config
  }
  
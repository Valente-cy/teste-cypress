const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "jhn8ty"
});
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Custom events
    },
    compilerOptions: {
      module: "ESNext",
  },
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000, // 10 segundos
    pageLoadTimeout: 60000, // 60 segundos
    viewportWidth: 1280,
    viewportHeight: 720,

  },
});

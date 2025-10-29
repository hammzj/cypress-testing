const {defineConfig} = require("cypress");

//TESTING PR MERGE
module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            return config;
        },
        specPattern: `cypress/tests/**/*.spec.js`,
        baseUrl: `https://www.cypress.io/`,
        defaultCommandTimeout: 30000,
        numTestsKeptInMemory: 1,
        chromeWebSecurity: false,
        testIsolation: true,
    }
});

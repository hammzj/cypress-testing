const {defineConfig} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await preprocessor.addCucumberPreprocessorPlugin(on, config);
            on("file:preprocessor", browserify.default(config));
            return config;
        },
        env: {
            stepDefinitions: [
                "./cypress/e2e/step_definitions/**/*.js",
            ],
        },
        specPattern: `cypress/e2e/features/**/*.feature`,
        baseUrl: `https://www.cypress.io/`,
        defaultCommandTimeout: 30000,
        taskTimeout: 30000,
        numTestsKeptInMemory: 25,
        chromeWebSecurity: false,
        testIsolation: true,
        experimentalInteractiveRunEvents: true,
        watchForFileChanges: false,
        video: false,
    }
});

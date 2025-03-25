const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    async setupNodeEvents(on, config) {
      // Add Cucumber preprocessor
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Use `createBundler()` correctly
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: ["cypress/e2e/Nexmedis/*.feature"],
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

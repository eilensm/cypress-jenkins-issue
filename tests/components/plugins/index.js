const webpack = require("@cypress/webpack-preprocessor");

module.exports = (on, config) => {
  // workaround for issue https://github.com/cypress-io/cypress-webpack-preprocessor/issues/31
  const webpackOptions = require("@vue/cli-service/webpack.config");
  if (webpackOptions.optimization) {
    webpackOptions.optimization = {};
  }
  on("file:preprocessor", webpack({ webpackOptions, watchOptions: {} }));
  return Object.assign({}, config, {
    fixturesFolder: "tests/components/fixtures",
    integrationFolder: "tests/components/specs",
    screenshotsFolder: "tests/components/screenshots",
    videosFolder: "tests/components/videos",
    supportFile: "tests/components/support/index.js"
  });
};

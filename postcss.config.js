module.exports = {
  "modules": true,
  "plugins": {
    "autoprefixer": true,
    "postcss-nested": true,
    // "postcss-simple-vars": {
    //   "variables": require('./src/client/assets/styles/_variables.js')
    // },
    // "postcss-simple-vars": true,
    // "postcss-modules": {
    //   "camelCase": true
    // },
    "postcss-import": true,
    "postcss-functions": {
      "functions": require('./src/client/assets/styles/_functions')
    },
    "postcss-advanced-variables": {
      "variables": require('./src/client/assets/styles/_variables')
    },
    "postcss-color-function": true,
    // "precss": true,
  }
}

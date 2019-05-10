const cypressTypeScriptPreprocessor = require('../../../src/cy-ts-preprocessor')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}

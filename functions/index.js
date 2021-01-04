if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'ssr') {
  exports.ssr = require('./modules/ssr')
}

const packageGenerator = require('./plop-templates/package/prompt')

module.exports = function (plop) {
  plop.setGenerator('package', packageGenerator)
}

const requireGlobal = require('./index.js')
const test = requireGlobal('brittle')

test('basic', function (t) {
  t.pass()
})

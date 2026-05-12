const { createRequire } = require('module')
const { execFileSync } = require('child_process')

let req = null

function getRequire () {
  if (req) {
    return req
  }

  // TODO: Read "prefix" from ~/.npmrc to avoid executing npm binary
  const root = execFileSync('npm', ['root', '-g'], { encoding: 'utf8' }).trim()

  req = createRequire(root + '/')

  return req
}

module.exports = function requireGlobal (id) {
  return getRequire()(id)
}

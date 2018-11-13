// dev only

const path = require('path')
const { linkBin } = require('./linkBin')

module.exports = function setupDevProject (targetDir) {
  return linkBin(
    require.resolve('@jskit/cli-service/bin/js-cli-service'),
    path.join(targetDir, 'node_modules', '.bin', 'js-cli-service')
  )
}

const execa = require('execa')
const binPath = require.resolve('./bin/init')

execa(
  binPath,
  process.argv.slice(process.argv.indexOf('init') + 1),
  { stdio: 'inherit' }
)

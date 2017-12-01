console.log('adding TypeScript plugin to Cypress')
console.log('current folder', process.cwd())

const path = require('path')
const shell = require('shelljs')
shell.set('-e')
shell.set('-v')

// TODO copy previous file if exists to .bak

const root = path.join(__dirname, '..', '..')
const plugins = path.join(root, 'cypress', 'plugins')
const pluginsIndex = path.join(plugins, 'index.js')

shell.cp('./plugin.js', pluginsIndex)

const amDependency = require('am-i-a-dependency')()
if (amDependency) {
  console.log('adding TypeScript plugin to Cypress')
  console.log('current folder', process.cwd())

  const fs = require('fs')
  const path = require('path')
  const shell = require('shelljs')
  shell.set('-e')
  shell.set('-v')

  // TODO copy previous file if exists to .bak

  // during NPM post install phase it is running in
  // node_modules/@bahmutov/add-typescript-to-cypress
  const root = path.join(process.cwd(), '..', '..', '..')

  const addPluginFile = () => {
    const plugins = path.join(root, 'cypress', 'plugins')
    const pluginsIndex = path.join(plugins, 'index.js')
    const sourcePlugin = path.join(__dirname, 'plugin.js')
    shell.cp(sourcePlugin, pluginsIndex)
  }

  const addTSConfigFile = () => {
    const tsConfigFilename = path.join(root, 'tsconfig.json')
    if (!fs.existsSync(tsConfigFilename)) {
      console.log('cannot find tsconfig.json, creating default')
      const tsConfig = {
        include: ['node_modules/cypress', 'cypress/*/*.ts']
      }
      const text = JSON.stringify(tsConfig, null, 2) + '\n'
      fs.writeFileSync(tsConfigFilename, text)
    } else {
      console.log('file %s already exists', tsConfigFilename)
    }
  }

  addPluginFile()
  addTSConfigFile()
}

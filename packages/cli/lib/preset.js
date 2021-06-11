const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const { exit } = require('./utils')

exports.presets = () => {
  const presets = require('../template.json')

  return Object.keys(presets).map((key) => ({
    name: presets[key].desc,
    value: key
  }))
}

exports.add = async (name, repo, desc = '') => {
  const presets = require('../template.json')

  if (presets[name]) {
    console.log(chalk.red(`已经存在模板：${name}`))
    exit()
  }

  presets[name] = {
    repo: repo || '',
    desc: desc || name
  }

  try {
    fs.writeFileSync(path.resolve(__dirname, '../template.json'), JSON.stringify(presets))
    console.log(`添加模板 ${name} 成功`)
  } catch (error) {
    error.error(error)
    exit()
  }
}

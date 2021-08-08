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

exports.add = async (templateName, repo, desc = '') => {
  const presets = require('../template.json')

  if (presets[templateName]) {
    console.log(chalk.red(`已经存在模板：${templateName}`))
    exit()
  }

  presets[templateName] = {
    repo: repo || '',
    desc: desc || templateName
  }

  try {
    fs.writeFileSync(path.resolve(__dirname, '../template.json'), JSON.stringify(presets))
    console.log(`添加模板 ${templateName} 成功`)
  } catch (error) {
    error.error(error)
    exit()
  }
}

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const prompt = require('./prompt')
const Creator = require('./creator')
const validateProjectName = require('validate-npm-package-name')

const { clearConsole, exit } = require('./utils')

async function create(projectName, options) {
  // 校验 projectName 是否合法
  const result = validateProjectName(projectName)

  if (!result.validForNewPackages) {
    console.error(chalk.red(`不合法的项目名称："${projectName}"`))

    result.errors &&
      result.errors.forEach((err) => {
        console.error(chalk.red.dim('Error: ' + err))
      })

    result.warnings &&
      result.warnings.forEach((warn) => {
        console.error(chalk.red.dim('Warning: ' + warn))
      })

    exit()
  }

  const cwd = process.cwd()
  const targetDir = path.resolve(cwd, projectName)

  // 校验是否已经存在文件目录
  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`${targetDir} 已经存在！`))
    exit()
  }

  clearConsole()

  const creator = new Creator(projectName, options, await prompt())

  await creator.create(targetDir)
}

module.exports = (...args) => {
  return create(...args).catch((error) => {
    console.log(error)
    exit()
  })
}

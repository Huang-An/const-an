const chalk = require('chalk')
const inquirer = require('inquirer')

const { exit } = require('./utils')

module.exports = async () => {
  try {
    return await prompt()
  } catch (error) {
    console.log(error)
    exit()
  }
}

async function prompt() {
  const presets = require('./preset').presets()

  if (!presets.length) {
    console.error(chalk.red(`没有可选择的模板，请添加`))
    exit()
  }

  const answers = await inquirer.prompt([
    {
      name: 'platform',
      type: 'list',
      choices: presets,
      message: '选择项目运行的平台'
    }
  ])

  return answers
}

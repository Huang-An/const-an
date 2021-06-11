const ora = require('ora')
const chalk = require('chalk')
const download = require('download-git-repo')

const { exit } = require('./utils')

module.exports = class Creator {
  constructor(projectName, options, answers) {
    this.content = projectName
    this.options = options
    this.answers = answers
  }

  content = ''

  options = {}

  answers = {}

  async create(target) {
    const { platform } = this.answers

    const template = require('../template.json')[platform]

    if (!template) {
      console.error(chalk.red(`不存在模板：${platform}`))
      exit()
    }

    const { repo } = template

    if (!repo) {
      console.error(chalk.red(`模板：${platform} repo 为空`))
      exit()
    }

    const spinner = ora('开始下载模板')

    try {
      spinner.start()
      await this.general(target, `direct:${repo}`)
      spinner.stop()
      console.log(chalk.yellow(`${this.content} 生成成功`))
    } catch (error) {
      spinner.stop()
      console.error(error)
      exit()
    }
  }

  general(target, repo) {
    return new Promise((resolve, reject) => {
      download(repo, target, { clone: true }, (err) => {
        err ? reject(err) : resolve(true)
      })
    })
  }
}

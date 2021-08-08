const fs = require('fs')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const home = require('user-home')
const rm = require('rimraf').sync
const Metalsmith = require('metalsmith')
const download = require('download-git-repo')

const { exit, clearConsole } = require('./utils')

module.exports = class Creator {
  constructor(projectName, options, answers) {
    const { output, cache } = options

    this.projectName = projectName
    this.output = output
    this.cache = cache || false
    this.answers = answers
  }

  projectName = ''
  output = ''
  cache = false
  answers = {}

  async create() {
    const { templateName, repo } = this.getTemplate()

    const tmp = path.join(home, '.const-an-templates', templateName.replace(/[\/:]/g, '-').toLowerCase())

    // 判断是否存在
    if (this.cache && fs.existsSync(tmp)) {
      await this.startGeneral(tmp, this.output)
      this.done()
      return
    }

    await this.startDownload(tmp, `direct:${repo}`)
    await this.startGeneral(tmp, this.output)
    this.done()
  }

  getTemplate() {
    const { templateName } = this.answers

    const template = require('../template.json')[templateName]

    if (!template) {
      console.error(chalk.red(`不存在项目模板：${templateName}`))
      exit()
    }

    const { repo } = template

    if (!repo) {
      console.error(chalk.red(`模板：${templateName} repo 为空`))
      exit()
    }

    return {
      templateName,
      ...template
    }
  }

  async startDownload(target, repo) {
    clearConsole()

    if (fs.existsSync(target)) rm(target)

    const spinner = ora('开始下载模板~')

    try {
      spinner.start()
      await this.download(target, repo)
      spinner.stop()
    } catch (error) {
      spinner.stop()
      console.error(error)
      exit()
    }
  }

  download(target, repo) {
    return new Promise((resolve, reject) => {
      download(repo, target, { clone: true }, (err) => {
        err ? reject(err) : resolve(true)
      })
    })
  }

  async startGeneral(tmp, output) {
    clearConsole()

    const spinner = ora('开始生成项目~')
    try {
      spinner.start()
      await this.general(tmp, output)
      spinner.stop()
    } catch (error) {
      spinner.stop()
      console.error(error)
      exit()
    }
  }

  general(tmp, output) {
    return new Promise((resolve, reject) => {
      const metalsmith = Metalsmith(tmp)

      metalsmith
        .clean(false)
        .source('.')
        .destination(output)
        .build((err) => {
          err ? reject(err) : resolve(true)
        })
    })
  }

  done() {
    console.log(`项目${this.projectName}生成成功~`)
    console.log()
    console.log(chalk.yellow('happy coding!'))
    console.log()
  }
}

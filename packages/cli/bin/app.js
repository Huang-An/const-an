#!/usr/bin/env node

const chalk = require('chalk')
const semver = require('semver')
const program = require('commander')
const requiredVersion = require('../package.json').engines.node

const { exit } = require('../lib/utils')

function checkNodeVersion(wanted, id) {
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          id +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    )
    exit()
  }
}

checkNodeVersion(requiredVersion, '@const-an/cli')

program.version(`@const-an/cli ${require('../package').version}`, '-v, --version').usage('<command> [options]')

program
  .command('create <app-name>')
  .description('创建一个项目')
  .action((name, options) => {
    require('../lib/create')(name, options)
  })

program
  .command('add <template-name> <repo> [desc]')
  .description('添加一个模板')
  .action((name, repo, desc) => {
    require('../lib/preset').add(name, repo, desc)
  })

program.parse(process.argv)

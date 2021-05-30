const path = require('path')
const chalk = require('chalk')
const execa = require('execa')

const { workspace, getModeByBuild, getPackagesByBuild } = require('./helper.js')

async function build(package) {
  const pkgDir = path.resolve(`${workspace}/${package}`)

  const pkg = require(`${pkgDir}/package.json`)

  const mode = getModeByBuild()

  // 如果没有打包配置就不执行打包
  if (!pkg.buildOptions) {
    console.log(chalk.bold(chalk.yellow(`打包目标模块${package}缺少配置参数，检查 package 是否没有设置 buildOptions`)))
    return
  }

  await execa('webpack', ['--env', `mode=${mode}`, `workspace=${workspace}`, `package=${package}`], {
    stdio: 'inherit'
  })
}

async function runByParallel(maxConcurrency, packages, iteratorFn) {
  const ret = []
  const executing = []

  for (const package of packages) {
    const p = Promise.resolve().then(() => iteratorFn(package))
    ret.push(p)

    if (maxConcurrency <= packages.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= maxConcurrency) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(ret)
}

async function run() {
  const packages = getPackagesByBuild()

  if (!packages.length) {
    console.log(chalk.bold(chalk.red('没有需要打包的模块')))
    return
  }

  // 并发运行
  runByParallel(require('os').cpus().length, packages, build)
}

run()

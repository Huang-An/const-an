const fs = require('fs')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const workspace = (exports.workspace = 'packages')

exports.getModeByBuild = () => {
  const mode = args.mode || args.m

  if (!mode) {
    return 'development'
  }

  return mode
}

const getPackagesByAll = (exports.getPackagesByAll = () => {
  const packages = fs.readdirSync(workspace).filter((f) => {
    if (!fs.statSync(`${workspace}/${f}`).isDirectory()) {
      return false
    }

    const pkg = require(`../${workspace}/${f}/package.json`)

    if (pkg.private && !pkg.buildOptions) {
      return false
    }

    return true
  })

  return packages
})

exports.getPackagesByBuild = () => {
  const packages = args._

  if (!packages.length) {
    return getPackagesByAll()
  }

  return packages
}

const path = require('path')
const chalk = require('chalk')

function createConfigs(baseConfigs, output, format) {
  if (!output) {
    console.log(chalk.bold(chalk.red(`缺少 output`)))
    return
  }

  const config = Object.assign({}, baseConfigs)

  if (format === 'esm') {
    config.experiments = {
      outputModule: true
    }
  }

  config.output = output

  return config
}

module.exports = function (env) {
  const { mode, workspace, package } = env

  const packagesDir = path.resolve(__dirname, workspace)
  const packageDir = path.resolve(packagesDir, package)

  const resolve = (p) => path.resolve(packageDir, p)

  const pkg = require(resolve(`package.json`))

  const buildOptions = pkg.buildOptions

  const outputMap = {
    esm: {
      path: resolve('dist'),
      filename: `${package}.esm.js`,
      library: {
        type: 'module'
      }
    },

    cjs: {
      path: resolve('dist'),
      filename: `${package}.cjs.js`,
      library: {
        name: package,
        type: 'commonjs2'
      }
    }
  }

  const baseConfigs = {
    mode: mode,

    entry: {
      [package]: resolve('src/index.ts')
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward'
              }
            }
          ]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward'
              }
            },
            'ts-loader'
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.ts']
    }
  }

  const _formats = buildOptions.formats || Object.keys(outputMap)

  const configs = _formats.map((format) => createConfigs(baseConfigs, outputMap[format], format))

  return configs
}

module.exports = {
  description: 'generate a package',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'package name please',
      validate(value) {
        return !value || value.trim === '' ? 'name is require' : true
      }
    },
    {
      type: 'checkbox',
      name: 'formats',
      message: 'choice build formats:',
      choices: [
        {
          name: 'ES module',
          value: 'esm',
          checked: true
        },
        {
          name: 'CommonJs',
          value: 'cjs',
          checked: true
        }
      ],
      validate(value) {
        return !value.length ? 'build formats is require' : true
      }
    }
  ],
  actions: (data) => {
    const name = '{{name}}'

    const actions = [
      {
        type: 'add',
        path: `packages/${name}/src/index.ts`,
        templateFile: 'plop-templates/package/index.ts.hbs'
      },
      {
        type: 'add',
        path: `packages/${name}/package.json`,
        templateFile: 'plop-templates/package/package.json.hbs',
        data: {
          name: name,
          esm: data.formats.includes('esm'),
          cjs: data.formats.includes('cjs')
        }
      },
      {
        type: 'add',
        path: `packages/${name}/api-extractor.json`,
        templateFile: 'plop-templates/package/api-extractor.json.hbs'
      }
    ]

    return actions
  }
}

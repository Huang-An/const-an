export type validate = <V>(value: V) => Promise<boolean>

export type rules = Array<{
  name: string
  validate: validate
}>

export default class Rule {
  static instance: Rule

  static getInstance() {
    if (!Rule.instance) Rule.instance = new Rule()

    return Rule.instance
  }

  rules: rules = []

  add(name: string, validate: validate) {
    if (!name || !validate) return

    this.rules.push({
      name: name,
      validate: validate
    })
  }

  addByGroup(rules: rules) {
    this.rules = this.rules.concat(rules)
  }

  remove(name: string) {
    if (!name) return

    const indexs: Array<number> = []

    this.rules.forEach((rule, index) => {
      if (name === rule.name) indexs.push(index)
    })

    indexs.forEach((index) => this.rules.splice(index, 1))
  }
}

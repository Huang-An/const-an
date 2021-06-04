import Rule, { validate, rules } from './rule'
import { setupRegisterPresets } from './preset'
import { createPromise, isEmpty } from '@const-an/helper-core'

export type executes = Array<{
  type: string
  message: string
  validate?: validate
}>

export type validateResult = {
  valid: boolean
  message: string
  error: any
}

setupRegisterPresets()

export function validate<V>(value: V, executes: executes) {
  const { promise, resolve } = createPromise<validateResult>()

  if (isEmpty(executes)) {
    Promise.resolve().then(() => resolve({ valid: true, message: '', error: null }))
    return promise
  }

  const { rules } = Rule.getInstance()

  let index = 0

  const recursion = () => {
    const execute = executes[index]

    if (!execute) {
      resolve({ valid: true, message: '', error: null })
      return
    }

    let validateQueue: Array<Promise<boolean>> = []

    const { type, message, validate } = execute

    validateQueue = validate ? [validate(value)] : []

    validateQueue = validateQueue.concat(rules.filter((rule) => rule.name === type).map((rule) => rule.validate(value)))

    const p = Promise.all(validateQueue)

    p.then(() => {
      index++
      recursion()
    })

    p.catch((error) => {
      resolve({ valid: false, message, error })
    })
  }

  Promise.resolve().then(() => recursion())

  return promise
}

export function addRule(name: string, validate: validate) {
  Rule.getInstance().add(name, validate)
}

export function addRuleByGroup(rules: rules) {
  Rule.getInstance().addByGroup(rules)
}

export function removeRule(name: string) {
  Rule.getInstance().remove(name)
}

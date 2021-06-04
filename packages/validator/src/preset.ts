import Rule, { rules } from './rule'
import * as regexps from '@const-an/regexp'
import { createPromise } from '@const-an/helper-core'

function generalPresets(): rules {
  return Object.keys(regexps).map((key: string) => {
    return {
      name: key,
      validate(value: any) {
        const regexp = (regexps as { [k: string]: RegExp })[key]

        const { promise, resolve, reject } = createPromise<boolean>()

        if (!regexp.test(value)) {
          console.warn(`validator warning. [type:${key}, value:${value}]`)

          reject(new Error(`validator warning. [type:${key}, value:${value}]`))
        }

        resolve(true)

        return promise
      }
    }
  })
}

export function setupRegisterPresets() {
  const rule = Rule.getInstance()

  const presets = generalPresets()

  rule.addByGroup(presets)
}

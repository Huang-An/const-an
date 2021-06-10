# @const-an/validator

一个简易的 Promise 校验器

## 安装：

```shell

npm install @const-an/validator
yarn add @const-an/validator

```

## 使用：

```js
import { validate } from '@const-an/validator'

const res = await validate(1231, [
  {
    type: 'phone',
    message: '值必须是手机号码'
  }
])

console.log(res)

// commomjs
const validator = require('@const-an/validator')
validator.validate()
```

## validate

使用 validate 进行校验，该方法接受 2 个参数：`value`、`executes`

- value：要进行校验的值

- executes：执行器，类型是一个数组，结构如下：

```ts
type executes = Array<{
  // 要校验的规则的类型
  type: string
  // 校验错误时的提示语
  message: string
  // 自定义的校验方法，必须是一个可执行的 Promise。校验成功时 resolve(true)，失败时 reject(Error)
  validate?: validate
}>
```

### 例子：

```js
import { validate } from '@const-an/validator'

const res = await validate('13813813838', [
  {
    type: 'phone',
    message: '值必须是手机号码'
  },
  {
    message: '值不能为空',
    validate(value) {
      if (!value) {
        return Promise.reject(new Error('值不能为空'))
      }
      return Promise.resolve(true)
    }
  }
])

console.log(res)
```

### 关于 executes 中的 validate

执行的校验方法，必须是一个可执行的 Promise。校验成功时 resolve(true)，失败时 reject(Error)

### 关于 executes 中的 type

在库中已经内置的一些校验规则，type 则是用来指定你需要使用的规则名称，它们基于 `@const-an/regexp` 库，有：

`number`、`english`、`tel`、`phone`、`licensePlate`、`email`、`idCard`、`external`、`intranet`、`space`、`websocket`、

如果你需要添加自己的规则，可以使用`addRule`、`addRuleByGroup`的方法。

## addRule && addRuleByGroup && removeRule

这些方法允许你添加一些自己的规则。

注意：自定义的校验方法同 executes 中的 validate 是一致的。他们都是一个可执行的 Promise，校验成功时 resolve(true)，失败时 reject(Error)。

### addRule

添加一个规则:

```js
import { addRule, validate } from '@const-an/validator'

addRule('require', (value) => {
  if (!value) {
    return Promise.reject(new Error('值不能为空'))
  }
  return Promise.resolve(true)
})

// 使用这个规则
validate('test', [
  {
    type: 'require',
    message: '值不能为空'
  }
])
```

### addRuleByGroup

添加一组规则：同 addRule 相似，允许一次添加多组规则

```js
import { addRuleByGroup, validate } from '@const-an/validator'

addRuleByGroup([
  {
    name: 'require',
    validate: (value) => {
      if (!value) {
        return Promise.reject(new Error('值不能为空'))
      }
      return Promise.resolve(true)
    }
  },
  ... more rule
])

// 使用这些规则
validate('test', [
  {
    type: 'require',
    message: '值不能为空'
  }
])
```

### removeRule

移除一个规则：将规则移除，validate 将不在使用被移除的规则

```js
import { removeRule } from '@const-an/validator'

removeRule('require')
```

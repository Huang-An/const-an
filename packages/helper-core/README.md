# @const-an/helper-core

项目中常用的帮助函数

## 安装：

```shell

npm install @const-an/helper-core
yarn add @const-an/helper-core

```

## 使用：

```js
import { isNull } from '@const-an/helper-core'
isNull(null)

// commomjs
const helperCore = require('@const-an/helper-core')
helperCore.isNull(null)
```

## promise

### createPromise

创建一个流式执行的 promise

```js
import { createPromise } from '@const-an/helper-core'

function load() {
  const { promise, resolve, reject } = createPromise()

  setTimeout(() => {
    resolve(true)
    // reject(new Error(''))
  }, 1000)

  return promise
}

load().then((res) => {
  console.log(res)
})
```

## type

校验数据类型

### isNull

```js
import { isNull } from '@const-an/helper-core'

console.log(isNull(null)) // true
```

### isArray

```js
import { isArray } from '@const-an/helper-core'

console.log(isArray([])) // true
```

### isString

```js
import { isString } from '@const-an/helper-core'

console.log(isString('string')) // true
```

### isNumber

```js
import { isNumber } from '@const-an/helper-core'

console.log(isNumber(123)) // true
```

### isObject

```js
import { isObject } from '@const-an/helper-core'

console.log(isObject({})) // true
```

### isBoolean

```js
import { isBoolean } from '@const-an/helper-core'

console.log(isBoolean(false)) // true
```

### isUndefined

```js
import { isUndefined } from '@const-an/helper-core'

console.log(isUndefined(undefined)) // true
```

### isEmpty

```js
import { isEmpty } from '@const-an/helper-core'

// 判断是否为 空字符串、空数组、空对象、"Null"、"null"、"Undefined"、"undefined"、null、undefined

console.log(isEmpty(null)) // true
console.log(isEmpty(undefined)) // true
console.log(isEmpty('Null')) // true
console.log(isEmpty('null')) // true
console.log(isEmpty('Undefined')) // true
console.log(isEmpty('undefined')) // true
console.log(isEmpty('')) // true
console.log(isEmpty([])) // true
console.log(isEmpty({})) // true
```

## param

获取 window.location.href 中携带的参数

### getURLParam

获取 window.location.href 中的某“个”参数

```js
import { getURLParam } from '@const-an/helper-core'

// url https://www.test.com/index.html?a=a#/test?b=b

console.log(getURLParam('a')) // a
console.log(getURLParam('b')) // b
```

### getURLParamByMulti

获取 window.location.href 中的某“些”参数

```js
import { getURLParamByMulti } from '@const-an/helper-core'

// url https://www.test.com/index.html?a=a&b=b#/test?c=c

console.log(getURLParamByMulti(['a', 'b', 'c'])) // {a : a, b : b, c : c}
```

### getURLParamByAll

获取 window.location.href 中的所有参数

```js
import { getURLParamByAll } from '@const-an/helper-core'

// url https://www.test.com/index.html?a=a&b=b#/test?c=c

console.log(getURLParamByAll()) // {a : a, b : b, c : c}
```

## context

获取相关运行环境

### checkBrowser

获取运行环境类型，类型有： WXWORK(企业微信) | WECHAT(微信) | ALIPAY(支付宝) | UNKNOWN (未知)

```js
import { checkBrowser } from '@const-an/helper-core'

console.log(checkBrowser()) // WXWORK | WECHAT | ALIPAY | UNKNOWN
```

### checkSystem

获取运行系统，类型有： android(安卓) | ios(ios) | unknown(未知)

```js
import { checkSystem } from '@const-an/helper-core'

console.log(checkSystem()) // android | ios | unknown
```

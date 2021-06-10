# @const-an/regexp

项目中常用的一些正则

## 安装：

```shell

npm install @const-an/regexp
yarn add @const-an/regexp

```

## 使用：

```js
import { phone } from '@const-an/regexp'
phone.test('13813813838')

// commomjs
const helperCore = require('@const-an/regexp')
helperCore.phone.test('13813813838')
```

## 支持的正则类型有：

### number 数字

```js
import { number } from '@const-an/regexp'

number.test('123')
```

### english 英文

```js
import { english } from '@const-an/regexp'

english.test('string')
```

### tel 固定电话

```js
import { tel } from '@const-an/regexp'

tel.test('020-10000')
```

### phone 手机号码

```js
import { phone } from '@const-an/regexp'

phone.test('13813813838')
```

### licensePlate 车牌号

```js
import { licensePlate } from '@const-an/regexp'

licensePlate.test('粤AXXXXXX')
```

### email 邮箱

```js
import { email } from '@const-an/regexp'

email.test('xxx@qq.com')
```

### idCard 身份证号

```js
import { idCard } from '@const-an/regexp'

idCard.test('441xxxxxxxxxxxxxxxx')
```

### external 外部链接

```js
import { external } from '@const-an/regexp'

external.test('http://xxxx')
external.test('https://xxxx')
```

### intranet 内网地址

```js
import { intranet } from '@const-an/regexp'

intranet.test('127.0.0.1')
```

### space 是否包含空格

```js
import { space } from '@const-an/regexp'

space.test('  ')
```

### websocket ws 链接

```js
import { websocket } from '@const-an/regexp'

websocket.test('ws://xxxx')
websocket.test('wss://xxxx')
```

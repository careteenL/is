# 文档

## 目录

- [描述](#描述)
- [语法](#语法)
  - [isUndefined](#isUndefined)
  - [isNull](#isNull)
  - [isUndef](#isUndef)
  - [isDef](#isDef)
  - [isTrue](#isTrue)
  - [isFalse](#isFalse)
  - [isBoolean](#isBoolean)
  - [isString](#isString)
  - [isNumber](#isNumber)
  - [isSymbol](#isSymbol)
  - [isPrimitive](#isPrimitive)
  - [isObject](#isObject)
  - [isFunction](#isFunction)
  - [isArray](#isArray)
  - [isRegExp](#isRegExp)
  - [isValidArrayIndex](#isValidArrayIndex)
  - [isEqualBasics](#isEqualBasics)
  - [isEqualArray](#isEqualArray)
  - [isEqualObject](#isEqualObject)
  - [isEqual](#isEqual)

## 描述

该库提供了一系列判断函数，包括类型判断和是否严格相等判断等。

持续更新...

```js
import * as Is from '@careteen/is'
Is.isUndefined(undefined) // true
```
ps:下面语法均默认已引入`Is`

**如果本库不满足您当前需求，建议前往**[@careteen/type](https://github.com/careteenL/type)或许能为您提供解决思路。

## 语法

### isUndefined

isUndefined(val: any) => boolean

```js
Is.isUndefined(undefined) // true
```

### isNull

isNull(val: any) => boolean

```js
Is.isNull(null) // true
```

### isUndef

isUndef(val: any) => boolean

```js
Is.isUndef(undefined) // true
Is.isUndef(null) // true
```

### isDef

isDef(val: any) => boolean

```js
Is.isDef(111) // true
Is.isDef(null) // false
```

### isTrue

isTrue(val: any) => boolean

```js
Is.isTrue(true) // true
```

### isFalse

isFalse(val: any) => boolean

```js
Is.isFalse(false) // true
```

### isBoolean

isBoolean(val: any) => boolean

```js
Is.isBoolean(true) // true
```

### isString

isString(val: any) => boolean

```js
Is.isString('123') // true
```

### isNumber

isNumber(val: any) => boolean

```js
Is.isNumber(123) // true
```

### isSymbol

isSymbol(val: any) => boolean

```js
Is.isSymbol(Symbol(123)) // true
```

### isPrimitive

是否为基本类型

isPrimitive(val: any) => boolean

```js
Is.isPrimitive(123) // true
Is.isPrimitive('123') // true
Is.isPrimitive(true) // true
Is.isPrimitive(Symbol(123)) // true
```

### isObject

isObject(val: any) => boolean

```js
Is.isObject({name: 'careteen'}) // true
```

### isFunction

isFunction(val: any) => boolean

```js
Is.isFunction(function () {}) // true
```

### isArray

isArray(val: any) => boolean

```js
Is.isArray([1, 2, 3]) // true
```

### isRegExp

isRegExp(val: any) => boolean

```js
Is.isRegExp(new RegExp('careteen')) // true
```

### isValidArrayIndex

是否为数组下标可达到值

isValidArrayIndex(val: any) => boolean

```js
Is.isValidArrayIndex(12345) // true
```

### isEqualBasics

判断两个基本类型变量是否相等

isEqualBasics(eleA: any, eleB: any) => boolean

```js
Is.isEqualBasics(12, 12) // true
```

### isEqualArray

判断两个数组是否相等

isEqualArray(eleA: array, eleB: array) => boolean

```js
Is.isEqualArray([1, 2, 3], [1, 2, 3]) // true
Is.isEqualArray([1, {name: 'careteen'}, 3], [1, {name: 'careteen'}, 3]) // true
```

### isEqualObject

判断两个对象是否相等

isEqualObject(eleA: object, eleB: object) => boolean

```js
const objA = {
  name: 'lanlan',
  age: 22,
  hobby: ['sleep', 'shopping', 'binge watch']
}
const objB = {
  name: 'lanlan',
  age: 22,
  hobby: ['sleep', 'shopping', 'binge watch']
}
Is.isEqualObject(objA, objB) // true
```

### isEqual

判断两个变量是否相等 为上述判断是否相等的统一API

isEqual(eleA: any, eleB: any) => boolean

```js
Is.isEqual(123, [1, 2, 3]) // false
```

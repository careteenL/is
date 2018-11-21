# [is](https://github.com/careteenL/is)
[![](https://img.shields.io/badge/Powered%20by-is-brightgreen.svg)](https://github.com/careteenL/is)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/careteenL/is/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/careteenL/is.svg?branch=master)](https://travis-ci.org/careteenL/is)
[![npm](https://img.shields.io/badge/npm-0.1.2-orange.svg)](https://www.npmjs.com/package/@careteen/is)
[![NPM downloads](http://img.shields.io/npm/dm/@careteen/is.svg?style=flat-square)](http://www.npmtrends.com/@careteen/is)

[English Document](./README.en_US.md)

该库提供了一系列判断函数，包括类型判断和是否严格相等判断等。

```js
import * as Is from '@careteen/is'
Is.isUndefined(undefined) // true
```

## 快速使用

NPM
```shell
npm i -D @careteen/is
```

```js
import * as Is from '@careteen/is'
Is.isUndefined(undefined) // true

// or
import {
  isUndefined
} from '@careteen/is'
isUndefined(undefined) // true
```

or CDN
```js
<script src='https://unpkg.com/@careteen/is/dist/index.js'></script>
<script>
  var Is = window['@careteen/is']
  Is.isUndefined(undefined) // true
</script>
```
更详细使用请查看[API](./doc/api.md)

## 兼容性

No

## 使用文档

- [API](./doc/api.md)
- [对该库的源码解析](xxx)

## issue模板

- [Issue Template](./ISSUETEMPLATE.md)

## 贡献者及指南

clone仓库并引入依赖
```shell
git clone git@github.com:careteenL/is.git
npm install
```
开始开发：）

...

编写详细使用文档介绍功能，可在本地查看`http://127.0.0.1:8880`
```shell
npm run doc
```
请编写单元测试覆盖所加功能
```shell
npm run test
```
启动本地服务器编写示例
```shell
npm run example
```
修改`package.json README.md CHANGELOG.md`版本号，再发布
```shell
npm run release
```

- [Contributors](https://github.com/careteenL/is/graphs/contributors)

## 更新日志

- [Changelog](./CHANGELOG.md)

## 计划

- [Todo](./TODO.md)
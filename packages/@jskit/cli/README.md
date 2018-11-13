# @jskit/cli

基于 `vue-cli@3.x` 修改，用于实现前端项目(包含小程序)的初始化、工具类批处理、公共文件引入等目的。

## Install

Prerequisites: [Node.js](https://nodejs.org/en/) (>=6.x, 8.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
npm install -g js-cli
```

## 功能特性

适用于以下场景

- 新增页面的初始化
- 新增项目的初始化
- npm 包的初始化
- 基准测试的初始化
- 小程序
  - 小程序初始化
  - 小程序自定义组件的初始化
  - 小程序插件的初始化

- 配置 `config [options] [value]`
  - 默认自带结构，然后可以自己配置
- 初始化项目 `create [options] <app-name>`
  - 内置模板
    - 创建初始化小程序
    - 创建初始化小程序自定义组件
  - 可根据模板创建初始化你项目
- 添加自定义模板
  - `add [options] <plugin> [pluginOptions]`
  - `add <template> [pluginOptions]`
- 升级 `upgrade [options] [dirPath]`
- 清除缓存 `cache [options]`

使用示例

```js
// 初始化项目或页面（根据配置找到对应的模板进行初始化）
js init vue.page
js init vue.project
js init wxapp.component

//
js add
```

### 配置 config

全局配置 `~/jsclirc`

```conf
{
  "useTaobaoRegistry": true,
  "templates": {
    "vue.pabe": "",
    "vue.project": "",
    "wxapp.project": "",
    "wxapp.game": "",
    "wxapp.plugin": "",
    "wxapp.component": "",
    "aliapp.project": "",
    "aliapp.plugin": "",
    "aliapp.component": "",
  },
  "presets": {
    ; "kit-vue-config": {
    ;   "useConfigFiles": true,
    ;   "plugins": {
    ;     "@vue/cli-plugin-babel": {},
    ;     "@vue/cli-plugin-pwa": {},
    ;     "@vue/cli-plugin-eslint": {
    ;       "config": "prettier",
    ;       "lintOn": [
    ;         "save"
    ;       ]
    ;     },
    ;     "@vue/cli-plugin-unit-jest": {},
    ;     "@vue/cli-plugin-e2e-cypress": {}
    ;   },
    ;   "router": true,
    ;   "vuex": true,
    ;   "cssPreprocessor": "stylus"
    ; }
  },
  "packageManager": "yarn"
}
```

局部配置 `./jscli-config.js`

```js
module.exports = {
  // ...
}
```

### 创建初始化 create

- 交互式创建过程，询问创建什么?
- 根据模板创建

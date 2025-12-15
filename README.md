# Vue 3 H5 Starter (Vite + TS)

一个开箱即用的 Vue 3 + Vite + TypeScript H5 脚手架，内置 Vue Router、Pinia、ESLint 与 Prettier，并包含基础移动端适配（viewport、基础样式）。

## 快速开始（Windows PowerShell）

```powershell
cd e:\Demo\RicNaCode
npm install
npm run dev
```

浏览器访问控制台输出的本地地址（如 http://localhost:5173 ）。

## 常用脚本

```powershell
# 开发
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 目录结构

- `index.html`: 入口 HTML，已启用移动端 viewport。
- `src/main.ts`: 应用入口，注册 Pinia 与 Router。
- `src/App.vue`: 基础布局与导航。
- `src/router/index.ts`: 路由配置（/ 与 /about）。
- `src/stores/counter.ts`: Pinia 示例 Store。
- `src/pages/Home.vue`: 首页（计数示例）。
- `src/pages/About.vue`: 关于页。
- `src/assets/base.css`: 移动端基础样式。
- `vite.config.ts`: Vite 配置。
- `tsconfig*.json`: TypeScript 配置。
- `.eslintrc.cjs` / `.prettierrc`: 规范与格式化配置。

## 移动端说明

- `meta viewport` 已启用 `viewport-fit=cover`，适配全面屏安全区域。
- 基础样式已包含轻量 Reset 与 Safe Area 占位。

## 图标 (FontAwesome)
本项目使用官方的 `@fortawesome` 包（SVG + Vue 组件），推荐按需导入以减少首包体积。下面给出两种常见用法：按需在组件内导入（推荐）和全局注册。

安装（一次性安装常用包）：
```powershell
npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome \
  @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

1) 组件内按需导入（推荐）

```vue
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const features = [{ id: 1, icon: faRocket, title: '极速性能' }]
</script>

<template>
  <div>
    <!-- 在 script setup 中导入的组件可直接在模板使用 -->
    <FontAwesomeIcon :icon="features[0].icon" />
  </div>
</template>
```

2) 全局注册（适用于大量页面共享同一组图标）

在 `src/main.ts` 中注册：

```ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faRocket, faShieldAlt)
app.component('FontAwesomeIcon', FontAwesomeIcon)
```

模板中使用：

```html
<font-awesome-icon :icon="['fas','rocket']" />
```

注意事项
- 若使用 CDN 的 CSS（例如 `<link>` 引入 FontAwesome），请移除以避免与 npm SVG 方案冲突。
- 品牌图标（例如 `faGithub`）在 `@fortawesome/free-brands-svg-icons` 中，常规图标在 `@fortawesome/free-regular-svg-icons`。按需导入可以显著降低打包体积。


## 备注

- 若端口被占用，可在启动时指定：`set VITE_PORT=5174; npm run dev`（PowerShell 请使用 `$env:VITE_PORT=5174; npm run dev`）。
- 网页标题图标位于 `public/favicon.svg`，可自行替换。
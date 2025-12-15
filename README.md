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

## 图标(FontAwesome)
已集成 FontAwesome 图标库，使用方法如下：
```html
<i class="fa-solid fa-house"></i>
```
- 等待安装图标包：
  - 实心图标包（free-solid-svg-icons）
  - 线性图标包（free-regular-svg-icons）
  - 品牌图标包（free-brands-svg-icons）

``` js
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
```

- 使用方法
 [https://www.runoob.com/font-awesome/fontawesome-tutorial.html]

## 备注

- 若端口被占用，可在启动时指定：`set VITE_PORT=5174; npm run dev`（PowerShell 请使用 `$env:VITE_PORT=5174; npm run dev`）。
- 网页标题图标位于 `public/favicon.svg`，可自行替换。
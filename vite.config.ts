import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dts: 'types/auto-imports.d.ts', // 使用typescript，需要指定生成对应的d.ts文件或者设置为true,生成默认导入d.ts文件
      dirs: ['src/stores', 'src/composables', 'src/hooks'],
      resolvers: [VantResolver()], // 按需自动导入
    }),
    Components({
      resolvers: [VantResolver()], // 自定义组件的解析器
      dirs: ['src/components'], //自动导入组件-指定组件位置，默认是src/components
      extensions: ['vue'], // 组件的有效文件扩展名。
      dts: 'types/components.d.ts', // 配置文件生成位置-自动生成
      deep: true, // 搜索子目录
    }),
    VueRouter({
      routesFolder: ['src/pages'], // 默认扫描的目录
      dts: 'types/typed-router.d.ts', // 自动生成类型声明文件
      extensions: ['.page.vue', '.vue', '.md'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 生产构建优化
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 小文件内联阈值（4kb）
    chunkSizeWarningLimit: 1000, // KB 警告阈值
    // 使用 Vite 的正确配置项：显示压缩体积报告
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // 可根据需要开启 sourcemap（默认关闭以减小体积）
    sourcemap: false,
  },
})

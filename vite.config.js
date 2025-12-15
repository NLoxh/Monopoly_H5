import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia',
            ],
            dts: 'types/auto-imports.d.ts', // 使用typescript，需要指定生成对应的d.ts文件或者设置为true,生成默认导入d.ts文件
            dirs: ['src/stores', 'src/composables', 'src/hooks'],
        }),
        VueRouter({
            routesFolder: ['src/pages'], // 默认扫描的目录
            dts: 'types/typed-router.d.ts', // 自动生成类型声明文件
            extensions: ['.page.vue', '.vue', '.md'],
        }),
        vue(),
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
        brotliSize: true,
        rollupOptions: {
            output: {
                // 简单 vendor 拆分，Vue 单独一块，其余第三方归为 vendor
                manualChunks: function (id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('vue'))
                            return 'vendor_vue';
                        return 'vendor';
                    }
                },
                // 保持较短的文件名，便于浏览器缓存
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]'
            }
        },
        // 可根据需要开启 sourcemap（默认关闭以减小体积）
        sourcemap: false,
    }
});

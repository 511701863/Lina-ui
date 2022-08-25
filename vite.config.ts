/// <reference types="vitest" />
import { defineConfig } from'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'
export default defineConfig({
    plugins:[
        vue(),
        vueJsx({}),
        Unocss()
    ],
    build:{
        rollupOptions:{
            external:['vue','vue-router'],
            output:{
                globals:{
                    vue:'Vue'
                },
                extend:true,
                exports:"named",
                assetFileNames:"[name].[ext]"
            }
        },
        minify:'terser', // boolean | 'terser' | 'esbuild' pnpm i terser@"5.4.0" -D
        sourcemap: true, // 输出单独 source文件 Chrome 调试工具中进行断点调试
        brotliSize: true,  // 生成压缩大小报告
        cssCodeSplit: true,
        lib:{
            entry:'./src/entry.ts',
            name:'LinaUi',
            fileName:'lina-ui',
            formats:["es",'umd','iife']
        }
    },
    test:{
        globals: true,
        environment: 'happy-dom',
        // 支持tsx组件!!!!
        transformMode: {
            web: [/.[tj]sx$/]
          }
    },
})
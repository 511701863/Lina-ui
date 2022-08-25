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
        minify:false,
        cssCodeSplit: true,
        lib:{
            entry:'./src/entry.ts',
            name:'Lina-ui',
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
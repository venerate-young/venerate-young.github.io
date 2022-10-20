import { resolve } from 'pathe'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_BASE: '/',
    },
    alias: {
        'images': resolve(__dirname, '@/assets/images'),
        'css': resolve(__dirname, '@/assets/css'),
        'data': resolve(__dirname, '@/assets/other/data')
    },
    target: 'static',
    build: {
        extractCSS: true,
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '@/assets/css/main.css',
        '@/assets/css/tailwind.css',
    ],
    // plugins: [
    //     '~/assets/js/main.js'
    // ],
    // head: {
    //     title: 'Eleven – Full-stack web developer',
    //     meta: [
    //         { charset: 'utf-8' },
    //         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //         {
    //             hid: 'description',
    //             name: 'description',
    //             content: 'my website description'
    //         }
    //     ],
    //     link: [{ rel: 'icon', type: 'image/x-icon', href: 'nuxt_64x.png' }]
    // },
    // tailwindcss: {
    //     // Options
    // }
})

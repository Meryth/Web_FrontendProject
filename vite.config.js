// vite.config.js
import {resolve} from 'path'
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: 'dist',
        minify: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/html/login.html'),
                home: resolve(__dirname, 'src/html/home.html'),
                about: resolve(__dirname, 'src/html/about.html')
            }
        }
    },
    base: "/Web_FrontendProject"
    // config options
})
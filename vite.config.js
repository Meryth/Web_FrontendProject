// vite.config.js
import {resolve} from 'path'
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        minify: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/html/login.html')
            }
        }
    }
    // config options
})
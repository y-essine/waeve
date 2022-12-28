import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import analyze from "rollup-plugin-analyzer";
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [vue()],
    build: {
        rollupOptions: {},
    },
});

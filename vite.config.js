import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
        rollupOptions: {
            output: [{
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
                manualChunks: {
                    'vendor/index': ['vuex', 'vue-router', '@kyvg/vue3-notification'],
                    'vendor/umi': ['umi-request'],
                    'vendor/meta': ['vue-meta'],
                }
            }]
        },
    },
});

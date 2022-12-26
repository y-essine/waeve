import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
    // root,
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [vue()]
    // build: {
    //     outDir,
    //     emptyOutDir: true,
    //     rollupOptions: {
    //         input: {
    //             main: resolve(root, 'views/index.html'),
    //             explore: resolve(root, 'views', 'explore', 'index.html'),
    //             settings: resolve(root, 'views', 'settings', 'index.html')
    //         }
    //     }
    // }
});

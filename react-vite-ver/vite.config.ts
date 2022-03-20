import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: 'views', replacement: '/src/views' },
            { find: 'components', replacement: '/src/components' },
        ],
    },
});

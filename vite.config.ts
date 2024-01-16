import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { configDefaults } from 'vitest/config';

// Exclude everything except resources/js/
const projectExcludes = [
    'app/*',
    'boostrap/*',
    'config/*',
    'coverage/*',
    'database/*',
    'public/*',
    'resources/css/*',
    'resources/views/*',
    'routes/*',
    'storages/*',
    'tests/*',
    'vendor/*',
];

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
    ],
    test: {
        exclude: [...configDefaults.exclude, ...projectExcludes],
        coverage: {
            provider: "v8",
            exclude: [...configDefaults.coverage.exclude, ...projectExcludes],
        },
        setupFiles: ['resources/js/setupFile.ts'],
    },
});
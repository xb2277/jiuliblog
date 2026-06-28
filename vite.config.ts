import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/jiuliblog/',
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // GitHub Pages SPA fallback: copy index.html → 404.html
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'spa-fallback',
          closeBundle: {
            order: 'post',
            handler: () => {
              const dist = path.resolve(__dirname, 'dist')
              const src = path.join(dist, 'index.html')
              const dest = path.join(dist, '404.html')
              if (fs.existsSync(src)) {
                fs.copyFileSync(src, dest)
                console.log('📄  404.html generated for SPA fallback')
              }
            },
          } as any,
        },
      ],
    },
  },
})

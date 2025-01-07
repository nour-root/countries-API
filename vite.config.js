const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        details: './details.html',
      }
    }
  }
})

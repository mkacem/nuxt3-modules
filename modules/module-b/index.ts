import { defineNuxtModule } from '@nuxt/kit'

import path from 'path'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push({
        name: 'module-b',
        path: '/module-b',
        file: path.resolve(__dirname, './pages/index.vue'),
      })
      console.log(pages)
    }
  },
  async setup(moduleOptions, nuxt) {
    // -- Add your module logic here --
  },
})

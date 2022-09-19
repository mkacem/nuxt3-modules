import { defineNuxtModule } from '@nuxt/kit'

import path from 'path'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push({
        name: 'module-a',
        path: '/module-a',
        file: path.resolve(__dirname, './pages/index.vue'),
      })
    },
    // COMPOSABLES
    'autoImports:dirs'(dirs) {
      dirs.push(path.resolve(__dirname, './composables'))
    },
  },
  async setup(moduleOptions, nuxt) {
    // -- Add your module logic here --
  },
})

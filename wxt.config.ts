import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true
    }
  },
  vite: () => ({
    plugins: [vue()]
  }),
  manifest: {
    name: 'Epistache',
    permissions: [
      'activeTab',
      'cookies',
      'storage',
      'tabs',
      'https://intra.epitech.eu/*'
    ],
    host_permissions: ['https://intra.epitech.eu/*', 'https://my.epitech.eu/*']
  }
})

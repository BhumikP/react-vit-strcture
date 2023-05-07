import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react(), eslint()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        { find: '@views', replacement: '/src/views' },
        { find: '@components', replacement: '/src/components' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@config', replacement: '/src/config' },
        { find: '@services', replacement: '/src/services' },
        { find: '@hooks', replacement: '/src/hooks' },
        { find: '@utils', replacement: '/src/utils' },
      ],
    },
    VITE_API_URL: process.env.VITE_API_URL,
  })
}

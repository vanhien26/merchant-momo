import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        momo: { DEFAULT: '#ae2070', light: '#d4006e', dark: '#8b1a5a' }
      }
    }
  },
  plugins: []
}
export default config

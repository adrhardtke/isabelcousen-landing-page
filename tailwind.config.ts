import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cta_1': "url('/cta_bg1.jpeg')",
      },
      colors: {
        action: '#E79AFB',
        action_dark: '#DE61FF',
        secondary: '#BDD81B',
        'black': '#2F2E2F'
      }
    },
  },
  plugins: [],
}
export default config

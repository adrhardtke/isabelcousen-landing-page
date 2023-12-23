import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-instagram': 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cta_1': "url('/cta_bg1.jpeg')",
        'cta_2': "url('/cta_bg2.jpeg')",
        'cta_1_md': "url('/background-cta-1-md.jpg')"
      },
      colors: {
        action: '#E79AFB',
        action_dark: '#DE61FF',
        secondary: '#BDD81B',
        'black': '#2F2E2F',
        'light-grey': '#F1F1F1'
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('../public/Hero/heroMobile.jpg')",
        'hero-tablet': "url('../public/Hero/heroTablet.jpg')",
        'hero-desktop': "url('../public/Hero/heroDesktop.jpg')",
        'orange-box-bg': "url('../public/Showcase/showcaseBgPattern.svg')",
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
export default config;

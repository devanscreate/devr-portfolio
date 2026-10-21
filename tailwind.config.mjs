/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#090d16',
          subtle: '#0f172a',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(51, 65, 85, 0.45)',
        },
        dev: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#8b5cf6',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
        sticker: {
          cyan: '#4ddcd0',
          yellow: '#fed22b',
          orange: '#ff6b2b',
          pink: '#ff3366',
          green: '#b8ff33',
          mint: '#52dfc5',
          cream: '#f6f2e9',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'float 5s ease-in-out infinite',
        'wobble-slow': 'wobble 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};

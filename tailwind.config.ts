import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic color scheme
        'dark-primary': '#050402',
        'dark-secondary': '#0a0503',
        'dark-layer': '#0f0a06',
        'accent-gold': '#f3d382',
        'accent-gold-dark': '#c9a227',
        'text-primary': '#f3e3c1',
        'text-secondary': 'rgba(238, 224, 195, 0.92)',
        'glow-gold': 'rgba(243, 211, 130, 0.45)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'eb-garamond': ['EB Garamond', 'serif'],
        geist: ['Geist', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(243, 211, 130, 0.45)' },
          '50%': { boxShadow: '0 0 40px rgba(243, 211, 130, 0.65)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(243, 211, 130, 0.3)',
        'glow-gold-lg': '0 0 40px rgba(243, 211, 130, 0.5)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #f3d382, #c9a227)',
        'gradient-dark': 'linear-gradient(135deg, #050402, #0f0a06)',
      },
    },
  },
  plugins: [],
}

export default config

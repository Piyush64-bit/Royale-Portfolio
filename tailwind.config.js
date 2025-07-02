/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        'luxury-cream': '#f8f6f0',
        'deep-cream': '#f5f2eb',
        'rose-gold': '#d4a574',
        'champagne-gold': '#f7e7ce',
        'blush-pink': '#e8c4c4',
        'luxury-black': '#1a1a1a',
        'luxury-gold': '#c9a96e',
        'deep-gold': '#b8956a',
        'platinum': '#e5e4e2',
        'deep-burgundy': '#800020',
        'warm-white': '#fefcf9',
        'soft-gray': '#8b8680',
        'charcoal': '#2c2c2c',
        'pearl': '#f8f6f0',
        'bronze': '#cd7f32',
        'copper': '#b87333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        luxury: ['Cormorant Garamond', 'serif'],
        elegant: ['Crimson Text', 'serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #c9a96e 0%, #d4a574 50%, #f7e7ce 100%)',
        'gradient-luxury-dark': 'linear-gradient(135deg, #b8956a 0%, #c9a96e 50%, #d4a574 100%)',
        'gradient-platinum': 'linear-gradient(135deg, #e5e4e2 0%, #f8f6f0 100%)',
        'gradient-rose-blush': 'linear-gradient(135deg, #d4a574 0%, #e8c4c4 100%)',
        'gradient-rose-champagne': 'linear-gradient(135deg, #d4a574 0%, #f7e7ce 100%)',
        'gradient-luxury-radial': 'radial-gradient(circle at center, #c9a96e 0%, #d4a574 50%, #f7e7ce 100%)',
        'gradient-luxury-mesh': 'linear-gradient(135deg, #c9a96e 0%, #d4a574 25%, #f7e7ce 50%, #e8c4c4 75%, #c9a96e 100%)',
      },
      animation: {
        'luxury-pulse': 'luxury-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'luxury-glow': 'luxury-glow 3s ease-in-out infinite',
        'elegant-fade': 'elegant-fade 2s ease-in-out infinite',
        'luxury-bounce': 'luxury-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'luxury-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'luxury-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 169, 110, 0.6)' },
        },
        'elegant-fade': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'luxury-bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(201, 169, 110, 0.15), 0 4px 20px rgba(201, 169, 110, 0.1)',
        'luxury-hover': '0 20px 60px rgba(201, 169, 110, 0.25), 0 8px 30px rgba(201, 169, 110, 0.15)',
        'luxury-inset': 'inset 0 2px 4px rgba(201, 169, 110, 0.1)',
        'elegant': '0 8px 32px rgba(26, 26, 26, 0.12), 0 4px 16px rgba(26, 26, 26, 0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};
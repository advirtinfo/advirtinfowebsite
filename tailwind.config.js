/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:       '#0D1F3C',
          navy:        '#0D1F3C',
          accent:      '#EA580C',
          'accent-dk': '#0F3A9E',
          'off-white': '#bcc6f3',
          white:       '#FFFFFF',
          muted:       '#6B7280',
          light:       '#9CA3AF',
          border:      '#E5E7EB',
          surface:     '#F3F4F6',
        }
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'sans-serif'],
        body:    ['Satoshi', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      maxWidth: {
        container: '1200px',
      }
    }
  },
  plugins: [],
}

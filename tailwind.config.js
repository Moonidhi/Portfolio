module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          primary: '#121212',      // Deep charcoal
          secondary: '#1E1E2E',    // Dark slate
          tertiary: '#2A2A3A',     // Lighter slate
          accent: '#8B0000',       // Wine red
          accentCoral: '#FF6B6B',  // Coral highlight
          text: '#E0E0E0',         // Light gray
          textSecondary: '#A0A0A0', // Secondary gray
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'stagger': 'staggerIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 0, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 0, 0, 0.8)' },
        },
        staggerIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'dark': '0 10px 25px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 20px 40px rgba(0, 0, 0, 0.4)',
        'accent': '0 4px 15px rgba(139, 0, 0, 0.3)',
        'accent-lg': '0 8px 25px rgba(139, 0, 0, 0.4)',
        'coral': '0 0 20px rgba(255, 107, 107, 0.3)',
      },
    },
  },
  plugins: [],
}

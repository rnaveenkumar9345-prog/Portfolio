/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ─── Supreme Color Theory: Obsidian Black & Electric Cobalt / Azure ───
         *  Base (60%):      Pure Obsidian Black (#030712, #070c18) — Infinite depth, modern tech authority
         *  Secondary (30%): Deep Slate-Navy Surfaces (#0c1322, #111b2e) with crisp Slate text (#94a3b8, #cbd5e1)
         *  Accent (10%):    Electric Royal Blue (#3b82f6, #2563eb) & Ice Cyan (#38bdf8) — High impact, supreme energy
         *  Success/State:   Luminous Emerald (#10b981) — Verified data accuracy & live indicators
         */
        obsidian: {
          950: '#030712',
          900: '#070c18',
          850: '#0c1322',
          800: '#111b2e',
          750: '#17233c',
          700: '#1e2e4f',
          600: '#2b3e64',
        },
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        ice: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

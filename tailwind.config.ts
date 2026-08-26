import type { Config } from "tailwindcss";

export default {
	darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Syne', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
			},
			colors: {
				// Semantic Unified Theme Token Mapping
				theme: {
					bg: 'var(--theme-bg)',
					surface: 'var(--theme-surface)',
					elevated: 'var(--theme-surface-elevated)',
					text: 'var(--theme-text)',
					secondary: 'var(--theme-text-secondary)',
					tertiary: 'var(--theme-text-tertiary)',
					border: 'var(--theme-border)',
					borderStrong: 'var(--theme-border-strong)',
					accent: 'var(--theme-accent)',
					accentSoft: 'var(--theme-accent-soft)',
					input: 'var(--theme-input)',
					navBg: 'var(--theme-nav-bg)',
					navBorder: 'var(--theme-nav-border)',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					base: '#0a0a0a',
					elevated: '#131313',
					input: '#1a1a1a',
				},
				brandAccent: {
					start: '#fb923c',
					mid: '#f97316',
					end: '#ef4444',
					solid: '#f97316',
					hover: '#ea580c',
				},
				grevyaBlue: '#02A4EF',
				grevyaRed: '#F25022',
				grevyaGreen: '#80BA01',
				grevyaYellow: '#FFB902',
				obsidian: '#0B0D10',
				graphite: '#111418',
				charcoal: '#171A1F',
				softWhite: '#FAFAF8',
				warmIvory: '#F5F4F0',
				lightGrey: '#ECEEEF',
				darkText: '#17191C',
				mutedText: '#697078',
				graphiteScale: {
					950: '#080A0F',
					900: '#0B0D10',
					850: '#111418',
					800: '#171A1F',
					700: '#232A39',
				},
				ivory: {
					50: '#FAFAF8',
					100: '#F5F4F0',
					200: '#ECEEEF',
					300: '#DEE2E6',
				},
				sapphire: {
					400: '#38BDF8',
					500: '#02A4EF',
					600: '#0284C7',
					700: '#0369A1',
				},
				primary: {
					DEFAULT: '#02A4EF',
					foreground: '#ffffff',
					50: '#f0f9ff',
					100: '#e0f2fe',
					400: '#38bdf8',
					500: '#02a4ef',
					600: '#0284c7',
					700: '#0369a1',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
			},
			letterSpacing: {
				'widest-caps': '0.2em',
				'tight-heading': '-0.025em',
			},
			borderRadius: {
				pill: '9999px',
				card: '14px',
				xl: '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.97)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
				'marquee': 'marquee 35s linear infinite',
				'marquee-reverse': 'marquee-reverse 35s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

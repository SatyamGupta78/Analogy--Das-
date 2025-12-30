import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
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
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			},
			blue: {
				DEFAULT: 'hsl(var(--blue-primary))',
				dark: 'hsl(var(--blue-dark))',
				light: 'hsl(var(--blue-light))'
			},
			yellow: {
				DEFAULT: 'hsl(var(--yellow-primary))',
				soft: 'hsl(var(--yellow-soft))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			xl: 'calc(var(--radius) + 4px)',
			'2xl': 'calc(var(--radius) + 8px)',
			'3xl': 'calc(var(--radius) + 16px)'
		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'stripe-slide': {
				'0%': { backgroundPosition: '0% 50%' },
				'100%': { backgroundPosition: '100% 50%' }
			},
			'image-glow': {
				'0%, 100%': { filter: 'brightness(1) saturate(1)' },
				'50%': { filter: 'brightness(1.1) saturate(1.2)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'stripe-slide': 'stripe-slide 3s ease infinite',
			'image-glow': 'image-glow 2s ease-in-out infinite'
		},
		boxShadow: {
			'glass': '0 8px 32px 0 hsl(217 91% 40% / 15%)',
			'card': '0 4px 24px -4px hsl(217 91% 40% / 15%)',
			'glow-blue': '0 0 40px hsl(217 91% 60% / 30%)',
			'glow-yellow': '0 0 40px hsl(45 97% 54% / 30%)'
		},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
		},
		backdropBlur: {
			xs: '2px',
			'3xl': '64px'
		}
	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

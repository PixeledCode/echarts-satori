const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        bg: "var(--bg)",
        hover: "var(--hover)",
        default: "var(--text-color)",
        textMuted: "var(--text-muted)",
        borderDefault: "var(--border-default)",

        dark: "var(--text-dark)",
        medium: "var(--text-medium)",
        light: "var(--text-light)",
        "extra-light": "var(--text-extra-light)",
        "on-bg": "var(--text-on-bg)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        heading1: [
          "4rem",
          {
            fontWeight: "600",
            lineHeight: "5rem",
          },
        ],
        heading2: [
          "2.25rem",
          {
            fontWeight: "600",
            lineHeight: "2.875rem",
          },
        ],
        heading3: [
          "2rem",
          {
            fontWeight: "500",
            lineHeight: "2.5rem",
          },
        ],
        heading4: [
          "1.5rem",
          {
            fontWeight: "500",
            letterSpacing: "2%",
            lineHeight: "1.875rem",
          },
        ],
        body1: [
          "2rem",
          {
            fontWeight: "400",
            lineHeight: "2.5rem",
          },
        ],
        body2: [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "1.875rem",
          },
        ],
      },
      spacing: {
        page: "1072px",
        talk: "1120px",
        content: "640px",
        top: "var(--page-top)",
        "body-margin": "var(--body-margin)",

        0: "0",
        "025": "1px",
        "05": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "28": "112px",
        "32": "128px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#1cafe9",
        "tertiary-dim": "#ee8f10",
        "tertiary-fixed": "#fe9c22",
        "error-container": "#9f0519",
        "surface-container-highest": "#192540",
        "secondary-fixed-dim": "#91daef",
        "on-surface-variant": "#a3aac4",
        "surface-container-low": "#091328",
        "primary-dim": "#1cafe9",
        "outline-variant": "#40485d",
        "inverse-primary": "#00668b",
        "surface-bright": "#1f2b49",
        "inverse-on-surface": "#4d556b",
        "primary": "#37bcf7",
        "on-primary-fixed": "#001a27",
        "background": "#060e20",
        "surface-container-high": "#141f38",
        "surface-container": "#0f1930",
        "tertiary": "#ffb05e",
        "surface-dim": "#060e20",
        "secondary-dim": "#91daef",
        "tertiary-container": "#fe9c22",
        "on-error": "#490006",
        "outline": "#6d758c",
        "on-tertiary": "#5b3300",
        "secondary-container": "#046578",
        "on-secondary-fixed-variant": "#006173",
        "surface": "#060e20",
        "on-secondary": "#005667",
        "on-primary-container": "#002636",
        "secondary-fixed": "#9fe8fe",
        "surface-variant": "#192540",
        "inverse-surface": "#faf8ff",
        "surface-container-lowest": "#000000",
        "secondary": "#9fe8fe",
        "primary-fixed": "#37bcf7",
        "on-primary": "#00354a",
        "on-primary-fixed-variant": "#003e56",
        "on-surface": "#dee5ff",
        "surface-tint": "#37bcf7",
        "on-tertiary-container": "#4d2a00",
        "on-secondary-fixed": "#00424f",
        "tertiary-fixed-dim": "#ee8f10",
        "on-background": "#dee5ff",
        "primary-container": "#13ace6",
        "on-error-container": "#ffa8a3",
        "on-secondary-container": "#e1f7ff",
        "on-tertiary-fixed": "#2c1600",
        "error-dim": "#d7383b",
        "error": "#ff716c",
        "on-tertiary-fixed-variant": "#593200"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-inter)", "sans-serif"],
        "label": ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;

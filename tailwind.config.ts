import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      zIndex: {
        '-1': '-1',
        '-99': '-99',
        '99': '99',
        '100': '100',
      },
    },
    animation: {
      fade: 'fade 3s ease-in-out',
    },
  },
  plugins: [],
} satisfies Config;

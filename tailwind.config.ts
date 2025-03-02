import { appendFile } from "fs";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle, #ff0000, #0000ff)',
      },    
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        appear: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        disappear: {
          "0%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        scalex: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        longAppear: "appear 2s ease-in-out",
        appear: "appear 0.5s ease-in-out",
        disappear: "disappear 0.5s ease-in-out",
        underlineButton: "scalex 2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

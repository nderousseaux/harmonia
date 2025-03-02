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
        scalex: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        disappear: {
          "0%": { opacity: "1" }, 
          "100%": { opacity: "0" },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },

      },
      animation: {
        underlineButton: "scalex 2s ease-in-out",
        disappear: "disappear 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

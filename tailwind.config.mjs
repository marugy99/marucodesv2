/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate[200]"),
            lineHeight: "1.75rem",
            "--tw-prose-headings": {
              color: theme("colors.slate[200]"),
            },
            "--tw-prose-quotes": {
              color: theme("colors.slate[200]"),
            },
            "--tw-prose-bold": {
              color: theme("colors.slate[200]"),
            },
            h2: {
              marginTop: "1.5rem",
              marginBottom: "1rem",
            },
            li: {
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
            },
            a: {
              color: theme("colors.slate[200]"),
              textDecorationStyle: "wavy",
              textUnderlineOffset: "2px",
              textDecorationColor: theme("colors.purple[400]"),
              fontWeight: "normal",
              "&:hover": {},
            },
            code: {
              color: theme("colors.purple[400]"),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            img: {
              borderRadius: "0.5rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

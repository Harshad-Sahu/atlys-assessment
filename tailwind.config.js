/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#131319",
        "custon-font-gray": "#6B6C70",
        "custom-label-color": "#C5C7CA",
        "custom-btn-blue": "#4A96FF",
        "custom-placeholder": "#7F8084",
        "custom-border": "#35373b",
        "post-bg": "#27292D",
        "post-input-bg": "#191920",
      },
      fontSize: {
        "custom-14": "0.875rem",
        "custom-16": "1rem",
        "custom-18": "1.125rem",
      },
      fontWeight: {
        "extra-light": 100,
        "md-400": 400,
        "md-600": 600,
      },
      lineHeight: {
        "lh-120": "120%",
        "lh-150": "150%",
      },
    },
  },
  plugins: [],
};

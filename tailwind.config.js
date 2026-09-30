/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12151A",
        panel: "#181C22",
        line: "#262B33",
        paper: "#E9EBEE",
        muted: "#9AA2AD",
        signal: "#3ECFB2",
        signalDim: "#2A8F7C",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        content: "42rem",
        wide: "64rem",
      },
    },
  },
  plugins: [],
};

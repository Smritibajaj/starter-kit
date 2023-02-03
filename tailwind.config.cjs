/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const initcolors = {
  brand: {
    primary: {
      blue: "#286EF1",
      red: "#FF3C31",
      green: "#00BC4B",
      yellow: {
        primary: "#F7BF17",
        status: "#FFC700",
      },
      purple: "#A603F2",
      gray: "#515A6E",
      orange: "#FF8A00",
      lightgray: "#9DACB4",
    },
    light: {
      red: "#FFEFEF",
      green: "#E4FFEF",
      orange: "#FFF4E7",
      blue: "#E9F0FF",
      purple: "#FAEEFF",
      gray: "#F8FAFB",
      yellow: "#FFFAE0",
    },
    hover: {
      blue: "#0D4DC6",
    },
    disabled: {
      blue: "#93B6F8",
    },
    text: {
      title: "#17233D",
      primary: "#515A6E",
      placeholder: "#BFC2CA",
    },
    background: {
      white: "#FAFCFE",
      skyblue: "#EDF6FF",
    },
    extra: {
      icon: "#9DACB4",
      divider: "#EBEEF3",
    },
  },
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { ...colors, ...initcolors}
    },
  },
  plugins: [],
}
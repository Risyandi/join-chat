/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // colors for chats
        "chat-green" : "#5DB075",
        "chat-gray" : "#E8E8E8",
        "chat-smooth-white" : "#F6F6F6",
        // temporary and the removed
        "black-kyoob": "#181e19",
        "green-kyoob": "#16A085",
        "yellow-kyoob": "#ffc107",
        "blue-light-kdn": "#1f67f3",
        "blue-dark-kdn": "#0b4dcc",
        "black-kdn": "#010712",
        "primary-lime": "#cfe700",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

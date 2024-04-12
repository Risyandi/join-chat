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
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

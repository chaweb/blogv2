module.exports = {
    css: [
        '@/assets/tw.css',
    ],
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
          colors: {
            "primary" : "#E606F9",
            "primary2" : "#EA8CF2",
            "primary3" : "#E2B3E5",

            "dark-secondary": "#05C798",
            "dark-secondary2": "#8CF2DA",
            "light-secondary2": "#38FACB",
            "light-secondary2": "#0D735A",

            "dark-error": "#FF1A1A",
            "dark-info": "#1AD9FF",
            "dark-succes": "#1AFF1A", 
            "dark-warning": "#FFFF1A",
            "light-error": "#E50000",
            "light-info": "#00BFE5",
            "light-succes": "#00E500", 
            "light-warning": "#E5E500",
          }
      },
    },
    plugins: [],
    darkMode: 'class'
  }
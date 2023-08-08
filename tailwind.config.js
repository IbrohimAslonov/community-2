/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '13200px',
    },
    container: {
      padding: '20px',  
    },
    color: {
      btn_color: "#F58A07",
      primary_color: "#063255",
      main_text_color: "#1D3444",
      secondary_text_color:"#5B5B5B",
      article_text_color: "#0D1317",
      black: "#161722",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
}


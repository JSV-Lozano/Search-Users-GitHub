import React from "react";

const ThemeContext = React.createContext();

//Light and Dark Mode

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("Light");

  const toogleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };

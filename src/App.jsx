import React from "react";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContex";
import Home from "./Page/Home";
import styles from "./Styles/App.css";

function App() {
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

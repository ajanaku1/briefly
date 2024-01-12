import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import litMode from "./assets/litmode.png";
import drkMode from "./assets/drkmode.png";
import "./App.css";

const App = () => {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <main className={`${isDarkMode && "dark"}`}>
      <img
        src={isDarkMode ? litMode : drkMode}
        className="theme_switch"
        onClick={toggleTheme}
      />

      <div className={isDarkMode ? "main_dark" : "main"}>
        <div className={isDarkMode ? "gradient_dark" : "gradient"} />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;

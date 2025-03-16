import React from "react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;

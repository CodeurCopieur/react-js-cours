import { useState } from "react";
import "./Container.css"

export default function Container() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`full-container ${isDarkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  )
}

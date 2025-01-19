import { useEffect, useState } from "react";

export default function useDarkMode() {
  const initDarkMode = () => {
    const themeStorage = window.localStorage.getItem("theme");
    return themeStorage === "dark";
  };

  const [isDarkMode, setDarkMode] = useState(initDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
}

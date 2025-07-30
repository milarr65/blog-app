import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("abyss"); // default fallback

  // Apply the theme and persist it
  const switchTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme); // ✅ update state
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "abyss";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []); // ✅ empty array = run only on mount

  return [theme, switchTheme]; // return switchTheme instead of raw setTheme
}

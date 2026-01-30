import { useEffect, useState } from "react";
import {
  backgroundColors,
  foregroundColors,
  borderColors,
  THEME_KEY,
  scrollBarColors,
  buttonColors,
  inputColors,
  mainColors,
  menuColors,
  menuItemColors,
  statusColors,
} from "@/constants/theme";
import ColorContext from "./ColorContext";

export default function ColorProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") return stored;
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((theme) => (theme === "light" ? "dark" : "light"));

  const value = {
    theme,
    toggleTheme,
    bg: backgroundColors[theme],
    fg: foregroundColors[theme],
    border: borderColors[theme],
    scrollbar: scrollBarColors[theme],
    button: buttonColors[theme],
    input: inputColors[theme],
    main: mainColors[theme],
    menu: menuColors[theme],
    menuItem: menuItemColors[theme],
    status: statusColors[theme],
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

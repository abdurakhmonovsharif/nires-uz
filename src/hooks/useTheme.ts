import { useEffect } from "react";
import { useAppStore } from "@/store"; // Assuming this is the correct path to your store
import { ETheme } from "@/types/app";
import { useLocation } from "react-router-dom";
import { ROUTES } from "@/constants"; // Enum for the theme (e.g., "light" | "dark")

export const useTheme = () => {
  const { theme, setTheme } = useAppStore();
  const { pathname } = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === ETheme.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
    if (pathname == ROUTES.register) window.location.reload();
  };

  return { theme, toggleTheme };
};

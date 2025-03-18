import { create } from "zustand";
import { ETheme, IAppStore } from "@/types/app";
import { THEME } from "@/constants";
import { history, getLocalStorage, setLocalStorage } from "@/utils";
import { createSelectors } from "../createSelectors";
import { devtools } from "zustand/middleware";

const initialState = {
  theme: getLocalStorage("theme") || ETheme.LIGHT,
  action: history.action,
  location: history.location,
  activePage: getLocalStorage("activePage") || "/dashboard",
  language: getLocalStorage("language") || "uz",
  isTestMode: false,
  loading: true,
};

const useAppBase = create<IAppStore>()(
  devtools((set) => ({
    ...initialState,

    setTheme: (theme) =>
      set((state) => {
        setLocalStorage(THEME, theme);

        return {
          ...state,
          theme,
        };
      }),
    setHistory: ({ action, location }) => set(() => ({ action, location })),
    setLanguage: (language) => set(() => ({ language })),
    setActivePage: (page) =>
      set((state) => {
        setLocalStorage("activePage", page);

        return { ...state, activePage: page };
      }),
    setLoading: (value) => set(() => ({ loading: value })),
  })),
);

export const useAppStore = createSelectors(useAppBase);

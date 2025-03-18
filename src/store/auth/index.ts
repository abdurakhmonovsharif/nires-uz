import { create } from "zustand";
import {
  getLocalStorage,
  history,
  removeLocalStorage,
  setLocalStorage,
} from "@/utils";
import { REFRESH_TOKEN, TOKEN, USER } from "@/constants";
import { createSelectors } from "../createSelectors";
import { IAuthStore } from "./types";
import { TTokens } from "@/types";
import { devtools } from "zustand/middleware";

const useAppBase = create<IAuthStore>()(
  devtools((set) => ({
    token: getLocalStorage(TOKEN),
    refresh_token: getLocalStorage(REFRESH_TOKEN),
    user: getLocalStorage(USER),
    isAuth: null,
    isInitiated: true,

    logout: () =>
      set((state) => {
        removeLocalStorage(TOKEN);
        removeLocalStorage(USER);
        removeLocalStorage(REFRESH_TOKEN);
        history.push("/login");

        return {
          ...state,
          token: null,
          refreshToken: null,
          user: null,
          isAuth: false,
        };
      }),

    setToken: ({ accessToken, refreshToken }: TTokens) =>
      set((state) => {
        setLocalStorage(TOKEN, accessToken);
        setLocalStorage(REFRESH_TOKEN, refreshToken);

        return {
          ...state,
          token: accessToken,
          refresh_token: refreshToken,
          isAuth: true,
        };
      }),
    setIsAuth: (isAuth) => set(() => ({ isAuth })),
    setIsInitiated: (isInitiated) => set(() => ({ isInitiated })),
    setUser: (user) =>
      set((state) => {
        if (!user) return state;
        setLocalStorage(USER, user);

        return {
          ...state,
          user,
        };
      }),
  })),
);

export const useAuthStore = createSelectors(useAppBase);

export const initializeAuthStore = () => {
  const { logout } = useAuthStore.getState();

  return {
    logout,
  };
};

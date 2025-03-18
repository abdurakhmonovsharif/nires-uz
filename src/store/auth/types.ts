import { TTokens, TUser } from "@/types";

export interface IAuthStore {
  token: string | null;
  refresh_token: string | null;
  isAuth: boolean | null;
  isInitiated: boolean;
  user: TUser | null;

  logout: () => void;
  setToken: (token: TTokens) => void;
  setUser: (user?: TUser) => void;
  setIsAuth: (isAuth: boolean) => void;
  setIsInitiated: (isInitiated: boolean) => void;
}

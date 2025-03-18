import { AxiosRequestConfig } from "axios";
import { Action, Location } from "history";

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

export interface IAppStore {
  theme: ETheme;
  action: Action;
  location: Location;
  language: TLanguages;
  activePage: string;
  isTestMode: boolean;
  loading: boolean;
  setTheme: (theme: ETheme) => void;
  setHistory: ({ action, location }: THistory) => void;
  setLanguage: (lng: TLanguages) => void;
  setActivePage: (page: string) => void;
  setLoading: (value: boolean) => void;
}

export interface IFetchProps {
  path: string;
  lng?: string;
  config?: AxiosRequestConfig;
}

export type THistory = {
  action: Action;
  location: Location;
};

export type TParams = number | string | undefined | any;

export type TLanguages = "uz" | "ru" | "en" | "kr_uz";

export type TLanguage = {
  uz: string;
  en: string;
  ru: string;
  kr_uz: string;
};

export type TimeType = "today" | "week" | "month" | "year";

export type TSortOrder = "ASC" | "DESC";

export type TStringOrNull = string | null;

export type TNumberOrNull = number | null;

export type TLanguageDropdownProps = {
  customBtn?:
    | React.ReactNode
    | ((getLabel: () => string | undefined) => React.ReactNode);
  isDrawer?: boolean;
};

export type TDataWithLangs = {
  en: string;
  ru: string;
  uz: string;
  kr_uz: string;
};

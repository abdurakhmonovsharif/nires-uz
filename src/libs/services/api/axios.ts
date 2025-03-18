import axios, { AxiosRequestConfig } from "axios";
import {
  errorInterceptor,
  requestInterceptor,
  successInterceptor,
} from "./interceptors";
import { API_URL } from "@/constants";
import { IFetchProps } from "@/types/app";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL + "/ap1",
};

const api = axios.create(axiosConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

const $fetch = <T, _ = undefined>({ lng, path, config }: IFetchProps) =>
  api.get<T>(path, {
    headers: lng
      ? {
          "Accept-Language": lng,
        }
      : undefined,
    ...config,
  });

export { api, $fetch };

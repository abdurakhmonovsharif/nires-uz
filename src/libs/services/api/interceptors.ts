import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { API_URL, ENDPOINTS, REFRESH_TOKEN, TOKEN } from "@/constants";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { TLoginResponse } from "@/types";

const refreshTokenRequest = async () => {
  const refreshToken = getLocalStorage(REFRESH_TOKEN);
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await axios.get<TLoginResponse>(
    `${API_URL}/api${ENDPOINTS.getMe}`,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  const newAccessToken = response.data.accessToken;
  const newRefreshToken = response.data.refreshToken;
  setLocalStorage(TOKEN, newAccessToken);
  setLocalStorage(REFRESH_TOKEN, newRefreshToken);
  return response;
};

export const requestInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const token = getLocalStorage(TOKEN);

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
};

export const successInterceptor = (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  return Promise.resolve(response);
};

export const errorInterceptor = async (error: AxiosError): Promise<never> => {
  if (error.response?.status === 401) {
    try {
      await refreshTokenRequest();
    } catch (refreshError) {
      if (
        refreshError instanceof AxiosError &&
        (refreshError.response?.status == 401 ||
          refreshError.response?.status == 404)
      ) {
        console.log("");
      }
    }
  }
  return Promise.reject(error?.response?.data);
};

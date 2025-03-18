import { useMutation } from "@tanstack/react-query";
import { TLogin, TLoginResponse, TRegister, TUserReq } from "@/types";
import { api } from "../api";
import { useAuthStore } from "@/store";
import { errorMessage, history, successMessage } from "@/utils";
import { ENDPOINTS } from "@/constants";
import { useTranslation } from "react-i18next";
import { queryClient } from "@/app/providers/theme.tsx";

export const useLogin = () => {
  const { setToken, setUser } = useAuthStore();
  const { t } = useTranslation("auth");

  return useMutation({
    mutationFn: async (event: TLogin) => {
      const { data } = await api.post<TLoginResponse>(ENDPOINTS.login, event);
      return data;
    },
    onSuccess: ({ user, accessToken, refreshToken }) => {
      setToken({ accessToken, refreshToken });
      setUser(user);
      successMessage(t("login_successfully"));
      history.push("/cabinet");
    },
    onError: (error: never) => {
      errorMessage(t(`error.${error as string}`));
    },
  });
};

export const useRegister = () => {
  const { setToken, setUser } = useAuthStore();
  const { t } = useTranslation("auth");

  return useMutation({
    mutationFn: async (event: TRegister) => {
      const { data } = await api.post<TLoginResponse>(
        ENDPOINTS.register,
        event,
      );
      return data;
    },
    onSuccess: ({ user, accessToken, refreshToken }) => {
      setToken({ accessToken, refreshToken });
      setUser(user);
      successMessage(t("login_successfully"));
      history.push("/cabinet");
    },
    onError: (error: never) => {
      errorMessage(t(`error.${error as string}`));
    },
  });
};

export const useUserUpdateProfile = () => {
  const { setUser } = useAuthStore();
  const { t } = useTranslation("auth");
  return useMutation({
    mutationFn: async (event: TUserReq) => {
      const { data } = await api.put<TLoginResponse>(
        ENDPOINTS.updateProfile,
        event,
      );
      return data;
    },
    onSuccess: ({ user }) => {
      setUser(user);
      queryClient.invalidateQueries({ queryKey: ["me"] });
      successMessage(t("profile_updated"));
    },
    // onError: (error: never) => {
    //   errorMessage(t(`error.${error as string}`));
    // },
  });
};

// export const useAdminLogin = () => {
//     const {setToken, setUser} = useAuthStore();
//
//     return useMutation({
//         mutationFn: async (event: TLogin) => {
//             const userCredential = await signInWithEmailAndPassword(firebaseAuth, event.email, event.password);
//             const user = userCredential.user;
//             const response: TLoginResponse = {
//                 user: {
//                     uid: user.uid,
//                     email: user.email as string,
//                     displayName: user.displayName || '',
//                 },
//                 access_token: await user.getIdToken(),
//                 refresh_token: userCredential.user.refreshToken
//             };
//             return response;
//         },
//         onSuccess: ({user, access_token, refresh_token}) => {
//             setToken({access_token, refresh_token});
//             setUser(user);
//             successMessage("You are logged in successfully");
//             history.push("/admin")
//         },
//         onError: (error: never) => {
//             console.error("Login error: ", error);
//         },
//     });
// };

import { useEffect } from "react";
import { useAuthStore } from "@/store";

export const useToken = () => {
  const { token, isInitiated, setIsAuth, setIsInitiated } = useAuthStore();

  const getAppConfigs = () => {
    if (token) {
      setIsAuth(true);
    }

    setIsInitiated(false);
  };

  useEffect(() => {
    getAppConfigs();
  }, []);

  return { isInitiated };
};

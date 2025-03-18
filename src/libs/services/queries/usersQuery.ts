import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs/services/api";
import { TLoginResponse } from "@/types";
import { ENDPOINTS } from "@/constants";
import { useAuthStore } from "@/store";

export const useGetMe = () => {
  const { token } = useAuthStore();
  const query = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      return (await $fetch<TLoginResponse>({ path: `${ENDPOINTS.getMe}` }))
        ?.data;
    },
    staleTime: Infinity,
    enabled: !!token,
    retry: 1,
  });

  return { ...query };
};

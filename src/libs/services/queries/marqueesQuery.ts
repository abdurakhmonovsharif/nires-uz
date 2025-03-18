import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { TMarquees } from "@/types";
import { ENDPOINTS } from "@/constants";

export const useGetMarquees = () => {
  return useQuery({
    queryKey: ["marquees"],
    queryFn: async () => {
      return (
        await $fetch<TMarquees[]>({
          path: `${ENDPOINTS.marquees}`,
        })
      )?.data;
    },
  });
};

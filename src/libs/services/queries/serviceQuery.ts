import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { ENDPOINTS } from "@/constants";
import { TStringOrNull, TService, SERVICE_TYPE } from "@/types";

export const useGetServices = () => {
  const query = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return (
        await $fetch<TService[]>({
          path: ENDPOINTS.services,
        })
      )?.data;
    },
  });

  return {
    ...query,
    services: query?.data?.filter(
      (data) => data.servicesType == SERVICE_TYPE.SERVICES,
    ),
    acts: query?.data?.filter((data) => data.servicesType == SERVICE_TYPE.ACT),
    ministry: query?.data?.filter((data) => data.servicesType == SERVICE_TYPE.MINISTRY),
  };
};

export const useGetServiceById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["services", { id }],
    queryFn: async () => {
      return (
        await $fetch<TService>({
          path: `${ENDPOINTS.services}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

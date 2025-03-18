import {useQuery} from "@tanstack/react-query";
import {$fetch} from "@/libs";
import {ENDPOINTS} from "@/constants";
import {MANAGEMENT_TYPE, TManagement, TStringOrNull} from "@/types";

export const useGetManagement = () => {
  const query= useQuery({
    queryKey: ["management"],
    queryFn: async () => {
      return (
        await $fetch<TManagement[]>({
          path: ENDPOINTS.management,
        })
      )?.data;
    },

  });
return {...query,
   management:query?.data?.filter(item=>item.positionType===MANAGEMENT_TYPE.MANAGEMENT),
   staff:query?.data?.filter(item=>item.positionType===MANAGEMENT_TYPE.STAFF),
}
};

export const useGetManagementById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["management", { id }],
    queryFn: async () => {
      return (
        await $fetch<TManagement>({
          path: `${ENDPOINTS.management}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

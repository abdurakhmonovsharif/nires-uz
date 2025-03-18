import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { ENDPOINTS } from "@/constants";
import { ACTIVITY_TYPE, TActivity, TStringOrNull } from "@/types";

export const useGetActivites = (enabled?: boolean) => {
  const query = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      return (
        await $fetch<TActivity[]>({
          path: `${ENDPOINTS.activities}`,
        })
      )?.data;
    },
    enabled,
  });

  return {
    ...query,
    activities: query.data?.filter(
      (data) => data.activitiesType == ACTIVITY_TYPE.ACTIVITY,
    ),
    tasks: query.data?.filter(
      (data) => data.activitiesType == ACTIVITY_TYPE.TASK,
    ),
  };
};

export const useGetActivityById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["activities", { id }],
    queryFn: async () => {
      return (
        await $fetch<TActivity>({
          path: `${ENDPOINTS.activities}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

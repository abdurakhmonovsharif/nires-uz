import { JOB_STATUS, TStringOrNull, TVacancy } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { $fetch } from "../api";
import { ENDPOINTS } from "@/constants";

export const useGetVacancies = () => {
  const query = useQuery({
    queryKey: ["vacancies"],
    queryFn: async () => {
      return (
        await $fetch<TVacancy[]>({
          path: `${ENDPOINTS.vacancies}`,
        })
      )?.data;
    },
  });

  return {
    ...query,
    data: query.data?.filter((data) => data.status == JOB_STATUS.OPEN),
  };
};

export const useGetVacancyById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["vacancies", { id }],
    queryFn: async () => {
      return (await $fetch<TVacancy>({ path: `${ENDPOINTS.vacancies}/${id}` }))
        ?.data;
    },
    enabled: !!id,
  });
};

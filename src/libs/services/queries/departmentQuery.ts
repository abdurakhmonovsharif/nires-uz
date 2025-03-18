import { useQueries, useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { ENDPOINTS } from "@/constants";
import { TStringOrNull, TDepartment, TManagement } from "@/types";

export const useGetDepartments = () => {
  const query = useQuery({
    queryKey: ["department"],
    queryFn: async () => {
      return (
        await $fetch<TDepartment[]>({
          path: ENDPOINTS.departments,
        })
      )?.data;
    },
  });

  const managementQueries = useQueries({
    queries: (query.data || []).map(({ managementId: id }) => ({
      queryKey: ["management", { id }],
      queryFn: async () => {
        return (
          await $fetch<TManagement>({
            path: `${ENDPOINTS.management}/${id}`,
          })
        )?.data;
      },
      enabled: !!id,
    })),
  });

  const enrichedDepartments: TDepartment[] = (query.data || []).map(
    (item, index) => {
      const resultQuery = managementQueries[index];

      return {
        ...item,
        management: resultQuery.data,
      };
    },
  );

  return {
    ...query,
    departments: enrichedDepartments,
  };
};

export const useGetDepartmentById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["department", { id }],
    queryFn: async () => {
      return (
        await $fetch<TDepartment>({
          path: `${ENDPOINTS.departments}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

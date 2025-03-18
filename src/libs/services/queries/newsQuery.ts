import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { ENDPOINTS } from "@/constants";
import { TNews, TReqParams, TResponse, TStringOrNull } from "@/types";
import { useState } from "react";
import { initialParams } from "@/constants/initialParams.ts";
import { formatQueryParams } from "@/utils";

export const useGetNews = (
  initParams?: Partial<TReqParams>,
  enabled?: boolean,
) => {
  const [params, setParams] = useState<TReqParams>(initialParams(initParams));

  const filteredParams = formatQueryParams(params);
  const query = useQuery({
    queryKey: ["news", { params }],
    queryFn: async () => {
      return (
        await $fetch<TResponse<TNews[]>>({
          path: `${ENDPOINTS.news}?${filteredParams}`,
        })
      )?.data;
    },
    enabled,
  });

  return {
    ...query,
    setParams,
    params,
  };
};

export const useGetNewsById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["news", { id }],
    queryFn: async () => {
      return (
        await $fetch<TNews>({
          path: `${ENDPOINTS.news}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

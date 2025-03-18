import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/libs";
import { ENDPOINTS } from "@/constants";
import { TMedia, TReqParams, TResponse, TStringOrNull } from "@/types";
import { useState } from "react";
import { initialParams } from "@/constants/initialParams.ts";
import { formatQueryParams } from "@/utils";

export const useGetMedia = (
  initParams?: Partial<TReqParams>,
  enabled?: boolean,
) => {
  const [params, setParams] = useState<TReqParams>(initialParams(initParams));

  const filteredParams = formatQueryParams(params);
  const query = useQuery({
    queryKey: ["media", { params }],
    queryFn: async () => {
      return (
        await $fetch<TResponse<TMedia[]>>({
          path: `${ENDPOINTS.media}?${filteredParams}`,
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

export const useGetMediaByType = (
  initParams?: Partial<TReqParams>,
  enabled?: boolean,
) => {
  const [params, setParams] = useState<TReqParams>(initialParams(initParams));

  const filteredParams = formatQueryParams(params);

  const query = useQuery({
    queryKey: ["media", { params }],
    queryFn: async () => {
      return (
        await $fetch<TResponse<TMedia[]>>({
          path: `${ENDPOINTS.mediaByType}?${filteredParams}`,
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

export const useGetMediaById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["media", { id }],
    queryFn: async () => {
      return (
        await $fetch<TMedia>({
          path: `${ENDPOINTS.media}/${id}`,
        })
      )?.data;
    },
    enabled: !!id,
  });
};

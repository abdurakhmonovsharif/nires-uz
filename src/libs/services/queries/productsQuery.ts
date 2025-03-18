import { TProduct, TStringOrNull } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { $fetch } from "../api";
import { ENDPOINTS } from "@/constants";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return (
        await $fetch<TProduct[]>({
          path: `${ENDPOINTS.products}`,
        })
      )?.data;
    },
  });
};

export const useGetProductById = (id?: TStringOrNull) => {
  return useQuery({
    queryKey: ["products", { id }],
    queryFn: async () => {
      return (await $fetch<TProduct>({ path: `${ENDPOINTS.products}/${id}` }))
        ?.data;
    },
  });
};

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { PropsWithChildren } from "react";
import { errorMessage } from "@/utils";
import { TError } from "@/types";

const axiosErrorHandler = (error: Error | AxiosError<TError>) => {
  if (error.message)
    if (axios.isAxiosError(error)) {
      errorMessage(error.message);
    } else {
      errorMessage(error.message);
    }
};

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: axiosErrorHandler,
  }),
  defaultOptions: {
    queries: {
      gcTime: 30_000,
      staleTime: 1000 * 60,
    },
  },
});

export const Query: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

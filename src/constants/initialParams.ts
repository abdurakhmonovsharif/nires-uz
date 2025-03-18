import { TReqParams } from "@/types";

export const initialParams = (
  initParams: TReqParams = {} as TReqParams,
): TReqParams => {
  return {
    size: 10,
    page: 0,
    ...initParams,
  };
};

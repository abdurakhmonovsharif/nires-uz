import { theme } from "antd";
import { components, token } from "./config";
import { ETheme } from "@/types/app.ts";
import { colors } from "./colors";

export const antTheme = (mode: ETheme) => ({
  token: { ...token, ...colors[mode] },
  components,
  algorithm:
    mode === ETheme.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
});

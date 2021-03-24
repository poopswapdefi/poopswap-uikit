import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.invertedContrast,
  hover: "#b75a36",
};

export const dark: NavTheme = {
  background: darkColors.invertedContrast,
  hover: "#473d5d",
};

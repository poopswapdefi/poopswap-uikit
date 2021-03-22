import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.invertedContrast,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.invertedContrast,
  hover: "#473d5d",
};

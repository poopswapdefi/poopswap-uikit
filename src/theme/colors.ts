import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFB237",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#FFF",
  success: "#31D0AA",
  warning: "#FFB237",
  // brown: "#68331f",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#412013",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#68331f",
  input: "#68331f",
  tertiary: "#EFF4F5",
  text: "#f0b90b",
  textDisabled: "#BDC2C4",
  textSubtle: "#f0b90b",
  borderColor: "#E9EAEB",
  card: "#b75a36",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

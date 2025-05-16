import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
});

export default theme;

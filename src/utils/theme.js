import { extendTheme } from "@chakra-ui/react";
import "@fontsource/fira-code";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
      },
    },
  },
  fonts: {
    heading: `"Fira Code", monospace`,
    body: `"Fira Code", monospace`,
  },
};

export default extendTheme(theme);

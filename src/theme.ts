import { extendTheme } from "@chakra-ui/react";

export const appTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Poppins'",
        backgroundColor: "white",
      },
    },
  },
});

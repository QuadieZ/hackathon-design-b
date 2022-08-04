import { theme } from "@chakra-ui/react";

export const appTheme = {
  ...theme,
  styles: {
    ...theme.styles,
    global: {
      ...theme.styles.global,
      "html, body": {
        backgroundColor: "#F9F4EF",
      },
    },
  },
};

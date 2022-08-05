import { ChakraProvider, Box } from "@chakra-ui/react";
import { Carousel, Product } from "./component";
import { MainLayout } from "./layout";

import { appTheme } from "./theme";

const App = () => (
  <ChakraProvider theme={appTheme}>
    <MainLayout>
      <Box height="522px">
        <Carousel>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Carousel>
      </Box>
    </MainLayout>
  </ChakraProvider>
);

export default App;

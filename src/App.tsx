import { ChakraProvider, Box } from "@chakra-ui/react";
import { Carousel, Product } from "./component";
import { MainLayout } from "./layout";

import { appTheme } from "./theme";

const App = () => (
  <ChakraProvider theme={appTheme}>
    <MainLayout>
      <Carousel>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Carousel>
    </MainLayout>
  </ChakraProvider>
);

export default App;

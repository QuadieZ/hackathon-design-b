import { ChakraProvider, Box } from "@chakra-ui/react";
import { Carousel, Product } from "./component";
import { MainLayout } from "./layout";
import { products } from "./products";

import { appTheme } from "./theme";

const App = () => (
  <ChakraProvider theme={appTheme}>
    <MainLayout>
      <Box height="522px">
        <Carousel>
          {products.map((product) => (
            <Product label={product.label} variant={product.variants} />
          ))}
        </Carousel>
      </Box>
    </MainLayout>
  </ChakraProvider>
);

export default App;

import { ChakraProvider } from "@chakra-ui/react";
import { Carousel, Product, TopBar } from "./component";
import { MainLayout } from "./layout";
import { products } from "./products";

import { appTheme } from "./theme";

const App = () => (
  <ChakraProvider theme={appTheme}>
    <MainLayout>
      <TopBar />
      <Carousel>
        {products.map((product) => (
          <Product label={product.label} variant={product.variants} />
        ))}
      </Carousel>
    </MainLayout>
  </ChakraProvider>
);

export default App;

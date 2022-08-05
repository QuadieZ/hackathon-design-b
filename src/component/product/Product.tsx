import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

type ProductProps = {
  isActive?: boolean;
};

const sizingAnimation = (isActive?: boolean) => {
  return isActive
    ? {
        width: "322px",
        height: "100%",
      }
    : {
        width: 255,
        height: "10%",
      };
};

const Product: FC<ProductProps> = (props) => {
  const { isActive } = props;
  return (
    <Flex
      as={motion.div}
      bgColor="white"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="22px"
      animate={sizingAnimation(isActive)}
      initial={false}
      p={8}
    >
      <Image
        as={motion.img}
        src={`${process.env.PUBLIC_URL}/images/product/hooddy-gray.png`}
        alt="productImage"
        h="100%"
        minH={isActive ? "387px" : "287px"}
        objectFit="contain"
      />
      {isActive && (
        <Flex flexDirection="column" gap={3}>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            m={2}
          >
            <Heading>Tank top</Heading>
            <Text>35 $</Text>
          </Flex>
          <Flex gap={2}>
            <Button
              borderRadius="25px"
              bgColor="transparent"
              border="1px solid black"
            >
              Product Details
            </Button>
            <Button
              borderRadius="25px"
              bgColor="black"
              color="white"
              border="1px solid black"
            >
              Add to cart
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Product;

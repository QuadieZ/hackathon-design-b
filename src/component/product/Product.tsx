import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { AddToCartButton } from "../add-to-cart-button";

type ProductProps = {
  isActive?: boolean;
};

const sizingAnimation = (isActive?: boolean) => {
  return isActive
    ? {
        width: "322px",
        height: "10%",
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
      boxShadow={isActive ? "0px 8px 24px rgba(0, 0, 0, 0.15)" : "0"}
      animate={sizingAnimation(isActive)}
      initial={false}
      px={8}
      py={5}
      mt="-3vh"
    >
      <Image
        as={motion.img}
        src={`${process.env.PUBLIC_URL}/images/product/hooddy-gray.png`}
        alt="productImage"
        h={isActive ? "45vh" : "30vh"}
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
            <Heading fontSize="32px">Tank top</Heading>
            <Text fontSize="14px">35 $</Text>
          </Flex>
          <Flex gap={2}>
            <Button
              borderRadius="25px"
              bgColor="transparent"
              border="1px solid black"
              fontSize="14px"
            >
              Product Details
            </Button>
            <AddToCartButton />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Product;

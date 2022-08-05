import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { AddToCartButton } from "../add-to-cart-button";

export interface IProductVariant {
  color: string;
  startColor?: string;
  endColor?: string;
  src: string;
}

type ProductProps = {
  isActive?: boolean;
  label?: string;
  variant: IProductVariant[];
};

const sizingAnimation = (isActive?: boolean) => {
  return isActive
    ? {
        width: "400px",
        height: "10%",
      }
    : {
        width: "150px",
        height: "10%",
      };
};

const Product: FC<ProductProps> = (props) => {
  const { isActive, label, variant } = props;
  const [activeVariant, setActiveVariant] = useState(0);

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
      mt="-6vh"
    >
      <Box
        bg={
          isActive
            ? `linear-gradient(204.52deg, ${variant[activeVariant].startColor}, ${variant[activeVariant].endColor})`
            : "none"
        }
        animate={{
          background: isActive
            ? `linear-gradient(204.52deg, ${variant[activeVariant].startColor}, ${variant[activeVariant].endColor})`
            : "white",
        }}
        mt={3}
        borderRadius="22px"
        as={motion.div}
      >
        <Image
          as={motion.img}
          src={variant[activeVariant].src}
          alt="productImage"
          h={isActive ? "45vh" : "30vh"}
          objectFit="contain"
        />
      </Box>
      {isActive && (
        <Flex flexDirection="column" gap={3}>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            m={2}
          >
            <HStack my={3}>
              {variant?.map((e, i) => (
                <Circle
                  size="12px"
                  whileHover={{ scale: 1.2 }}
                  as={motion.div}
                  bg={e.color}
                  cursor="pointer"
                  onClick={() => setActiveVariant(i)}
                  border={activeVariant === i ? "2px" : "0px"}
                />
              ))}
            </HStack>
            <Heading fontSize="24px">{label}</Heading>
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

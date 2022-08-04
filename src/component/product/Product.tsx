import { chakra, Flex } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FC } from "react";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

type ProductProps = {
  isActive?: boolean;
};

const sizingAnimation = (isActive?: boolean) => {
  return isActive
    ? {
        width: "322px",
        height: "522px",
      }
    : {
        width: 255,
        height: 255,
      };
};

const Product: FC<ProductProps> = (props) => {
  const { isActive } = props;
  return (
    <ChakraBox
      display="flex"
      bgColor="white"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="55px"
      animate={sizingAnimation(isActive)}
    >
      Test
    </ChakraBox>
  );
};

export default Product;

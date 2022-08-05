import { Box, Button } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CartIcon } from "../../icon";

const containerHoverStyles = {
  scale: 1.05,
  backgroundColor: "black",
};

const textHoverStyles = {
  opacity: 0,
};

const containerVariant = {
  hover: containerHoverStyles,
  click: containerHoverStyles,
};

const textVariant = {
  hover: textHoverStyles,
  click: textHoverStyles,
};

const iconVariant = {
  click: {
    left: "calc(100% - 16px)",
  },
};

const AddToCartButton = () => {
  const [currentVariant, setCurrentVariant] = useState("");
  return (
    <AnimatePresence>
      <Button
        as={motion.button}
        borderRadius="25px"
        bgColor="black"
        color="white"
        fontSize="14px"
        border="1px solid black"
        size="md"
        variants={containerVariant}
        animate={currentVariant}
        onMouseEnter={() => setCurrentVariant("hover")}
        onMouseLeave={() => setCurrentVariant("")}
        onClick={() => setCurrentVariant("click")}
      >
        <Box
          position="relative"
          as={motion.span}
          variants={iconVariant}
          animate={currentVariant}
        >
          <CartIcon />
        </Box>
        <Box
          ml={2}
          id="add-to-cart-text"
          variants={textVariant}
          animate={currentVariant}
          as={motion.span}
        >
          Add to cart
        </Box>
      </Button>
    </AnimatePresence>
  );
};

export default AddToCartButton;

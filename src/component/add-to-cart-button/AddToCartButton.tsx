import { Box, Button, Portal } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useCartPosition } from "../../hooks";
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

const AddToCartButton = () => {
  const portalElementRef = useRef<any>();
  const buttonRef = useRef<any>();

  const [currentVariant, setCurrentVariant] = useState("");
  const [bubbleTarget, setBubbleTarget] = useState<{
    from: [number, number];
    to: [number, number];
  } | null>(null);

  const { getCartPosition, addCartItem } = useCartPosition();

  const handleClickButton = () => {
    setCurrentVariant("click");
    showBubble();
  };

  const iconVariant = {
    click: {
      left: "calc(100% - 16px)",
    },
  };

  const showBubble = () => {
    const cartPosition = getCartPosition();
    const { x, y, width } = buttonRef.current.getBoundingClientRect();
    setBubbleTarget({
      from: [x + width, y],
      to: [cartPosition?.x ?? 0, cartPosition?.y ?? 0],
    });
  };

  const handleBubbleEnd = () => {
    setBubbleTarget(null);
    addCartItem();
  };

  if (!portalElementRef.current) {
    portalElementRef.current = document.createElement("div");
  }

  return (
    <AnimatePresence>
      <Button
        ref={buttonRef}
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
        onClick={handleClickButton}
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
      <Portal>
        {!!bubbleTarget && (
          <Box
            as={motion.div}
            w="24px"
            h="24px"
            bgColor="red"
            borderRadius="50%"
            position="fixed"
            left={bubbleTarget.from[0]}
            top={bubbleTarget.from[1]}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: [0, 100, 0],
              y: [0, 50, 0],
              left: bubbleTarget.to[0],
              top: bubbleTarget.to[1],
              transition: {
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
            }}
            onAnimationComplete={handleBubbleEnd}
          />
        )}
      </Portal>
    </AnimatePresence>
  );
};

export default AddToCartButton;

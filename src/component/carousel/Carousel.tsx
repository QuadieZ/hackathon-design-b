import { Button, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React, { ReactElement, useRef } from "react";
import { FC, ReactNode, useState } from "react";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const sizingAnimation = (activeIndex: number, index: number) => {
  const diffIndex = activeIndex - index;
  const unactiveLeft = 50 - diffIndex * 25;

  console.log(index, unactiveLeft);

  return activeIndex === index
    ? {
        left: "50%",
        zIndex: 2,
      }
    : {
        left: `${unactiveLeft}%`,
        opacity: diffIndex > 1 || diffIndex < -1 ? 0 : 0.5,
      };
};

const Carousel: FC<{ children?: ReactNode }> = ({ children }) => {
  const containerRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(1);

  const renderingItems = React.Children.toArray(children);

  const handleNext = () => {
    setActiveIndex((prev) => {
      return prev === renderingItems.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const idx = renderingItems.length - 1;
      return prev === 0 ? idx : prev - 1;
    });
  };

  const applyProps = (element: ReactElement, props: any) =>
    React.cloneElement(element, props);

  return (
    <Flex
      h="full"
      justifyContent="center"
      alignItems="center"
      w="full"
      gap="72px"
      ref={containerRef}
    >
      <Button position="absolute" left="0" zIndex={3} onClick={handlePrev}>
        Prev
      </Button>
      {renderingItems?.map((child, index) => (
        <ChakraBox
          key={index}
          animate={{
            ...sizingAnimation(activeIndex, index),
          }}
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {applyProps(child as ReactElement, {
            isActive: activeIndex === index,
          })}
        </ChakraBox>
      ))}
      <Button zIndex={3} position="absolute" right="0" onClick={handleNext}>
        Next
      </Button>
    </Flex>
  );
};

export default Carousel;

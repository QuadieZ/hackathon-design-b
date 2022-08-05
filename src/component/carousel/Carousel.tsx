import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, StyleProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React, { ReactElement, useRef } from "react";
import { FC, ReactNode, useState } from "react";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const getActiveAnimation = (activeIndex: number, index: number) => {
  const diffIndex = activeIndex - index;
  const unactiveLeft = 50 - diffIndex * 25;

  return activeIndex === index
    ? {
        left: "50%",
        zIndex: 2,
        opacity: 1,
      }
    : {
        left: `${unactiveLeft}%`,
        opacity: diffIndex > 1 || diffIndex < -1 ? 0 : 0.5,
      };
};

type CarouselProps = {
  children?: ReactNode;
  height?: StyleProps["height"];
};

const Carousel: FC<CarouselProps> = ({ children }) => {
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
    <ChakraBox
      w="full"
      h="100%"
      ref={containerRef}
      position="relative"
      initial={false}
    >
      {renderingItems?.map((child, index) => {
        const isActive = activeIndex === index;
        return (
          <ChakraBox
            key={index}
            animate={{
              ...getActiveAnimation(activeIndex, index),
            }}
            position={"absolute"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="translateX(-50%)"
            top={0}
            initial={false}
          >
            {isActive && (
              <Button
                position="absolute"
                left="0"
                top="50%"
                transform="translate(-100%,-50%)"
                zIndex={3}
                onClick={handlePrev}
                bgColor="transparent"
                _hover={{ bgColor: "transparent" }}
                _active={{ bgColor: "transparent" }}
              >
                <ChevronLeftIcon />
              </Button>
            )}
            {applyProps(child as ReactElement, {
              isActive: activeIndex === index,
            })}
            {isActive && (
              <Button
                zIndex={3}
                position="absolute"
                right="0"
                top="50%"
                transform="translate(100%,-50%)"
                onClick={handleNext}
                bgColor="transparent"
                _hover={{ bgColor: "transparent" }}
                _active={{ bgColor: "transparent" }}
              >
                <ChevronRightIcon />
              </Button>
            )}
          </ChakraBox>
        );
      })}
    </ChakraBox>
  );
};

export default Carousel;

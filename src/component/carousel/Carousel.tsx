import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Box, StyleProps, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactElement, useRef } from "react";
import { FC, ReactNode, useState } from "react";

const buttonStyles: ButtonProps = {
  position: "absolute",
  zIndex: 3,
  top: "50%",
  bgColor: "transparent",
  w: "24px",
  borderRadius: "50%",
  _hover: { bgColor: "transparent" },
  _active: { bgColor: "transparent" },
};

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
    <Box
      as={motion.div}
      w="full"
      h="100%"
      ref={containerRef}
      position="relative"
      initial={false}
    >
      {renderingItems?.map((child, index) => {
        const isActive = activeIndex === index;
        return (
          <Box
            as={motion.div}
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
                left="0"
                transform="translate(calc(-100% - 4px),-50%)"
                onClick={handlePrev}
                {...buttonStyles}
              >
                <ChevronLeftIcon boxSize={6} />
              </Button>
            )}
            {applyProps(child as ReactElement, {
              isActive: activeIndex === index,
            })}
            {isActive && (
              <Button
                right="0"
                transform="translate(calc(100% + 4px),-50%)"
                onClick={handleNext}
                {...buttonStyles}
              >
                <ChevronRightIcon boxSize={6} />
              </Button>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Carousel;

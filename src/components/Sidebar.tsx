import { isValidMotionProp, motion } from "framer-motion";
import { Box, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { CatalogIcon } from "../icons/components/CatalogIcon";
import { DesignRoomIcon } from "../icons/components/DesignRoomIcon";

export interface ISidebar {}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const IconBox = () => {};

export const Sidebar = () => {
  const [isHovered, setHovered] = useState(false);
  console.log(isHovered);
  return (
    <ChakraBox
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      w="80px"
      h="full"
    >
      <ChakraBox
        initial={{ width: "0px" }}
        animate={{ width: isHovered ? "80px" : "0px" }}
        h="100vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <ChakraBox
          whileHover={{
            scale: 1.5,
          }}
          boxSize="24px"
        >
          <CatalogIcon
            visibility={isHovered ? "visible" : "hidden"}
            boxSize="24px"
          />
        </ChakraBox>
        <DesignRoomIcon visibility={isHovered ? "visible" : "hidden"} />
      </ChakraBox>
    </ChakraBox>
  );
};

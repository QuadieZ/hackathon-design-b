import { isValidMotionProp, motion } from "framer-motion";
import { Box, chakra } from "@chakra-ui/react";
import { CatalogIcon } from "../icons/components/CatalogIcon";
import { DesignRoomIcon } from "../icons/components/DesignRoomIcon";
import { ReactElement, ReactNode } from "react";

export interface ISidebar {}

interface IIconBoxProps {
  icon: ReactNode;
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const IconBox = (props: IIconBoxProps) => {
  const { icon } = props;
  return (
    <ChakraBox
      whileHover={{
        scale: 1.2,
      }}
      boxSize="24px"
    >
      {icon}
    </ChakraBox>
  );
};

export const TobBar = () => {
  return (
    <ChakraBox w="full" h="80px">
      <ChakraBox
        h="80px"
        w="full"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <IconBox icon={<CatalogIcon />} />
        <DesignRoomIcon />
      </ChakraBox>
    </ChakraBox>
  );
};

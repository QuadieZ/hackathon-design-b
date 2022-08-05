import { isValidMotionProp, motion } from "framer-motion";
import { Box, chakra, Text } from "@chakra-ui/react";
import { ReactElement, ReactNode, useState, FC } from "react";
import { ShirtIcon } from "../icons/components/ShirtIcon";
import { PantsIcon } from "../icons/components/PantsIcon";
import { ShoesIcon } from "../icons/components/ShoesIcon";
import { CapIcon } from "../icons/components/CapIcon";
import { BallIcon } from "../icons/components/BallIcon";
import { IIconProps } from "../icons/BaseIcon";

export interface ISidebar {}

interface IIconBoxProps {
  icon: FC<IIconProps>;
  label?: string;
  active?: string;
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const IconBox = (props: IIconBoxProps) => {
  const { icon: Icon, label, active } = props;

  const [hovered, setHovered] = useState(false);
  const isActive = label === active;

  return (
    <ChakraBox
      whileHover={{
        scale: isActive ? 1 : 1.5,
      }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
      display="flex"
      flexDir="column"
      alignItems="center"
      cursor="pointer"
    >
      <Icon color={isActive ? "black" : hovered ? "#42BF77" : "#98A3B3"} />
      <Text
        visibility={hovered && !isActive ? "visible" : "hidden"}
        mt={2}
        fontSize="10px"
        color={hovered && !isActive ? "#42BF77" : "black"}
      >
        {label}
      </Text>
    </ChakraBox>
  );
};

export const TopBar = () => {
  const [active, setActive] = useState("Tops");
  return (
    <ChakraBox w="full" h="80px" mt={5}>
      <ChakraBox
        h="80px"
        w="full"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        gap={10}
      >
        <IconBox icon={ShirtIcon} label="Tops" active={active} />
        <IconBox icon={PantsIcon} label="Pants" active={active} />
        <IconBox icon={ShoesIcon} label="Sneakers" active={active} />
        <IconBox icon={CapIcon} label="Accessory" active={active} />
        <IconBox icon={BallIcon} label="Equipment" active={active} />
      </ChakraBox>
    </ChakraBox>
  );
};

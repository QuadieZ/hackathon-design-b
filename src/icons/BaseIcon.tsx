import { Icon, IconProps } from "@chakra-ui/icons";
import type { FC } from "react";

type IconSize = "16px" | "24px";
type IconSizeProp = IconSize | IconSize[];

export interface IIconProps extends IconProps {
  size?: IconSizeProp;
  alt?: string;
}

export type IBaseIconProps = IIconProps & {
  variant?: "special";
};

export const BaseIcon: FC<IBaseIconProps> = (props) => {
  const {
    children,
    size = "16px",
    variant = "special",
    color,
    ...rest
  } = props;

  const iconStyle = {
    special: {
      color: "#DEA59E",
      _hover: {
        color: "#94240B",
      },
    },
  };

  return (
    <Icon
      boxSize={variant === "special" ? "24px" : size}
      {...iconStyle[variant]}
      {...rest}
    >
      {children}
    </Icon>
  );
};

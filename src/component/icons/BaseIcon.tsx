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
  const { children, size, variant = "special", color, ...rest } = props;

  return (
    <Icon
      boxSize={variant === "special" ? "32px" : size}
      color={color}
      {...rest}
    >
      {children}
    </Icon>
  );
};

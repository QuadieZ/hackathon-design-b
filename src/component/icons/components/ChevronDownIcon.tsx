import { FC } from "react";

import { BaseIcon, IIconProps } from "../BaseIcon";

export const ChevronDownIcon: FC<IIconProps> = (props) => {
  return (
    <BaseIcon variant="special" {...props}>
      <path
        d="M8.295 4.29492L6 6.58492L3.705 4.29492L3 4.99992L6 7.99992L9 4.99992L8.295 4.29492Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};

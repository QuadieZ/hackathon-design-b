import { FC } from "react";

import { BaseIcon, IIconProps } from "../BaseIcon";

export const LeadsIcon: FC<IIconProps> = (props) => {
  return (
    <BaseIcon variant="special" {...props}>
      <path
        d="M21.5 4H2.5C2.22386 4 2 4.22386 2 4.5V6.32011C2 6.48118 2.07759 6.63238 2.20845 6.7263L9.52161 11.9754C9.65247 12.0693 9.73006 12.2205 9.73006 12.3816V17.9163C9.73006 18.1097 9.84164 18.2858 10.0166 18.3684L13.4337 19.9821C13.7654 20.1387 14.1472 19.8968 14.1472 19.53V12.3839C14.1472 12.2215 14.2261 12.0693 14.3587 11.9756L21.7885 6.72611C21.9211 6.63241 22 6.48013 22 6.31775V4.5C22 4.22386 21.7761 4 21.5 4Z"
        stroke="currentColor"
        fill="none"
        stroke-width="1.5"
      />
    </BaseIcon>
  );
};

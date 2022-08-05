import { FC } from "react";

import { BaseIcon, IIconProps } from "../BaseIcon";

export const BellIcon: FC<IIconProps> = (props) => {
  return (
    <BaseIcon variant="special" {...props}>
      <path
        d="M17.9751 16.5229C17.7407 16.2885 17.609 15.9706 17.609 15.639V10.7179C17.609 7.90416 16.4099 5.75311 14.1599 5.05655C13.6545 4.90009 13.25 4.43146 13.25 3.84084V3.53846C13.25 3.40153 13.1713 3.21289 12.9488 3.03202C12.7266 2.85145 12.4418 2.75 12.2051 2.75C11.9656 2.75 11.6654 2.85359 11.4286 3.03966C11.1895 3.22762 11.1136 3.4156 11.1136 3.53846V3.84052C11.1136 4.43161 10.7085 4.90038 10.2027 5.05651C7.95668 5.74978 6.80128 7.88271 6.80128 10.7179V15.639C6.80128 15.9706 6.66959 16.2885 6.43517 16.5229M17.9751 16.5229H6.43517M17.9751 16.5229L19.6252 18.1731H4.78502M17.9751 16.5229L4.78502 18.1731M6.43517 16.5229L4.78502 18.1731M6.43517 16.5229L4.78502 18.1731M11.1412 20.6987H13.2662C13.0289 21.032 12.6394 21.25 12.2051 21.25C11.7646 21.25 11.3765 21.032 11.1412 20.6987Z"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
      />
      <circle cx="17.5" cy="6.5" r="2.5" fill="#D64E30" />
    </BaseIcon>
  );
};

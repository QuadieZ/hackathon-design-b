import { FC } from "react";

import { BaseIcon, IIconProps } from "../BaseIcon";

export const PantsIcon: FC<IIconProps> = (props) => {
  return (
    <BaseIcon variant="special" {...props}>
      <path
        d="M22.061 0.432C22.0453 0.189231 21.8437 0 21.6004 0H2.40042C2.15719 0 1.9555 0.189231 1.93981 0.432L0.462886 23.5089C0.454579 23.6363 0.499809 23.7609 0.58704 23.8542C0.674271 23.9474 0.796117 24 0.923502 24H7.38504C7.55996 24 7.71966 23.9012 7.79766 23.7448L12.0004 15.3397L16.2027 23.7448C16.2812 23.9012 16.4409 24 16.6158 24H23.0773C23.2047 24 23.327 23.9474 23.4138 23.8542C23.5006 23.7609 23.5458 23.6363 23.538 23.5089L22.061 0.432ZM21.1675 0.923077L21.3152 3.23077H2.68566L2.83335 0.923077H21.1675ZM16.901 23.0769L12.413 14.1014C12.2566 13.7885 11.7438 13.7885 11.5873 14.1014L7.09981 23.0769H1.4155L2.51396 5.91277C2.58827 5.96354 2.67273 6 2.76966 6C4.04212 6 5.07735 7.03523 5.07735 8.30769C5.07735 9.58015 4.04212 10.6154 2.76966 10.6154C2.51489 10.6154 2.30812 10.8222 2.30812 11.0769C2.30812 11.3317 2.51489 11.5385 2.76966 11.5385C4.55119 11.5385 6.00042 10.0892 6.00042 8.30769C6.00042 6.52615 4.55119 5.07692 2.76966 5.07692C2.69489 5.07692 2.62658 5.09908 2.56427 5.13046L2.62658 4.15385H11.5389V7.872C11.5389 8.12677 11.7457 8.33354 12.0004 8.33354C12.2552 8.33354 12.462 8.12677 12.462 7.872V4.15385H21.3743L21.4366 5.13046C21.3743 5.09908 21.306 5.07692 21.2312 5.07692C19.4497 5.07692 18.0004 6.52615 18.0004 8.30769C18.0004 10.0892 19.4497 11.5385 21.2312 11.5385C21.486 11.5385 21.6927 11.3317 21.6927 11.0769C21.6927 10.8222 21.486 10.6154 21.2312 10.6154C19.9587 10.6154 18.9235 9.58015 18.9235 8.30769C18.9235 7.03523 19.9587 6 21.2312 6C21.3277 6 21.4126 5.96354 21.4869 5.91277L22.5853 23.0769H16.901Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};

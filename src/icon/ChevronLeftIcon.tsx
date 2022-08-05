import { FC } from "react";
import { BaseIcon } from "../component/icons/BaseIcon";

export const ChevronLeftIcon: FC = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.6485 2.35147C17.1172 2.8201 17.1172 3.5799 16.6485 4.04853L8.69706 12L16.6485 19.9515C17.1172 20.4201 17.1172 21.1799 16.6485 21.6485C16.1799 22.1172 15.4201 22.1172 14.9515 21.6485L6.15147 12.8485C5.68284 12.3799 5.68284 11.6201 6.15147 11.1515L14.9515 2.35147C15.4201 1.88284 16.1799 1.88284 16.6485 2.35147Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};

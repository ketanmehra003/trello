import { Text, Img } from "../";
import React from "react";

interface Props {
  className?: string;
  statusImage?: string;
  statusText?: React.ReactNode;
  notSelectedText?: React.ReactNode;
}

export default function UserStatusRow({
  statusImage = "img_frame_gray_700.svg",
  statusText = "Status",
  notSelectedText = "Not selected",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
      <div className="flex flex-1 items-center gap-6">
        <Img src={statusImage} width={24} height={24} alt="Status Icon" className="w-[24px] h-[24px]" />
        <Text size="textxs" as="p" className="text-[16px] font-normal !text-gray-700">
          {statusText}
        </Text>
      </div>
      <Text size="textxs" as="p" className="text-[16px] font-normal !text-gray-400_01">
        {notSelectedText}
      </Text>
    </div>
  );
}
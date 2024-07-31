"use client";

import { Text, Img } from "../";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="286px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-6 top-0 px-4 sm:pt-5 !border-gray-300_03 !border-r !border-solid bg-white-a700 !sticky`}
    >
      <Img src="img_logo.svg" width={252} height={78} alt="Logo" className="h-[78px] w-full" />

      <Menu
        menuItemStyles={{
          button: {
            padding: "6px",
            gap: "14px",
            color: "#797979",
            fontWeight: 400,
            fontSize: "20px",
            borderColor: "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
            ['&:hover, &.ps-active']: { borderColor: "#dcdcdc", backgroundColor: "#f3f3f3 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "4px" } }}
        className="mt-4 flex-grow flex w-full flex-col self-stretch pb-1.5"
      >
        <MenuItem
          icon={<Img src="img_frame.svg" width={24} height={24} alt="Home Icon" className="h-[24px] w-[24px]" />}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_frame_gray_600_02.svg"
              width={24}
              height={24}
              alt="Boards Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Boards
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_frame_gray_600_02_24x24.svg"
              width={24}
              height={24}
              alt="Settings Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Settings
        </MenuItem>
        <MenuItem
          icon={<Img src="img_frame_24x24.svg" width={24} height={24} alt="Teams Icon" className="h-[24px] w-[24px]" />}
        >
          Teams
        </MenuItem>
        <MenuItem
          icon={<Img src="img_frame_1.svg" width={24} height={24} alt="Analytics Icon" className="h-[24px] w-[24px]" />}
        >
          Analytics
        </MenuItem>
        <MenuItem
          className="deep_purple_600_01_indigo_200_border "
        >
          <Text className="!text-neutral-50 !font-medium flex-grow text-center">
            Create new task
          </Text>
          <Img src="img_frame_white_a700.svg" width={24} height={24} alt="Task Icon" className="h-[24px] w-[24px] flex-grow items-center mr-5" />
        </MenuItem>
      </Menu>

      {!collapsed ? (
        <div className="mb-2 mt-auto flex items-center justify-center gap-2 self-stretch rounded-lg bg-gray-100_03 p-1.5">
          <Img src="img_download.svg" width={40} height={40} alt="Download Icon" className="h-[40px] w-[40px]" />
          <div className="flex flex-1 flex-col items-start">
            <Text as="p" className="!font-medium !text-gray-700_01">
              Download the app
            </Text>
            <Text size="textxs" as="p" className="!text-gray-700_01">
              Get the full experience{" "}
            </Text>
          </div>
        </div>
      ) : null}
    </Sidebar>
  );
}

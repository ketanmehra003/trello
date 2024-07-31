import { Img, Text, Heading, Button } from "../";
import React, {useEffect, useState} from "react";

interface Props {
  id: number;
  title: string;
  components: {
    taskTitle: string,
    taskDescription: string,
    taskPriority: string,
    taskDeadline: string,
    taskTime: string
  }[];
  className?: string;
}

export default function TaskManager({
    id,
    title,
    components: [
      {
        taskTitle,
        taskDescription,
        taskPriority,
        taskDeadline,
        taskTime
      }
    ],
    ...props
  }: Props) {
    return (
      <div {...props} className={`${props.className} flex flex-col w-[24%]`}>
        <div className="flex flex-col gap-3.5 self-stretch">
          <div className="flex items-center justify-between gap-5">
            <Text as="p" className="!text-gray-700_02">
              {title}
            </Text>
            <Img
              src="img_frame_gray_700_02.svg"
              width={24}
              height={24}
              alt="Todoicon"
              className="h-[24px] w-[24px]"
            />
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-300_03 bg-gray-50 px-3 py-3.5">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-0.5 self-stretch">
                <Text size="texts" as="p" className="!font-medium leading-[19px] !text-gray-700">
                  {taskTitle}
                </Text>
                <Text size="textxs" as="p" className="leading-4">
                  {taskDescription}
                </Text>
              </div>
              <Button
                color="red_300"
                size="xs"
                shape="round"
                className="min-w-[54px]"
              >
                {taskPriority}
              </Button>
            </div>
            <div className="flex items-center gap-2 self-stretch">
              <Img
                src="img_frame_gray_700.svg"
                width={24}
                height={24}
                alt="Dateicon"
                className="h-[24px] w-[24px]"
              />
              <Heading size="headingxs" as="p" className="!text-gray-700">
                {taskDeadline}
              </Heading>
            </div>
            <div className="flex">
              <Text size="texts" as="p" className="!font-medium">
                {taskTime}
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 rounded-lg bg-gradient1 p-2">
            <Text size="texts" as="p" className="!text-gray-300_02">
              Add new
            </Text>
            <Img
              src="img_frame_gray_300_02.svg"
              width={24}
              height={24}
              alt="Addnewicon"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
    );
}
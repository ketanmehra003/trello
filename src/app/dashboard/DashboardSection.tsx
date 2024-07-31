"use client";

import TaskManager from '../components/TaskManager';
import React, { Suspense, useEffect, useState } from 'react';
import { taskManagementList } from '../bin/data';
import { Img, Text, Heading, Button } from "../components";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

interface Props {
    id: number;
    title: string;
    components: {
      id: string;
      taskTitle: string,
      taskDescription: string,
      taskPriority: string,
      taskDeadline: string,
      taskTime: string
    }[];
    className?: string;
  }

export default function DashboardSection() {
    const [data, setData]=useState<Props[] | []>([]);
    useEffect(() => {
        setData(taskManagementList);
    }, []);
    
    const onDragEnd = (e: DropResult) => {
        const { source, destination } = e;
        if (!destination) return;
        if (source.droppableId === destination.droppableId) {
            const list = data.find((d) => d.id === parseInt(source.droppableId.replace("droppable", "")));
            if (list) {
                const [removed] = list.components.splice(source.index, 1);
                list.components.splice(destination.index, 0, removed);
            }
        } else {
            const sourceList = data.find((d) => d.id === parseInt(source.droppableId.replace("droppable", "")));
            const destinationList = data.find((d) => d.id === parseInt(destination.droppableId.replace("droppable", "")));
            if (sourceList && destinationList) {
                const [removed] = sourceList.components.splice(source.index, 1);
                destinationList.components.splice(destination.index, 0, removed);
            }
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {/* dashboard section */}
            <div className="mr-4 md:mr-0">
                <div className="rounded-lg bg-white-a700 p-3">
                    <div className="flex gap-4 md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {
                                data.length && data.map((d, index) => (
                                    <Droppable key={d.id} droppableId={`droppable${d.id}`}>
                                        {
                                            (provided) => (
                                                <div className={`mb-[210px] md:mb-0 md:w-full flex flex-col w-[24%]`}
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                >
                                                  <div className="flex flex-col gap-3.5 self-stretch">
                                                    <div className="flex items-center justify-between gap-5">
                                                      <Text as="p" className="!text-gray-700_02">
                                                        {d.title}
                                                      </Text>
                                                      <Img
                                                        src="img_frame_gray_700_02.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="Todoicon"
                                                        className="h-[24px] w-[24px]"
                                                      />
                                                    </div>
                                                    {
                                                        d.components.map((component, index) => (
                                                            <Draggable key={component.id} draggableId={`draggable${component.id}`} index={index}>
                                                                {
                                                                    (provided) => (
                                                                        <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-300_03 bg-gray-50 px-3 py-3.5"
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            ref={provided.innerRef}
                                                                        >
                                                                          <div className="flex flex-col items-start gap-3">
                                                                            <div className="flex flex-col gap-0.5 self-stretch">
                                                                              <Text size="texts" as="p" className="!font-medium leading-[19px] !text-gray-700">
                                                                                {component.taskTitle}
                                                                              </Text>
                                                                              <Text size="textxs" as="p" className="leading-4">
                                                                                {component.taskDescription}
                                                                              </Text>
                                                                            </div>
                                                                            <Button
                                                                              color="red_300"
                                                                              size="xs"
                                                                              shape="round"
                                                                              className="min-w-[54px]"
                                                                            >
                                                                              {component.taskPriority}
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
                                                                              {component.taskDeadline}
                                                                            </Heading>
                                                                          </div>
                                                                          <div className="flex">
                                                                            <Text size="texts" as="p" className="!font-medium">
                                                                              {component.taskTime}
                                                                            </Text>
                                                                          </div>
                                                                        </div>
                                                                    )
                                                                }
                                                                
                                                            </Draggable>
                                                        ))
                                                    }
                                                    <div className="flex items-center justify-between gap-5 rounded-lg bg-gradient1 p-2 text-slate-100">
                                                      <Button>
                                                        Add new
                                                      </Button>
                                                      <Img
                                                        src="img_frame_gray_300_02.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="Addnewicon"
                                                        className="h-[24px] w-[24px]"
                                                      />
                                                    </div>
                                                  </div>
                                                {provided.placeholder}
                                                </div>
                                            )
                                        }
                                    
                                    </Droppable>
                                ))
                            }
                        </Suspense>
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
}

/**
    <Suspense fallback={<div>Loading feed...</div>}>
        {taskManagementList.map((d, index) => (
            <TaskManager {...d} key={"taskList" + index} className="mb-[210px] md:mb-0 md:w-full" />
        ))}
    </Suspense>
 */

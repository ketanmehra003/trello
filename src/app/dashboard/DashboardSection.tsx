import Link from 'next/link';
import { Button } from '../components/Button';
import { Img } from '../components/Img';
import TaskManager from '../components/TaskManager';
import React, { Suspense } from 'react';

const taskManagementList = [
    {
        toDoText: "To do",
        taskTitle: "Implement User Authentication",
        taskDescription: "Develop and integrate user authentication using email and password.",
        taskPriority: "Urgent",
        taskDateText: "2024-08-15",
        taskTime: "1 hr ago",
        addNewText: "Add new",
    },
    {
        toDoText: "To do",
        taskTitle: "Implement User Authentication",
        taskDescription: "Develop and integrate user authentication using email and password.",
        taskPriority: "Urgent",
        taskDateText: "2024-08-15",
        taskTime: "1 hr ago",
        addNewText: "Add new",
    },
    {
        toDoText: "To do",
        taskTitle: "Implement User Authentication",
        taskDescription: "Develop and integrate user authentication using email and password.",
        taskPriority: "Urgent",
        taskDateText: "2024-08-15",
        taskTime: "1 hr ago",
        addNewText: "Add new",
    },
];


export default function DashboardSection() {
    return (
        <>
            {/* dashboard section */}
            <div className="mr-4 md:mr-0">
                <div className="rounded-lg bg-white-a700 p-3">
                    <div className="flex gap-4 md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {taskManagementList.map((d, index) => (
                                <TaskManager {...d} key={"taskList" + index} className="mb-[210px] md:mb-0 md:w-full" />
                            ))}
                        </Suspense>
                    </div>
                </div>
                <div>
                <Link href="/Taskmodal" style={{ color: "#87CEFA", textDecoration: "none" }}>
                    Dashboard
                </Link>
                </div>
            </div>
        </>
    );
}

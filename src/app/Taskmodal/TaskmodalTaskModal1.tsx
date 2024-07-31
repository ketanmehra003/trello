import { Text, Img, Heading, Button } from "../components";
import UserStatusRow from "../components/UserStatusRow";
import React, { Suspense } from "react";

const taskStatusList1 = [
    { statusImage: "loading.svg", statusText: "Status", notSelectedText: "Not selected" },
    { statusImage: "disc.svg", statusText: "Priority", notSelectedText: "Not selected" },
    { statusImage: "date.svg", statusText: "Deadline", notSelectedText: "Not selected" },
    { statusImage: "write.svg", statusText: "Description", notSelectedText: "Not selected" },
];

export default function TaskmodalTaskModal1() {
    return (
        <div className="gap-[30px] flex w-full flex-col items-center bg-white-a700 px-14 md:px-5">
            <div className="gap-[26px] w-[62%] flex flex-col md:w-full">
                <div className="flex items-center justify-center">
                    <div className="flex gap-4">
                        <Img src="close.svg" width={24} height={24} alt="Primary Image" className="w-[24px] h-[24px]" />
                        <Img
                            src="expand.svg"
                            width={24}
                            height={24}
                            alt="Secondary Image"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                    <div className="flex flex-1 justify-center gap-4 px-14 md:px-5">
                        <Button
                            shape="round"
                            rightIcon={
                                <Img
                                    src="share.svg"
                                    width={24}
                                    height={24}
                                    alt="Frame"
                                    className="h-[24px] w-[24px]"
                                />
                            }
                            className="min-w-[98px]"
                        >
                            Share
                        </Button>
                        <Button
                            shape="round"
                            rightIcon={
                                <Img src="fav.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                            }
                            className="min-w-[116px]"
                        >
                            Favorite
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col items-start gap-8">
                        <Heading
                            size="headingxs"
                            as="h1"
                            className="sm:text-[38px] md:text-[44px] text-[48px] !font-barlow4 font-semibold !text-blue_gray-100"
                        >
                            Title
                        </Heading>
                        <div className="self-stretch">
                            <div className="mr-[524px] flex flex-col gap-8 md:mr-0">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {taskStatusList1.map((d, index) => (
                                        <UserStatusRow {...d} key={"taskList1" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <div className="gap-[23px] flex items-center">
                        <Img
                            src="custom_prop.svg"
                            width={24}
                            height={24}
                            alt="Custom Image"
                            className="w-[24px] h-[24px]"
                        />
                        <Text size="textxs" as="p" className="text-[16px] font-normal !text-black-900">
                            Add custom property
                        </Text>
                    </div>
                </div>
            </div>
            <div className="gap-[30px] w-[62%] mb-1 flex flex-col items-start md:w-full">
                <div className="w-[92%] h-px bg-gray-300" />
                <Text size="textxs" as="p" className="text-[16px] font-normal !text-gray-400">
                    Start writing, or drag your own files here.
                </Text>
            </div>
        </div>
    );
}
import { Button, Img, Text } from "../components";
import Header from "../components/Header";
import Sidebar1 from "../components/Sidebar1";
import DashboardSection from "./DashboardSection";
import React from "react";


export default function DashboardPage() {
    return (
        <div className="flex w-full items-start bg-gray-100_02">
            <Sidebar1 />
            <div className="mt-6 flex flex-1 flex-col gap-4 px-4">
                <div className="mr-4 flex flex-col gap-4 md:mr-0">
                    <Header />
                    <div className="flex md:flex-col">
                        <div className="flex w-[18%] items-center justify-between gap-5 rounded-lg border border-solid border-gray-200 bg-white-a700 p-2 md:w-full">
                            <Text size="texts" as="p">
                                Search
                            </Text>
                            <Img src="img_rewind.svg" width={24} height={24} alt="Rewind Image" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-1 justify-end gap-4 md:flex-col md:self-stretch sm:flex-col sm:gap-2">
                            <Button
                                rightIcon={
                                    <Img src="img_frame_2.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                                }
                                className="min-w-[162px] gap-3.5 rounded"
                            >
                                Calendar view
                            </Button>
                            <Button
                                rightIcon={
                                    <Img src="img_frame_3.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                                }
                                className="min-w-[140px] gap-3.5 rounded"
                            >
                                Automation
                            </Button>
                            <Button
                                rightIcon={
                                    <Img src="img_frame_4.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                                }
                                className="min-w-[92px] gap-3.5 rounded"
                            >
                                Filter
                            </Button>
                            <Button
                                rightIcon={
                                    <Img src="img_frame_5.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                                }
                                className="min-w-[98px] gap-3.5 rounded"
                            >
                                Share
                            </Button>
                            <Button
                                variant="outline"
                                shape="round"
                                color="deep_purple_600_01_indigo_200_border"
                                className="min-w-[136px] gap-2 font-medium"
                                rightIcon={
                                    <Img
                                        src="img_frame_white_a700.svg"
                                        width={24}
                                        height={24}
                                        alt="Frame"
                                        className="h-[24px] w-[24px]"
                                    />
                                }
                            >
                                Create new
                            </Button>
                        </div>
                    </div>
                </div>
                {/* dashboard section */}
                <DashboardSection />
            </div>
        </div>
    );
}

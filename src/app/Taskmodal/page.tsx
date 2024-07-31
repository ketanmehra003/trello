import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Task Modal - Manage Your Tasks Efficiently",
  description:
    "Use the Task Modal to share, favorite, and manage your tasks with ease. Set priorities, deadlines, and add custom properties to stay organized.",
  //ogTitle: '...'
};

export default function TaskModalPage() {
  return <Page />;
}
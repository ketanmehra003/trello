import React from "react";
import { Metadata } from "next";
import Index from "./index";

export const metadata: Metadata = {
  title: "User Dashboard - Manage Your Tasks and Collaborate Efficiently",
  description:
    "Access your personalized dashboard to manage tasks, collaborate with teams, and enhance productivity. Features include"
//ogTitle:'...'
};

export default function DashboardPage() {
  return <Index />;
}

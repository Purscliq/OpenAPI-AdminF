"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import { GoArrowLeft } from "react-icons/go";

const DeveloperDetails = () => {
  const router = useRouter();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Personal Details",
      children: "Personal Details",
    },
    {
      key: "2",
      label: "Business Details",
      children: "Business Details",
    },
    {
      key: "3",
      label: "KYC",
      children: "KYC",
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="flex gap-2 items-center text-[#25324B]">
        <button title="Back" onClick={() => router.back()} className="">
          <GoArrowLeft className="w-[30px] h-[30px]" />
        </button>
        <h2 className="text-base md:text-[24px] font-bold">
          Compliance Details
        </h2>
      </span>

      <div className="bg-white p-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default DeveloperDetails;

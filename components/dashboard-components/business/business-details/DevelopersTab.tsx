"use client";

import React, { useState } from "react";

import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import Whitelist from "./developer-details/Whitelist";
import Webhooks from "./developer-details/Webhooks";
import APIKeys from "./developer-details/APIKeys";

const DevelopersTab = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "API Keys",
      children: <APIKeys />,
    },
    {
      key: "2",
      label: "Webhooks",
      children: <Webhooks />,
    },
    {
      key: "3",
      label: "Whitelist",
      children: <Whitelist />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-4 py-5">
      {/* <h2 className="text-base md:text-[20px] font-semibold">
        Developers Details
      </h2> */}

      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarGutter={5}
        // type="card"
        tabPosition="left"
        centered
      />
    </section>
  );
};

export default DevelopersTab;

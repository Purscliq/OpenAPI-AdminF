import React from "react";
import Profile from "./settings-tab/Profile";
import AdminActivities from "./settings-tab/AdminActivities";
import { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";

const Settings = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profile",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Admin Activity",
      children: <AdminActivities />,
    },
  ];
  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <h2 className="text-[24px] font-bold mb-1">Setting</h2>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>
      <div className=" bg-white p-3">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default Settings;

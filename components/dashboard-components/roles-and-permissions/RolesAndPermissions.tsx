import React from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";

import MembersTab from "./Tabs/MembersTab";
import RolesTab from "./Tabs/RolesTab";
import PermissionsTab from "./Tabs/PermissionsTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Members",
    children: <MembersTab />,
  },
  {
    key: "2",
    label: "Roles",
    children: <RolesTab />,
  },
  {
    key: "3",
    label: "Permissions",
    children: <PermissionsTab />,
  },
];

const RolesAndPermissions = () => {
  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <h2 className="text-[24px] font-bold mb-1">Roles and Permission</h2>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>

      <div className="bg-white px-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default RolesAndPermissions;

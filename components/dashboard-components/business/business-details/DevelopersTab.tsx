"use client";

import React, { useEffect, useState } from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import Whitelist from "./developer-details/Whitelist";
import Webhooks from "./developer-details/Webhooks";
import APIKeys from "./developer-details/APIKeys";
import { useGetBusinessDeveloperKeyQuery } from "@/services/auth/index.service";

const DevelopersTab = () => {
  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    const storedId = sessionStorage.getItem("id");
    setId(storedId);
  }, []);

  const { data: developer, isLoading } = useGetBusinessDeveloperKeyQuery(id, {
    skip: !id,
  });
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "API Keys",
      children: (
        <APIKeys data={developer?.data?.api_keys} loading={isLoading} />
      ),
    },
    {
      key: "2",
      label: "Webhooks",
      children: (
        <Webhooks data={developer?.data?.webhooks} loading={isLoading} />
      ),
    },

    {
      key: "3",
      label: "Whitelist",
      children: <Whitelist data={developer?.data?.whitelist} />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-4 py-5">
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarGutter={5}
        tabPosition="left"
        centered
      />
    </section>
  );
};

export default DevelopersTab;

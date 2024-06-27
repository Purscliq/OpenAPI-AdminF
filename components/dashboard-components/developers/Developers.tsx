"use client";
import { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import APIKeys from "./developers-tab/APIKeys";
import Webhooks from "./developers-tab/Webhooks";
import Whitelist from "./developers-tab/Whitelist";
import {
  useGetDeveloperKeyQuery,
  useGetDeveloperSummaryQuery,
} from "@/services/auth/index.service";

const Developers = () => {
  const { data } = useGetDeveloperSummaryQuery({});
  const { data: developer, isLoading } = useGetDeveloperKeyQuery({});

  const summaryData = data?.data || {
    api_key: { total: 0, pf: 0 },
    whitelist: { total: 0, pf: 0 },
    webhooks: { total: 0, pf: 0 },
  };

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

  const cards = [
    {
      title: "Total API Keys",
      value: summaryData.api_key.total,
      change: summaryData.api_key.pf,
    },
    {
      title: "Total Webhooks",
      value: summaryData.webhooks.total,
      change: summaryData.webhooks.pf,
    },
    {
      title: "Total Whitelist",
      value: summaryData.whitelist.total,
      change: summaryData.whitelist.pf,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <h2 className="text-[24px] font-bold mb-1">Developers</h2>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>

      <div className="w-full py-3 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="rounded-md shadow-sm bg-white p-6 min-w-[360px]"
          >
            <span className="flex flex-col gap-4">
              <p className="text-[14px] md:text-base font-bold text-[#202224]">
                {item.title}
              </p>
              <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
                {item.value}
              </p>
              <p className="text-base font-bold flex gap-2 items-center">
                <span className="text-[#00B69B] flex gap-2 items-center">
                  <HiMiniArrowTrendingUp className="w-5 h-5" /> {item.change}%
                </span>
                Up from yesterday
              </p>
            </span>
          </div>
        ))}
      </div>

      <div className=" bg-white p-3">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default Developers;

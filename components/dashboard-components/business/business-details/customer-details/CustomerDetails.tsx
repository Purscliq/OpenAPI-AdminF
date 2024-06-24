"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import KycTab from "./KYCTab";
import BasicInfoTab from "./BasicInfoTab";
import TransactionsTab from "./TransactionsTab";
import { GoArrowLeft } from "react-icons/go";
import {
  useGetCostomerDetailsQuery,
  useGetCostomerKYCQuery,
} from "@/services/auth/index.service";

const CustomerDetails = () => {
  const router = useRouter();
  const customer_id = sessionStorage.getItem("customer_id");
  const { data: customerDetails, isLoading:isdetails } =
    useGetCostomerDetailsQuery(customer_id);
  const { data: cutomerKyc, isLoading } = useGetCostomerKYCQuery(customer_id);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Basic Info",
      children: (
        <BasicInfoTab data={customerDetails?.data} loading={isdetails} />
      ),
    },
    {
      key: "2",
      label: "KYC",
      children: <KycTab data={cutomerKyc?.data} />,
    },
    {
      key: "3",
      label: "Transactions",
      children: <TransactionsTab  data={customerDetails?.data} />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="flex gap-2 items-center text-[#25324B]">
        <button title="Back" onClick={() => router.back()} className="">
          <GoArrowLeft className="w-[30px] h-[30px]" />
        </button>
        <h2 className="text-base md:text-[24px] font-bold">Customer Details</h2>
      </span>

      <div className="bg-white p-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default CustomerDetails;

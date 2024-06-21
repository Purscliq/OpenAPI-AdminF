"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import { GoArrowLeft } from "react-icons/go";
import AccountDetailsTab from "./AccountDetailsTab";
import SubAccountTab from "./SubAccountTab";
import LoanAccountTab from "./LoanAccountTab";
import { useGetsingleAccountDetailsQuery } from "@/services/auth/index.service";

const AccountDetails = () => {
  const router = useRouter();
  const id = sessionStorage.getItem("account_id");
  const { data: account, isLoading } = useGetsingleAccountDetailsQuery(id);

  const items: TabsProps["items"] = [
    // {
    //   key: "1",
    //   label: "Account Details",
    //   children: <AccountDetailsTab />,
    // },
    {
      key: "1",
      label: "Sub Account",
      children: <SubAccountTab data={account?.data?.sub_accounts || []} />,
    },
    {
      key: "2",
      label: "Loan Account",
      children: <LoanAccountTab data={account?.data?.loan_accounts || []}/>,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <div className="">
        <span className="flex gap-2 items-center text-[#25324B]">
          <button onClick={() => router.back()} title="Back">
            <GoArrowLeft className="w-[30px] h-[30px]" />
          </button>
          <h2 className="text-base md:text-[24px] font-bold">
            Account Details
          </h2>
        </span>
      </div>

      <div className="bg-white p-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default AccountDetails;

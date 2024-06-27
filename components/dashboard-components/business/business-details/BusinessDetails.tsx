"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import { GoArrowLeft } from "react-icons/go";
import CustomersTab from "./CustomersTab";
import DevelopersTab from "./DevelopersTab";
import BusinessDetailsTab from "./BusinessDetailsTab";
import {
  useGetBusinessDeveloperKeyQuery,
  useGetCustomerQuery,
  useGetsingleBusinessDetailsQuery,
} from "@/services/auth/index.service";

const BusinessDetails = () => {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const storedId = sessionStorage.getItem("id");
    setId(storedId);
  }, []);
  const { data: businessDetails, isLoading: isgettingBusiness } =
    useGetsingleBusinessDetailsQuery(id, {
      skip: !id,
    });
  const { data: customers, isLoading: isgettingCustomer } = useGetCustomerQuery(
    id,
    {
      skip: !id,
    }
  );

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Business Details",
      children: <BusinessDetailsTab data={businessDetails?.data} />,
    },
    {
      key: "2",
      label: "Customers",
      children: (
        <CustomersTab data={customers?.data} loading={isgettingCustomer} />
      ),
    },
    {
      key: "3",
      label: "Developers",
      children: <DevelopersTab />,
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
            Business Details
          </h2>
        </span>
      </div>

      <div className="bg-white p-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default BusinessDetails;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import PersonalDetailsTab from "./PersonalDetailsTab";
import BusinessDetailsTab from "./BusinessDetailsTab";
import { GoArrowLeft } from "react-icons/go";
import {
  useGetComplianceDetailsQuery,
  useGetSingleDetailsKYCQuery,
  useGetsingleBusinessDetailsQuery,
} from "@/services/auth/index.service";
import KYCTabs from "./KYCTabs";

const ComplianceDetails = () => {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [isApproved, setIsApproved] = useState(false);
  useEffect(() => {
    const storedId = sessionStorage.getItem("session_id");
    setId(storedId);
  }, []);

  const { data: compliance, isLoading } = useGetComplianceDetailsQuery(id, {
    skip: !id,
  });
  const { data: businessDetails, isLoading: isgettingBusiness } =
    useGetsingleBusinessDetailsQuery(id, {
      skip: !id,
    });
  const { data: KYC } = useGetSingleDetailsKYCQuery(id, {
    skip: !id,
  });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Personal Details",
      children: (
        <PersonalDetailsTab data={compliance?.data} loding={isLoading} />
      ),
    },
    {
      key: "2",
      label: "Business Details",
      children: (
        <BusinessDetailsTab
          data={businessDetails?.data}
          loading={isgettingBusiness}
        />
      ),
    },
    {
      key: "3",
      label: "KYC",
      children: <KYCTabs data={KYC?.data} />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <div className="md:flex space-y-4 md:space-y-0 justify-between">
        <span className="flex gap-2 items-center text-[#25324B]">
          <button title="Back" onClick={() => router.back()} className="">
            <GoArrowLeft className="w-[30px] h-[30px]" />
          </button>
          <h2 className="text-base md:text-[24px] font-bold">
            Compliance Details
          </h2>
        </span>

        <span>
          <p className="text-[14px] text-[#010101]">
            {isApproved ? "Disapprove Compliance" : "Approve Compliance"}
          </p>
          <span className="flex md:justify-end">
            <button
              type="button"
              className="btn btn-ghost hover:bg-transparent p-0"
              onClick={() => setIsApproved(!isApproved)}
            >
              <label
                htmlFor="approve"
                title="Toggle Approval"
                className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
              >
                <input
                  title="Checked"
                  type="checkbox"
                  id="approve"
                  checked={isApproved}
                  onChange={() => setIsApproved(!isApproved)}
                  className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                />

                <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"></span>

                <span
                  className={`absolute inset-0 rounded-full transition ${
                    isApproved ? "bg-red-600" : "bg-green-500"
                  }`}
                ></span>
              </label>
            </button>
          </span>
        </span>
      </div>

      <div className="bg-white p-4">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default ComplianceDetails;

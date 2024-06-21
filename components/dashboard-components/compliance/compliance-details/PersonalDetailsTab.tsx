import { formatDate } from "@/components/helper/dateFormat";
import { Skeleton } from "antd";
import React from "react";

const PersonalDetailsTab = ({ data, loding }: any) => {
  const details = [
    { label: "First Name", value: data?.legal_first_name },
    { label: "Last Name", value: data?.legal_last_name },
    { label: "Gender", value: data?.gender },
    { label: "Date of Birth", value: formatDate(data?.dob) },
    { label: "Nationality", value: data?.nationality },
    { label: "Residential Address", value: data?.address },
  ];

  const additionalDetails = [
    { label: "BVN", value: data?.bvn },
    { label: "Phone", value: data?.phone_number },
    {
      label: "Date Joined",
      value: formatDate(data?.created_at),
    },
  ];

  return (
    <section>
      <div className="py-4 grid md:gap-6 gap-4 md:grid-cols-[70%_30%] grid-cols-1 max-w-[1240px]">
        <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99]">
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
            Details
          </h3>
          {loding ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            details.map((item, index) => (
              <span key={index} className="flex flex-wrap gap-2">
                <p className="text-base font-bold">{item.label}:</p>
                <p className="text-base">{item.value || "N/A"}</p>
              </span>
            ))
          )}
        </div>

        {/* additional details */}
        <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99] h-max">
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
            Additional Details
          </h3>
          {loding ? (
            <Skeleton active paragraph={{ rows: 3 }} />
          ) : (
            additionalDetails.map((item, index) => (
              <span key={index} className="flex flex-col gap-2">
                <p className="text-base font-bold">{item.label}:</p>
                <p className="text-base text-[#7C8493]">
                  {item.value || "N/A"}
                </p>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalDetailsTab;

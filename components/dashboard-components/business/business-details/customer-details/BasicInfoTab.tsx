import React from "react";
import { Skeleton } from "antd";
import { formatDate } from "@/components/helper/dateFormat";

const BasicInfoTab = ({ data, loading }:any) => {
  const details = [
    { label: "First Name", value: data?.firstName },
    { label: "Last Name", value: data?.lastName },
    { label: "Email", value: data?.email },
    { label: "Date of birth", value: formatDate(data?.dob) },
    { label: "Nationality", value: data?.country },
    { label: "Residential Address", value: `${data?.street}` },
    { label: "Country", value: data?.country },
  ];

  const additionalDetails = [
    { label: "BVN", value: data?.bvn },
    { label: "Phone", value: data?.phone },
    { label: "Date Joined", value: formatDate(data?.createdAt) },
  ];

  return (
    <section>
      <div className="py-4 grid md:gap-6 gap-4 md:grid-cols-[70%_30%] grid-cols-1 max-w-[1240px]">
        <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99]">
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
            Details
          </h3>
          {loading ? (
            details.map((_, index) => (
              <div key={index} className="flex flex-wrap gap-2">
                <Skeleton.Input active size="small" style={{ width: 100 }} />
                <Skeleton.Input active size="small" style={{ width: 200 }} />
              </div>
            ))
          ) : (
            details.map((item, index) => (
              <span key={index} className="flex flex-wrap gap-2">
                <p className="text-base font-bold">{item.label}:</p>
                <p className="text-base">{item.value}</p>
              </span>
            ))
          )}
        </div>

        {/* additional details */}
        <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99] h-max">
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
            Additional Details
          </h3>
          {loading ? (
            additionalDetails.map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Skeleton.Input active size="small" style={{ width: 100 }} />
                <Skeleton.Input active size="small" style={{ width: 200 }} />
              </div>
            ))
          ) : (
            additionalDetails.map((item, index) => (
              <span key={index} className="flex flex-col gap-2">
                <p className="text-base font-bold">{item.label}:</p>
                <p className="text-base text-[#7C8493]">{item.value}</p>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BasicInfoTab;

import React from "react";

const BusinessDetailsTab = () => {
  const details = [
    { label: "Business Name", value: "X" },
    { label: "Business Adress", value: "19,Oseni Close Address  " },
    { label: "Business Type", value: "Individual" },
    { label: "TIN", value: "12345678939  " },
    { label: "Country", value: "Nigeria" },
  ];
  const additionalDetails = [
    { label: "BVN", value: "12345678910" },
    { label: "Phone", value: "+44 1245 572 135" },
    { label: "Date Joined", value: "April 2023" },
  ];

  return (
    <section className="py-4 grid md:gap-6 gap-4 md:grid-cols-[70%_30%] grid-cols-1 max-w-[1240px]">
      <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99]">
        <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
          Details
        </h3>
        {details.map((item, index) => (
          <span key={index} className="flex flex-wrap gap-2">
            <p className="text-base font-bold">{item.label}:</p>
            <p className="text-base">{item.value}</p>
          </span>
        ))}
      </div>

      {/* additional details */}
      <div className="border border-[#D6DDEB] p-4 flex flex-col gap-3 text-[#32475C99] h-max">
        <h3 className="text-[18px] md:text-[24px] font-bold text-[#25324B]">
          Additional Details
        </h3>
        {additionalDetails.map((item, index) => (
          <span key={index} className="flex flex-col gap-2">
            <p className="text-base font-bold">{item.label}:</p>
            <p className="text-base text-[#7C8493]">{item.value}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default BusinessDetailsTab;

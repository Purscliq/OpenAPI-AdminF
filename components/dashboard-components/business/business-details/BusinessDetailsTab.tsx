import React from "react";

const BusinessDetailsTab = () => {
  const details = [
    { label: "Business Name", value: "James and sons" },
    { label: "Business Email", value: "James@gmail.com  " },
    { label: "Customers", value: "12  " },
    { label: "Business Type", value: "Business" },
  ];

  return (
    <section className="py-4">
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
    </section>
  );
};

export default BusinessDetailsTab;

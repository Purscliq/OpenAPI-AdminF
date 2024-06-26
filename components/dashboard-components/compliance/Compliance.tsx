import React from "react";
import ComplianceTable from "./ComplianceTable";

const Compliance = () => {
  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <h2 className="text-[24px] font-bold mb-1">Compliance</h2>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>
      <ComplianceTable />
    </section>
  );
};

export default Compliance;

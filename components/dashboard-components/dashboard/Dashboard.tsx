import React from "react";
import Image from "next/image";
import Emoji from "@/assets/png/Happy-Emoji-PNG 1.png";

const Dashboard = () => {
  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <span className="flex gap-2 items-center">
          <h2 className="text-[24px] font-bold mb-1">Dashboard</h2>
          <Image src={Emoji} alt="Emoji" className="w-[24px]" />
        </span>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>
    </section>
  );
};

export default Dashboard;

"use client"
import BusinessTable from "./BusinessTable";
import { BoxIcon, HistoryIcon, PeopleIcon } from "@/assets/svg/AccountsIcons";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { useGetBusinessSummaryQuery } from "@/services/auth/index.service";

const Business = () => {
  const { data, isLoading } = useGetBusinessSummaryQuery({});

  const cards = [
    {
      title: "Total Business",
      value: data?.data?.total_count?.count || "0",
      change: data?.data?.total_count?.pf || "0",
      iconBgColor: "#8280FF",
      icon: <PeopleIcon />,
    },
    {
      title: "Total Active Business",
      value: data?.data?.total_count?.count || "0",
      change: data?.data?.total_count?.pf || "0",
      iconBgColor: "#FF9066",
      icon: <HistoryIcon />,
    },
    {
      title: "Total Inactive Business",
      value: data?.data?.total_count?.count || "0",
      change: data?.data?.total_count?.pf || "0",
      iconBgColor: "#FEC53D",
      icon: <BoxIcon />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 md:h-screen overflow-y-scroll">
      <span className="">
        <h2 className="text-[24px] font-bold mb-1">Business</h2>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>

      <div className="w-full py-3 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item:any, index) => (
          <div
            key={index}
            className="rounded-md shadow-sm bg-white p-6 flex gap-8 justify-between min-w-[360px]"
          >
            <span className="flex flex-col gap-4">
              <p className="text-[14px] md:text-base font-bold text-[#202224]">
                {item.title}
              </p>
              <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
                {item.value}
              </p>
              <p className="text-base font-bold flex gap-2 items-center">
                <span className="text-[#00B69B] flex gap-2 items-center">
                  <HiMiniArrowTrendingUp className="w-5 h-5" /> {item.change}%
                </span>
                Up from yesterday
              </p>
            </span>
            <span
              className="rounded-full flex justify-center items-center w-[60px] h-[60px]"
              style={{ backgroundColor: `${item.iconBgColor}20` }}
            >
              {item.icon}
            </span>
            {/* <span
              className={`bg-[${item.iconBgColor}]/20 rounded-full flex justify-center items-center w-[60px] h-[60px]`}
            >
              {item.icon}
            </span> */}
          </div>
        ))}
      </div>

      <BusinessTable />
    </section>
  );
};

export default Business;

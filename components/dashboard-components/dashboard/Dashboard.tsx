"use client";
import React from "react";
import Image from "next/image";
import Emoji from "@/assets/png/Happy-Emoji-PNG 1.png";
import {
  BoxIcon,
  ChartIcon,
  HistoryIcon,
  MonitorIcon,
  PeopleIcon,
} from "@/assets/svg/AccountsIcons";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { EarningsChart, TransactionsChart } from "./DashboardChart";
import { CalendarIcon } from "../../../assets/svg/AccountsIcons";
import {
  InflowIcon,
  OutflowIcon,
  PendingIcon,
} from "../../../assets/svg/AccountsIcons";
import {
  useGetDashbaordQuery,
  useGetNotificationQuery,
  useGetRecentBusinessQuery,
} from "@/services/auth/index.service";
import { formatDate } from "@/components/helper/dateFormat";
import { Skeleton } from "antd";

const Dashboard = () => {
  const { data } = useGetDashbaordQuery({});
  const { data: notification, isLoading } = useGetNotificationQuery({});
  const { data: business, isLoading: isBusinessloading } =
    useGetRecentBusinessQuery({});

  const cards = [
    {
      title: "Total User",
      value: data?.data?.total_user?.count || "0",
      change: data?.data?.total_user?.pf || "0",
      iconBgColor: "#8280FF",
      icon: <PeopleIcon />,
    },
    {
      title: "Total Collection",
      value: data?.data?.collections?.total || "0",
      change: data?.data?.collections?.pf || "0",
      iconBgColor: "#FF9066",
      icon: <BoxIcon />,
    },
    {
      title: "Total Disbursement",
      value: data?.data?.disbursements?.total || "0",
      change: data?.data?.disbursements?.pf || "0",
      iconBgColor: "#4AD991",
      icon: <ChartIcon />,
    },
    {
      title: "Total Transaction",
      value: data?.data?.all_transactions?.total || "0",
      change: data?.data?.all_transactions?.pf || "0",
      iconBgColor: "#FEC53D",
      icon: <HistoryIcon />,
    },
  ];
  return (
    <section className="max-w-[1640px] flex flex-col gap-6 bg-[#FAFAFA] px-6 py-4 pb-8 md:h-screen overflow-y-scroll">
      <span className="">
        <span className="flex gap-2 items-center">
          <h2 className="text-[24px] font-bold mb-1">Dashboard</h2>
          <Image src={Emoji} alt="Emoji" className="w-[24px]" />
        </span>
        <p className="text-[#262626] text-sm">
          Open the panel and watch your progress and growth in knowledge.
        </p>
      </span>

      <section className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
        {/* Card group 1 */}
        <div className="w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="rounded-md shadow-sm bg-white p-6 flex flex-col gap-5 justify-between lg:max-h-[161px]"
            >
              <span className="flex gap-8 justify-between">
                <span className="space-y-4">
                  <p className="text-[14px] md:text-base font-bold text-[#202224]">
                    {item.title}
                  </p>
                  <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
                    {item.value}
                  </p>
                </span>
                <span
                  className="rounded-full flex justify-center items-center w-[60px] h-[60px]"
                  style={{ backgroundColor: `${item.iconBgColor}20` }}
                >
                  {item.icon}
                </span>
              </span>

              <p className="text-base font-bold flex gap-2 items-center">
                <span className="text-[#00B69B] flex gap-2 items-center">
                  <HiMiniArrowTrendingUp className="w-5 h-5" /> {item.change}%
                </span>
                Up from yesterday
              </p>
            </div>
          ))}
        </div>

        {/* Card group 2 */}
        <div className="flex flex-col gap-6 justify-between md:max-w-[403px]">
          {/* total account and sub account */}
          <div className="rounded-md shadow-sm bg-white p-6 space-y-5">
            <span className="flex gap-3 items-center">
              <span className="bg-[#FDB5281F]/20 rounded-[6px] flex justify-center items-center w-[42px] h-[42px]">
                <MonitorIcon />
              </span>
              <p className="text-base md:text-[20px] font-bold text-[#515B6F]">
                Account
              </p>
            </span>

            <span className="flex gap-4 justify-between">
              {/* total account */}
              <span className="flex flex-col gap-0.5">
                <p className="text-[14px] md:text-base font-bold text-[#32475C99]">
                  Total Account
                </p>
                <p className="text-[18px] md:text-[24px] font-bold text-[#32475CDE]">
                  {data?.data?.account?.count || "0"}{" "}
                </p>
                <p className="text-base font-bold flex gap-2 items-center">
                  <span className="text-[#71DD37] flex gap-2 items-center">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.66666 3.51178V11.5001H7.33333V3.51178L10.9108 7.08928L12.0892 5.91094L6.49999 0.321777L0.910828 5.91094L2.08916 7.08928L5.66666 3.51178Z"
                        fill="#71DD37"
                      />
                    </svg>
                    {data?.data?.account?.pf || "0"}%
                  </span>
                </p>
              </span>

              {/* total sub-account */}
              <span className="flex flex-col gap-0.5">
                <p className="text-[14px] md:text-base font-bold text-[#32475C99]">
                  Total Sub-Account
                </p>
                <p className="text-[18px] md:text-[24px] font-bold text-[#32475CDE]">
                  {data?.data?.sub_account?.count || "0"}{" "}
                </p>
                <p className="text-base font-bold flex gap-2 items-center">
                  <span className="text-[#71DD37] flex gap-2 items-center">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.66666 3.51178V11.5001H7.33333V3.51178L10.9108 7.08928L12.0892 5.91094L6.49999 0.321777L0.910828 5.91094L2.08916 7.08928L5.66666 3.51178Z"
                        fill="#71DD37"
                      />
                    </svg>
                    {data?.data?.sub_account?.pf || "0"}%
                  </span>
                </p>
              </span>
            </span>
          </div>

          {/* card sub groups */}
          <div className="md:flex flex-grow gap-6 justify-between space-y-6 md:space-y-0 full">
            {/* total api calls */}
            <div className="rounded-md shadow-sm bg-white p-4 w-full flex items-center">
              <span className="flex flex-col gap-4">
                <p className="text-[12px] font-bold text-[#1E1B39]">
                  Total API Calls
                </p>
                <span className=" flex gap-2 items-center">
                  <p className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-[#2E2E3A]">
                    {data?.data?.api_calls?.count || "0"}
                  </p>
                  <p className="text-[12px] font-bold text-[#00B69B]">
                    + {data?.data?.api_calls?.pf || "0"}%
                  </p>
                </span>
              </span>
            </div>

            {/* total transfer */}
            <div className="rounded-md shadow-sm bg-white p-4 w-full flex items-center">
              <span className="flex flex-col gap-4">
                <p className="text-[12px] font-bold text-[#1E1B39]">
                  Total Transfer
                </p>
                <span className=" flex gap-2 items-center">
                  <p className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-[#2E2E3A]">
                    {data?.data?.transfers?.total || "0"}{" "}
                  </p>
                  <p className="text-[12px] font-bold text-[#00B69B]">
                    + {data?.data?.transfers?.pf || "0"}%
                  </p>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-md shadow-sm bg-white p-6 space-y-4">
          <span className="">
            <p className="text-[12px] text-[#2E2E3A]">ACCUMULATIONS</p>
            <p className="text-[20px] md:text-[32px] font-bold text-[#2E2E3A]">
              Earning Report
            </p>
          </span>
          <div className="md:flex gap-6 justify-between w-full">
            <div className="space-y-2 md:max-w-[200px]">
              <p className="text-[20px] md:text-[32px] font-bold text-[#2E2E3A]">
                ₦ {data?.data?.earning_report?.total || "0"}{" "}
              </p>
              <div className="flex gap-2">
                <span className="flex gap-2 items-center bg-[#1CA78B] rounded-full px-[10px] py-[2px]">
                  <FaArrowUp className="w-[12px] h-[12px] text-[#F0F4F9]" />
                  <p className="text-[11px] font-medium text-white">
                    {" "}
                    {data?.data?.earning_report?.pf || "0"}%
                  </p>
                </span>
                <p className="text-[11px] font-bold text-[#2E2E3A]">
                  from last 10 days
                </p>
              </div>
              <p className="text-[11px] font-medium text-[#2E2E3A]">
                This is a brief graph of the finance performance within the set
                Timeframe above
              </p>
            </div>

            <div className="w-full">
              {/* max-w-[500px] */}
              <EarningsChart data={data?.data?.earning_report?.chart} />
            </div>
          </div>

          <div className="bg-[#E5F2FF] p-[20px] rounded-[10px] flex gap-6 justify-between">
            {/* TOTAL INFLOW */}
            <div className="space-y-1">
              <span className="flex gap-2 items-center">
                <span className="bg-[#0062FF1A]/10 rounded-full flex justify-center items-center w-[30px] h-[30px]">
                  <InflowIcon />
                </span>
                <p className="text-[10px] text-[#2E2E3A] font-bold">
                  TOTAL INFLOW
                </p>
              </span>
              <span className="flex gap-4 items-center">
                <p className="text-base md:text-[20px] font-bold text-[#2E2E3A]">
                  ₦ {data?.data?.earning_report?.inflow?.total || "0"}{" "}
                </p>
                <p className="text-[#FD4438] text-[15px] font-bold flex gap-1 items-center">
                  <FaArrowDown className="w-[12px] h-[12px] text-[FD4438]" />
                  {data?.data?.earning_report?.inflow?.pf || "0"} %
                </p>
              </span>
              <p className="text-[11px] font-bold">
                <span className="text-[#FD4438]">
                  {data?.data?.earning_report?.inflow?.new || "0"} New
                </span>{" "}
                compared to 7 Days
              </p>
              <div className="bg-[#1CA78B12] w-full h-1 rounded-full">
                <div className="bg-[#1CA78B] w-[60%] h-1 rounded-l-full" />
              </div>
            </div>

            {/* PENDING */}
            <div className="space-y-1">
              <span className="flex gap-2 items-center">
                <span className="bg-[#0062FF1A]/10 rounded-full flex justify-center items-center w-[30px] h-[30px]">
                  <PendingIcon />
                </span>
                <p className="text-[10px] text-[#2E2E3A] font-bold">PENDING</p>
              </span>
              <span className="flex gap-4 items-center">
                <p className="text-base md:text-[20px] font-bold text-[#2E2E3A]">
                  ₦ {data?.data?.earning_report?.pending?.total || "0"}{" "}
                </p>
                <p className="text-[#FD4438] text-[15px] font-bold flex gap-1 items-center">
                  <FaArrowDown className="w-[12px] h-[12px] text-[FD4438]" />
                  {data?.data?.earning_report?.pending?.pf || "0"} %
                </p>
              </span>
              <p className="text-[11px] font-bold">
                <span className="text-[#1CA78B]">
                  {" "}
                  {data?.data?.earning_report?.pending?.new || "0"} New
                </span>{" "}
                compared to 7 Days
              </p>
              <div className="bg-[#FF99001A] w-full h-1 rounded-full">
                <div className="bg-[#FFCF5C] w-[60%] h-1 rounded-l-full" />
              </div>
            </div>

            {/* TOTAL OUTFLOW */}
            <div className="space-y-1">
              <span className="flex gap-2 items-center">
                <span className="bg-[#0062FF1A]/10 rounded-full flex justify-center items-center w-[30px] h-[30px]">
                  <OutflowIcon />
                </span>
                <p className="text-[10px] text-[#2E2E3A] font-bold">
                  TOTAL OUTFLOW
                </p>
              </span>
              <span className="flex gap-4 items-center">
                <p className="text-base md:text-[20px] font-bold text-[#2E2E3A]">
                  ₦ {data?.data?.earning_report?.outflow?.total || "0"}{" "}
                </p>
                <p className="text-[#FD4438] text-[15px] font-bold flex gap-1 items-center">
                  <FaArrowDown className="w-[12px] h-[12px] text-[FD4438]" />
                  {data?.data?.earning_report?.outflow?.pf || "0"} %
                </p>
              </span>
              <p className="text-[11px] font-bold">
                <span className="text-[#1CA78B]">
                  {" "}
                  {data?.data?.earning_report?.outflow?.new || "0"} % New
                </span>{" "}
                compared to 7 Days
              </p>
              <div className="bg-[#0062FF1A] w-full h-1 rounded-full">
                <div className="bg-[#0062FF] w-[60%] h-1 rounded-l-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="rounded-md shadow-sm bg-white p-6 flex flex-col gap-6 md:max-w-[403px]">
          <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
            Transaction History
          </p>

          {/* <div className="bg-[#0062FF1A] w-full h-20" /> */}
          <TransactionsChart />

          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-6 justify-between">
              <span className="flex flex-col gap-2">
                <p className="text-[15px] font-bold text-[#2E2E3A]">
                  029830192
                </p>
                <span className="flex gap-2">
                  <p className="text-[12px] text-black">22/2/2022</p>
                  <p className="text-[12px] text-black">3:45:01 PM</p>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[#1CA78B] text-[11px] bg-[#1CA78B0D] px-[10px] rounded-[4px]">
                  Successful
                </p>
                <p className="text-[15px] font-bold text-[#2E2E3A]">+ ₦350</p>
              </span>
            </div>
            <hr className="border border-dashed" />
            <div className="flex gap-6 justify-between">
              <span className="flex flex-col gap-2">
                <p className="text-[15px] font-bold text-[#2E2E3A]">
                  029830192
                </p>
                <span className="flex gap-2">
                  <p className="text-[12px] text-black">22/2/2022</p>
                  <p className="text-[12px] text-black">3:45:01 PM</p>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[#1CA78B] text-[11px] bg-[#1CA78B0D] px-[10px] rounded-[4px]">
                  Successful
                </p>
                <p className="text-[15px] font-bold text-[#2E2E3A]">+ ₦350</p>
              </span>
            </div>
            <hr className="border border-dashed" />
            <div className="flex gap-6 justify-between">
              <span className="flex flex-col gap-2">
                <p className="text-[15px] font-bold text-[#2E2E3A]">
                  029830192
                </p>
                <span className="flex gap-2">
                  <p className="text-[12px] text-black">22/2/2022</p>
                  <p className="text-[12px] text-black">3:45:01 PM</p>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[#1CA78B] text-[11px] bg-[#1CA78B0D] px-[10px] rounded-[4px]">
                  Successful
                </p>
                <p className="text-[15px] font-bold text-[#2E2E3A]">+ ₦350</p>
              </span>
            </div>
            <hr className="border border-dashed" />
            <div className="flex gap-6 justify-between">
              <span className="flex flex-col gap-2">
                <p className="text-[15px] font-bold text-[#2E2E3A]">
                  029830192
                </p>
                <span className="flex gap-2">
                  <p className="text-[12px] text-black">22/2/2022</p>
                  <p className="text-[12px] text-black">3:45:01 PM</p>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[#1CA78B] text-[11px] bg-[#1CA78B0D] px-[10px] rounded-[4px]">
                  Successful
                </p>
                <p className="text-[15px] font-bold text-[#2E2E3A]">+ ₦350</p>
              </span>
            </div>
          </div>
        </div>

        {/* Business */}
        <div className="rounded-md shadow-sm bg-white p-6 flex flex-col gap-6">
          <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
            Business
          </p>

          {/* items */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 divide-dashed bg-white text-[12px] text-black font-bold">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3">Business Name</th>
                  <th className="whitespace-nowrap px-4 py-3">Email</th>
                  <th className="whitespace-nowrap px-4 py-3">Phone Number</th>
                  <th className="whitespace-nowrap px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 divide-dashed text-[#2E2E3A] font-normal">
                {business?.data.map((business: any, index: any) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-bold text-base text-black">
                      {business.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-[#2E2E3A]">
                      {business.support_email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {business.support_phone}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <p className="text-[#1CA78B] text-[12px] bg-[#1CA78B0D] px-[10px] py-[4px] rounded-[4px] w-max">
                        {business.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notification */}
        <div className="rounded-md shadow-sm bg-white p-6 flex flex-col gap-6 md:max-w-[403px]">
          <p className="text-[18px] md:text-[24px] font-bold text-[#202224]">
            Notification
          </p>

          {/* items */}
          <div>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <Skeleton active />
              </div>
            ) : notification?.data.length > 0 ? (
              notification.data.map((x: any, index: any) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex gap-6 justify-between">
                    <span className="flex flex-col gap-2">
                      <p className="text-base font-bold text-[#2E2E3A]">
                        {x.title}
                      </p>
                      <p className="text-base font-medium text-[#2E2E3A]">
                        {x.description}
                      </p>
                      <span className="flex gap-2 text-[#666666] text-[12px] font-bold items-center">
                        <CalendarIcon />
                        <p>{formatDate(x.created_at)}</p>
                      </span>
                    </span>
                    <span>
                      <p className="text-[#18965A] text-[14px] bg-[#18965A33] px-[10px] py-[5px] rounded-[5px] font-bold">
                        {x.notification_type}
                      </p>
                    </span>
                  </div>
                  <hr className="border border-dashed" />
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <p className="text-base font-medium text-[#2E2E3A] mt-4">
                  No Notifications
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;

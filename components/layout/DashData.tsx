import { MenuProps } from "antd";
import Link from "next/link";
import DashboardIcon from "@/assets/svg/DashboardIcon";

export const sidebarData1: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "dashboard",
  },
  {
    label: <Link href="/compliance">Compliance</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "compliance",
  },
  {
    label: <Link href="/account">Account</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "account",
  },
  {
    label: <Link href="/business">Business</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "business",
  },
  {
    label: <Link href="/transactions">Transactions</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "transactions",
  },
  {
    label: <Link href="/developers">Developers</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "developers",
  },
  {
    label: <Link href="/roles-and-permissions">Roles and permissions</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "roles-and-permissions",
  },
  {
    label: <Link href="/settings">Settings</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "settings",
  },
];
export const sidebarData2: MenuProps["items"] = [
  {
    label: <Link href="/">Log Out</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "logout",
  },
];
export const activeKeys = [
  "dashboard",
  "compliance",
  "account",
  "business",
  "transactions",
  "developers",
  "roles-and-permissions",
  "settings",
];

import { MenuProps } from "antd";
import Link from "next/link";
import DashboardIcon from "@/assets/svg/DashboardIcon";
import ComplianceIcon from "@/assets/svg/ComplianceIcon";
import BusinessIcon from "@/assets/svg/BusinessIcon";
import TransactionsIcon from "@/assets/svg/TransactionsIcon";
import RolesIcon from "@/assets/svg/RolesIcon";
import SettingsIcon from "@/assets/svg/SettingsIcon";
import LogOutIcon from "@/assets/svg/LogOutIcon";
import { logout } from "../helper/Authh";

export const sidebarData1: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <DashboardIcon className=" font-bold text-[#7C8493] w-4 h-4" />,
    key: "dashboard",
  },
  {
    label: <Link href="/compliance">Compliance</Link>,
    icon: <ComplianceIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "compliance",
  },
  {
    label: <Link href="/account">Account</Link>,
    icon: <ComplianceIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "account",
  },
  {
    label: <Link href="/business">Business</Link>,
    icon: <BusinessIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "business",
  },
  {
    label: <Link href="/transactions">Transactions</Link>,
    icon: <TransactionsIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "transactions",
  },
  {
    label: <Link href="/developers">Developers</Link>,
    icon: <RolesIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "developers",
  },
  {
    label: <Link href="/roles-and-permissions">Roles and permissions</Link>,
    icon: <RolesIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "roles-and-permissions",
  },
  {
    label: <Link href="/settings">Settings</Link>,
    icon: <SettingsIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "settings",
  },
];
export const sidebarData2: MenuProps["items"] = [
  {
    label: <Link href="/">Log Out</Link>,
    icon: <LogOutIcon className=" font-bold text-[#7C8493] w-5 h-5" />,
    key: "logout",
    onClick: logout,
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

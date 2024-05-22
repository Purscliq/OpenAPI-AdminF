"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import { Dropdown } from "antd";
import type { TableColumnsType, MenuProps } from "antd";
import FilterIcon from "@/assets/svg/FilterIcon";
import Link from "next/link";

interface DataType {
  key: React.Key;
  bankName: string;
  accountName: string;
  accountNumber: number;
  alias: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/account/details">View details</Link>,
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Bank Name",
    dataIndex: "bankName",
    sorter: true,
  },
  {
    title: "Account Name",
    dataIndex: "accountName",
    sorter: true,
  },
  {
    title: "Account Number",
    dataIndex: "accountNumber",
    sorter: true,
  },
  {
    title: "Alias",
    dataIndex: "alias",
    sorter: true,
  },

  {
    title: (
      <span className="flex items-center">
        <p>Action</p>
      </span>
    ),
    dataIndex: "id",
    render: (_: any, _record: DataType) => (
      <Dropdown menu={{ items }} placement="bottomRight">
        <button type="button" className="text-lg font-semibold">
          ...
        </button>
      </Dropdown>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    bankName: "Providus Bank",
    accountName: "Williams Temitope",
    accountNumber: 123456789,
    alias: "Main Account",
  },
  {
    key: "2",
    bankName: "Providus Bank",
    accountName: "Williams Temitope",
    accountNumber: 123456789,
    alias: "Main Account",
  },
  {
    key: "3",
    bankName: "Providus Bank",
    accountName: "Williams Temitope",
    accountNumber: 123456789,
    alias: "Main Account",
  },
  {
    key: "4",
    bankName: "Providus Bank",
    accountName: "Williams Temitope",
    accountNumber: 123456789,
    alias: "Main Account",
  },
  {
    key: "5",
    bankName: "Providus Bank",
    accountName: "Williams Temitope",
    accountNumber: 123456789,
    alias: "Main Account",
  },
];

const AccountTable = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      <div className="flex gap-8 justify-between items-center">
        <p className="font-bold text-base">Account List</p>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default AccountTable;

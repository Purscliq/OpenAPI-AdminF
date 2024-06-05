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
  businessName: string;
  businessEmail: string;
  customers: number;
  businessType: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/business/details">View details</Link>,
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Business Name",
    dataIndex: "businessName",
    sorter: true,
  },
  {
    title: "Business Email",
    dataIndex: "businessEmail",
    sorter: true,
  },
  {
    title: "Customers",
    dataIndex: "customers",
    sorter: true,
  },
  {
    title: "Business Type",
    dataIndex: "businessType",
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
    businessName: "Chike and Sons",
    businessEmail: "temitopedml@gmail.com",
    customers: 12,
    businessType: "Personal",
  },
  {
    key: "2",
    businessName: "Chike and Sons",
    businessEmail: "temitopedml@gmail.com",
    customers: 12,
    businessType: "Business",
  },
  {
    key: "3",
    businessName: "Chike and Sons",
    businessEmail: "temitopedml@gmail.com",
    customers: 12,
    businessType: "Personal",
  },
  {
    key: "4",
    businessName: "Chike and Sons",
    businessEmail: "temitopedml@gmail.com",
    customers: 12,
    businessType: "Business",
  },
  {
    key: "5",
    businessName: "Chike and Sons",
    businessEmail: "temitopedml@gmail.com",
    customers: 12,
    businessType: "Personal",
  },
];

const BusinessTable = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      <div className="flex gap-8 justify-between items-center">
        <p className="font-bold text-base">Business List</p>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default BusinessTable;

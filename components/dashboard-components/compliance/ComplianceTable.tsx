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
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/compliance/details">View details</Link>,
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "First Name",
    dataIndex: "firstName",
    sorter: true,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: true,
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
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
    firstName: "Temitope",
    lastName: "Williams",
    email: "temitopedml@gmail.com",
    phone: 80164636619,
  },
  {
    key: "2",
    firstName: "Temitope",
    lastName: "Williams",
    email: "temitopedml@gmail.com",
    phone: 80164636619,
  },
  {
    key: "3",
    firstName: "Temitope",
    lastName: "Williams",
    email: "temitopedml@gmail.com",
    phone: 80164636619,
  },
  {
    key: "4",
    firstName: "Temitope",
    lastName: "Williams",
    email: "temitopedml@gmail.com",
    phone: 80164636619,
  },
  {
    key: "5",
    firstName: "Temitope",
    lastName: "Williams",
    email: "temitopedml@gmail.com",
    phone: 80164636619,
  },
];

const ComplianceTable = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      <div className="flex justify-end">
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default ComplianceTable;

"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import { Dropdown } from "antd";
import type { TableColumnsType, MenuProps } from "antd";
import FilterIcon from "@/assets/svg/FilterIcon";
import Link from "next/link";
import { useGetComplianceQuery } from "@/services/auth/index.service";

interface DataType {
  key: React.Key;
  business_id: number;
  first_name: string;
  last_name: string;
  business_name: string;
  email: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/compliance/details">View details</Link>,
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Business Name",
    dataIndex: "business_name",
    sorter: true,
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    sorter: true,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
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

const ComplianceTable = () => {
  const { data: compliance, isLoading } = useGetComplianceQuery({});

  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      {/* <div className="md:flex space-y-4 md:space-y-0 gap-8 justify-between">
        <span className="flex gap-4">
          <Select
            placeholder="Business Name"
            // style={{ width: 120 }}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
          <Select
            placeholder="Name"
            // style={{ width: 120 }}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
          <Select
            placeholder="Email"
            // style={{ width: 120 }}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
        </span>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div> */}

      <Table
        columns={columns}
        dataSource={compliance?.data}
        loading={isLoading}
      />
    </section>
  );
};

export default ComplianceTable;

"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import type { TableColumnsType } from "antd";
import FilterIcon from "@/assets/svg/FilterIcon";

interface DataType {
  key: React.Key;
  id: number;
  accountName: string;
  currentBalance: string;
  date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Account Name",
    dataIndex: "accountName",
    sorter: true,
  },
  {
    title: "Sub-Account Id",
    dataIndex: "id",
    sorter: true,
  },
  {
    title: "Current Balance",
    dataIndex: "currentBalance",
    sorter: true,
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: true,
  },
];

const SubAccountTab = ({ data }: any) => {
  return (
    <section className="max-w-[1640px] overflow-x-scroll bg-white py-6 rounded-lg space-y-4">
      <div className="flex gap-8 justify-between items-center">
        <p className="font-bold text-base">Sub Account</p>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data || []} />
    </section>
  );
};

export default SubAccountTab;

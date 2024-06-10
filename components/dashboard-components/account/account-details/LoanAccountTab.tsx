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
  accountName: string;
  id: number;
  balance: string;
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
    dataIndex: "balance",
    sorter: true,
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: true,
  },
];

const data: DataType[] = [
  {
    key: "1",
    accountName: "Williams Temitope",
    id: 123456789,
    balance: "NGN 1.00",
    date: "22-04-24",
  },
  {
    key: "2",
    accountName: "Williams Temitope",
    id: 123456789,
    balance: "NGN 2.00",
    date: "22-04-24",
  },
];

const LoanAccountTab = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white py-3 rounded-lg space-y-4">
      <div className="flex gap-8 justify-between items-center">
        <p className="font-bold text-base">Loan Account</p>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default LoanAccountTab;

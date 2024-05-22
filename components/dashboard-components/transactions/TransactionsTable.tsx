"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import type { TableColumnsType } from "antd";
import { DatePicker } from "antd";
import FilterIcon from "@/assets/svg/FilterIcon";

const { RangePicker } = DatePicker;

interface DataType {
  key: React.Key;
  date: string;
  accountName: string;
  bankName: string;
  accountNumber: number;
  amount: string;
  status: string;
}

const statusClasses: { [key: string]: string } = {
  Success: "text-[#1AD48D] bg-[#1AD48D1A]",
  Pending: "text-[#FFD03A] bg-[#FFD03A1A]",
  Failed: "text-[#F6513B] bg-[#F6513B1A]",
};

const columns: TableColumnsType<DataType> = [
  {
    title: "Date",
    dataIndex: "date",
    sorter: true,
  },
  {
    title: "Account Name",
    dataIndex: "accountName",
    sorter: true,
  },
  {
    title: "Bank Name",
    dataIndex: "bankName",
    sorter: true,
  },
  {
    title: "Account Number",
    dataIndex: "accountNumber",
    sorter: true,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: true,
  },

  {
    title: (
      <span className="flex items-center">
        <p>Status</p>
      </span>
    ),
    dataIndex: "status",
    sorter: true,
    render: (_: any, record: DataType) => {
      const statusClass = statusClasses[record.status] || "text-gray-500";
      return (
        <span className={`text-[14px] p-2 rounded-full ${statusClass}`}>
          {record.status}
        </span>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    date: "13 July, 2021",
    accountName: "Samuel woodfree",
    bankName: "UBA",
    accountNumber: 123456789,
    amount: "N44,345.00",
    status: "Success",
  },
  {
    key: "2",
    date: "13 July, 2021",
    accountName: "Samuel woodfree",
    bankName: "UBA",
    accountNumber: 123456789,
    amount: "N44,345.00",
    status: "Pending",
  },
  {
    key: "1",
    date: "13 July, 2021",
    accountName: "Samuel woodfree",
    bankName: "UBA",
    accountNumber: 123456789,
    amount: "N44,345.00",
    status: "Failed",
  },
];

const TransactionsTable = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      <p className="font-bold text-base">Transaction History</p>
      <div className="flex gap-8 justify-between items-center">
        <span className="flex gap-4">
          <RangePicker />
          <Select
            placeholder="Amount"
            // defaultValue=""
            style={{ width: 120 }}
            options={[
              { value: "Amount1", label: "Amount" },
              { value: "Amount2", label: "Amount2" },
              { value: "Amount3", label: "Amount3" },
            ]}
          />
        </span>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default TransactionsTable;

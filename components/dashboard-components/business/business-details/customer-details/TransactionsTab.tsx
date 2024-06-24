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
  id: string;
  name: string;
  currency: string;
  amount: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Created On",
    dataIndex: "date",
    sorter: true,
  },
  {
    title: "Transaction ID",
    dataIndex: "id",
    sorter: true,
  },
  {
    title: "Customer",
    dataIndex: "name",
    sorter: true,
  },
  {
    title: "Currency",
    dataIndex: "currency",
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
        <p>Action</p>
      </span>
    ),
    dataIndex: "id",
    render: (_: any, _record: DataType) => (
      <button type="button" className="text-lg font-semibold">
        ...
      </button>
    ),
  },
];



const TransactionsTab = ({data}:any) => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white py-3 rounded-lg space-y-4">
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

      <Table columns={columns} dataSource={data?.transactions} />
    </section>
  );
};

export default TransactionsTab;

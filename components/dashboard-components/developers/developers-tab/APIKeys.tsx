"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import type { TableColumnsType } from "antd";
import DeleteIcon from "@/assets/svg/DeleteIcon";

interface DataType {
  key: React.Key;
  name: string;
  sourceIP: string;
  expiry: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
  },
  {
    title: "Source IP",
    dataIndex: "sourceIP",
    sorter: true,
  },
  {
    title: "Expiry Date",
    dataIndex: "expiry",
    sorter: true,
  },

  {
    title: (
      <></>
      //   <span className="flex items-center">
      //     <p>Action</p>
      //   </span>
    ),
    dataIndex: "id",
    render: (_: any, _record: DataType) => (
      <button type="button" className="text-lg font-semibold" title="Delete">
        <DeleteIcon />
      </button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "SUDO_API_KEY",
    sourceIP: "N/A",
    expiry: "July 25, 2024. 10:05 PM",
  },
  {
    key: "2",
    name: "SUDO_API_KEY",
    sourceIP: "N/A",
    expiry: "July 25, 2024. 10:05 PM",
  },
];

const APIKeys = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip py-4 px-2 space-y-4">
      <p className="font-bold text-base">2 API Key(s)</p>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default APIKeys;

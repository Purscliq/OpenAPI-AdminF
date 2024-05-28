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
  url: string;
  contentType: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
  },
  {
    title: "URL",
    dataIndex: "url",
    sorter: true,
  },
  {
    title: "Content Type",
    dataIndex: "contentType",
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
      <span className="flex gap-4 items-center">
        <button
          type="button"
          title="Activate"
          className="btn btn-ghost hover:bg-transparent p-0"
        >
          <label
            htmlFor="activate"
            className="relative h-6 w-8 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
          >
            <input type="checkbox" id="activate" className="peer sr-only" />

            <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

            <span className="absolute inset-y-0 start-0 m-auto size-4 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
              <span className="absolute inset-0 m-auto size-2 rounded-full bg-gray-200 transition">
                {" "}
              </span>
            </span>
          </label>
        </button>
        <p className="font-semibold">Active</p>
        <button type="button" title="Delete">
          <DeleteIcon />
        </button>
      </span>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Default",
    url: "https://webhook.site/5d192591",
    contentType: "JSON",
  },
];

const Webhooks = () => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip py-4 px-2 space-y-4">
      <p className="font-bold text-base">1 Webhook(s)</p>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default Webhooks;

"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import { message, type TableColumnsType } from "antd";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import { useDeleteApikeyMutation } from "@/services/auth/index.service";

interface DataType {
  key: React.Key;
  name: string;
  service_id: string;
  expiry: string;
  id: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
  },
  {
    title: "Service ID ",
    dataIndex: "service_id",
    sorter: true,
  },
  {
    title: "Expiry Date",
    dataIndex: "expiry",
    sorter: true,
  },
  {
    title: "",
    dataIndex: "id",
    render: (id: number, _record: DataType) => (
      <DeleteButton id={id} />
    ),
  },
];

const DeleteButton = ({ id }: { id: number }) => {
  const [deleteApikey, { isLoading }] = useDeleteApikeyMutation({});

  const handleDelete = async () => {
    try {
      await deleteApikey(id).unwrap();
    } catch (error) {
      console.error("Failed to delete API key:", error);
    }
  };

  return (
    <button
      type="button"
      className="text-lg font-semibold"
      title="Delete"
      onClick={handleDelete}
      disabled={isLoading}
    >
      <DeleteIcon />
    </button>
  );
};

const APIKeys = ({ data, loading }: { data: DataType[], loading: boolean }) => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip py-4 px-2 space-y-4">
      <p className="font-bold text-base">{data?.length} API Key(s)</p>
      <Table columns={columns} dataSource={data} loading={loading} />
    </section>
  );
};

export default APIKeys;

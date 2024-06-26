"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import type { TableColumnsType } from "antd";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import {
  useActivateIPMutation,
  useDeleteIPMutation,
} from "@/services/auth/index.service";

interface DataType {
  key: React.Key;
  IP: string;
  is_active: boolean;
}
const DeleteButton = ({ id }: { id: number }) => {
  const [deleteWebhook, { isLoading }] = useDeleteIPMutation({});

  const handleDelete = async () => {
    try {
      await deleteWebhook(id).unwrap();
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

const ActivateButton = ({
  id,
  isActive,
}: {
  id: number;
  isActive: boolean;
}) => {
  const [activateIP, { isLoading: isActivating }] = useActivateIPMutation();
  const [deactivateIP, { isLoading: isDeactivating }] = useDeleteIPMutation();

  const handleToggle = async () => {
    try {
      if (isActive) {
        await deactivateIP(id).unwrap();
      } else {
        await activateIP(id).unwrap();
      }
    } catch (error) {
      console.error(
        `Failed to ${isActive ? "deactivate" : "activate"} webhook:`,
        error
      );
    }
  };

  return (
    <button
      type="button"
      title={isActive ? "Deactivate" : "Activate"}
      className="btn btn-ghost hover:bg-transparent p-0"
      onClick={handleToggle}
      disabled={isActivating || isDeactivating}
    >
      <label
        htmlFor={`toggle-${id}`}
        className="relative h-6 w-8 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
      >
        <input
          type="checkbox"
          id={`toggle-${id}-${Math.random()}`}
          className="peer sr-only"
          checked={isActive}
          readOnly
        />
        <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
        <span className="absolute inset-y-0 start-0 m-auto size-4 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
          <span className="absolute inset-0 m-auto size-2 rounded-full bg-gray-200 transition"></span>
        </span>
      </label>
    </button>
  );
};
const columns: TableColumnsType<DataType> = [
  {
    title: "IP",
    dataIndex: "ipv4",
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
    render: (id: any, _record: DataType) => (
      <span className="flex gap-6 items-center">
        <ActivateButton id={id} isActive={_record.is_active} />{" "}
        <p>Activate</p>
        <DeleteButton id={id} />
      </span>
    ),
  },
];

const Whitelist = ({ data }: any) => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip py-4 px-2 space-y-4">
      <p className="font-bold text-base">{data?.length} Whitelist(s)</p>

      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default Whitelist;

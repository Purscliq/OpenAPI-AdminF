"use client";

import React from "react";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import type { TableColumnsType } from "antd";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import {
  useActivateWebhookMutation,
  useDeactivateWebhookMutation,
  useDeleteWebHookeyMutation,
} from "@/services/auth/index.service";

interface DataType {
  key: React.Key;
  name: string;
  url: string;
  contentType: string;
  is_active: boolean;
}

const DeleteButton = ({ id }: { id: number }) => {
  const [deleteWebhook, { isLoading }] = useDeleteWebHookeyMutation();

  const handleDelete = async () => {
    try {
      await deleteWebhook(id).unwrap();
    } catch (error) {
      console.error("Failed to delete webhook:", error);
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
  const [activateWebhook, { isLoading: isActivating }] =
    useActivateWebhookMutation();
  const [deactivateWebhook, { isLoading: isDeactivating }] =
    useDeactivateWebhookMutation();

  const handleToggle = async () => {
    try {
      if (isActive) {
        await deactivateWebhook(id).unwrap();
      } else {
        await activateWebhook(id).unwrap();
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
    title: <></>,
    dataIndex: "id",
    render: (id: any, _record: DataType) => (
      <span className="flex gap-4 items-center">
        <ActivateButton id={id} isActive={_record.is_active} />{" "}
        <DeleteButton id={id} />
      </span>
    ),
  },
];

const Webhooks = ({ data }: { data: DataType[] }) => {
  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip py-4 px-2 space-y-4">
      <p className="font-bold text-base">{data?.length} Webhook(s)</p>
      <Table columns={columns} dataSource={data} />
    </section>
  );
};

export default Webhooks;

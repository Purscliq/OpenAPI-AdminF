import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import { Dropdown } from "antd";
import type { TableColumnsType, MenuProps } from "antd";
import FilterIcon from "@/assets/svg/FilterIcon";
import Link from "next/link";
import { useGetAlAccountQuery } from "@/services/auth/index.service";

interface DataType {
  id: number;
  bank_name: string;
  account_name: string;
  account_number: number;
  account_type: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/account/details">View details</Link>,
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Bank Name",
    dataIndex: "bank_name",
    sorter: true,
  },
  {
    title: "Account Name",
    dataIndex: "account_name",
    sorter: true,
  },
  {
    title: "Account Number",
    dataIndex: "account_number",
    sorter: true,
  },
  {
    title: "Account Type",
    dataIndex: "account_type",
    sorter: true,
  },

  {
    title: (
      <span className="flex items-center">
        <p>Action</p>
      </span>
    ),
    dataIndex: "id",
    render: (id: any, _record: DataType) => (
      <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
        <button
          type="button"
          className="text-lg font-semibold"
          onClick={() => sessionStorage.setItem("account_id", id)}
        >
          ...
        </button>
      </Dropdown>
    ),
  },
];

const AccountTable = () => {
  const { data: account, isLoading } = useGetAlAccountQuery({});

  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white p-6 rounded-lg space-y-4">
      <div className="flex gap-8 justify-between items-center">
        <p className="font-bold text-base">Account List</p>
        <Button className="flex gap-2 items-center !border border-[#B8C9C9] rounded-md px-3 py-2">
          <FilterIcon className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={account?.data}
        loading={isLoading}
        pagination={{ pageSize: 5 }}
      />
    </section>
  );
};

export default AccountTable;

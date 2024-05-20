"use client";
import { useEffect, useState } from "react";
import {
  CustomTable as Table,
  CustomDatePicker as DatePicker,
  CustomInput as Input,
} from "@/lib/AntdComponents";
import FilterIcon from "@/assets/svg/FilterIcon";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { HiMiniChevronUpDown } from "react-icons/hi2";

interface DataType {
  name: string;
  date: string;
  purpose: string;
  type: string;
  amount: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Date",
    sorter: true,
    dataIndex: "date",
    render: (date) => `${date}`,
  },
  {
    title: "Full Name",
    sorter: true,
    dataIndex: "name",
    render: (name) => `${name}`,
  },
  {
    title: "Purpose",
    sorter: true,
    dataIndex: "purpose",
    render: (purpose) => `${purpose}`,
  },
  {
    title: "type",
    sorter: true,
    dataIndex: "type",
    render: (type) =>
      type === "Credit" ? (
        <span className="p-[4%] w-full rounded-[80px] bg-[#FF39561A]/[10%] text-[#FF3956] text-center text-[14px] font-[600]">
          {type}
        </span>
      ) : (
        <span className="p-[4%] w-full rounded-[80px] bg-[#0AA07B]/[10%] text-[#0AA07B] text-center text-[14px] font-[600]">
          {type}
        </span>
      ),
  },
  {
    title: "Amount",
    sorter: true,
    dataIndex: "amount",
    render: (amount) => `${amount}`,
  },
  {
    title: (
      <span className="flex items-center">
        <p>Action</p>
        <HiMiniChevronUpDown className="h-4 w-4 ml-4" />
      </span>
    ),
    sorter: true,
    dataIndex: "_id",
    render: (id) => `...`,
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const DashboardTable = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(`https://testapi.io/api/sikiru/purscliq-transaction`)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="bg-white flex flex-col gap-[1rem] p-[2%]">
      <h4 className="text-[#515B6F] text-[19px] font-[600]">Transaction</h4>
      <div className="flex items-center justify-start w-full gap-[1rem]">
        <DatePicker className="h-fit w-fit" placeholder="Start Date" />
        <DatePicker className="h-fit w-fit" placeholder="End Date" />
        <div className="w-fit">
          <Input className="h-fit w-fit" placeholder="Amount" />
        </div>
        <div className="flex justify-end w-full cursor-pointer">
          <span className="flex items-center rounded-[5px] border border-[#B8C9C9] p-[1%] justify-self-end self-end">
            <FilterIcon />
            <p className="text-[#202430] text-[16px] font-[500]">filter</p>
          </span>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <Table
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default DashboardTable;

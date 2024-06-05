"use client";
import { useState } from "react";
import {
  CustomTable as Table,
  // CustomInput as Input,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import AddMembersModal from "../AddMembersModal";

interface DataType {
  id: number;
  fullName: string;
  roles: string;
  lastActive: string;
  status: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

export const MembersTabData = [
  {
    id: 1,
    fullName: "Tope Hope",
    roles: "Operation Manager",
    lastActive: "24,July 2024",
    status: "Active",
  },
  {
    id: 2,
    fullName: "Tope Hope",
    roles: "Operation Manager",
    lastActive: "24,July 2024",
    status: "Active",
  },
  {
    id: 3,
    fullName: "Tope Hope",
    roles: "Operation Manager",
    lastActive: "24,July 2024",
    status: "Active",
  },
  {
    id: 4,
    fullName: "Tope Hope",
    roles: "Operation Manager",
    lastActive: "24,July 2024",
    status: "Active",
  },
];

const MembersTab = () => {
  const [RolesAndPermissionsData, setRolesAndPermissionsData] =
    useState<DataType[]>(MembersTabData);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      sorter: false,
      dataIndex: "id",
      render: (id) => `${id}`,
      width: "5%",
    },
    {
      title: "Full Name",
      sorter: true,
      dataIndex: "fullName",
      //   render: (fullName) => `${fullName}`,
      render: () => (
        <span className="flex flex-col gap-2">
          <p className="text-[#25324B]  text-base">Tope Hope</p>
          <p className="text-[#555F7E] text-sm">yourmail@Gox.com</p>
        </span>
      ),
      width: "20%",
    },
    {
      title: "Roles",
      sorter: true,
      dataIndex: "roles",
      render: (roles) => `${roles}`,
      width: "20%",
    },

    {
      title: "Last Active",
      sorter: true,
      dataIndex: "lastActive",
      render: (lastActive) => `${lastActive}`,
      width: "20%",
    },
    {
      title: "Status",
      sorter: true,
      dataIndex: "status",
      // render: (status) => `${status}`,
      render: () => (
        <p className="text-black bg-[#2AD0621A] rounded-[5rem] py-[0.375rem] px-[0.625rem] w-max text-sm">
          Active
        </p>
      ),
      width: "20%",
    },
    {
      title: <span className=""></span>,
      render: () => (
        <button type="button">
          <p className="btn text-sm rounded-none normal-case text-[#8F9197] bg-white border border-[#CCCCF5] hover:text-black hover:border hover:border-black hover:bg-white/90 font-bold">
            <FiEdit className="w-4 h-4" />
            Change role
          </p>
        </button>
      ),
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setRolesAndPermissionsData([]);
    }
  };
  return (
    <div className="">
      <div className="w-full md:max-h-24 md:flex justify-between md:px-4 py-6 bg-white">
        <span>
          <h1 className="text-[20px] text-[#25324B] py-2">50 Members</h1>
        </span>
        <div className="md:flex space-y-2 md:space-y-0 gap-2">
          <div className="relative w-full md:w-[19rem]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input
              type="text"
              placeholder="Search Members"
              className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
            />
          </div>

          <div className="flex gap-4 items-center">
            <button className="p-3 rounded-[0.25rem] border border-[#D6DDEB]">
              <LuListFilter className="w-4 h-4 inline" /> {"  "}
              Filter
            </button>

            <AddMembersModal />
          </div>
        </div>
      </div>

      {/* Payment table */}
      <div className="bg-white overflow-x-auto">
        <Table
          columns={columns}
          dataSource={RolesAndPermissionsData}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default MembersTab;

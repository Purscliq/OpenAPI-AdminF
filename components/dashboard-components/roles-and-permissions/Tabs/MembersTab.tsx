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
import { useGetMemberRolesQuery } from "@/services/auth/index.service";

interface DataType {
  id: number;
  first_name: string;
  last_name: string;

  email: string;
  role: string;
  last_active: string | null;
  status: string;
}
const MembersTab = () => {
  const { data: members, isLoading } = useGetMemberRolesQuery({});

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
      dataIndex: "",
      render: (_, record) => (
        <span className="flex flex-col gap-2">
          <p className="text-[#25324B] text-base">
            {record.first_name} {record.last_name}
          </p>
          <p className="text-[#555F7E] text-sm">{record.email}</p>
        </span>
      ),
      width: "20%",
    },
    {
      title: "Roles",
      sorter: true,
      dataIndex: "role",
      // render: (roles) => `${roles}`,
      width: "20%",
    },
    {
      title: "Last Active",
      sorter: true,
      dataIndex: "lastActive",
      render: (lastActive) => (lastActive ? `${lastActive}` : "N/A"),
      width: "20%",
    },
    {
      title: "Status",
      sorter: true,
      dataIndex: "status",
      render: (status) => (
        <p
          className={`text-black rounded-[5rem] py-[0.375rem] px-[0.625rem] w-max text-sm ${
            status === "Active" ? "bg-[#2AD0621A]" : "bg-[#FF57331A]"
          }`}
        >
          {status}
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

  return (
    <div className="">
      <div className="w-full md:max-h-24 md:flex justify-between md:px-4 py-6 bg-white">
        <span>
          <h1 className="text-[20px] text-[#25324B] py-2">{`${
            members?.data?.count || 0
          } Members`}</h1>
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

      {/* Members table */}
      <div className="bg-white overflow-x-auto">
        <Table
          columns={columns}
          dataSource={members?.data?.users}
          pagination={{ pageSize: 5 }}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default MembersTab;

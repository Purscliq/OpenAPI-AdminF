"use client";

import React, { useState } from "react";
import { CustomModal } from "@/lib/AntdComponents";
import {
  useEditMemeberRolesMutation,
  useGetAllBusinessQuery,
  useGetRolesQuery,
} from "@/services/auth/index.service";
import { Spin } from "antd";

import { FiEdit } from "react-icons/fi";

const ChangeRolesModal = ({ id }: any) => {
  const { data: rolesData, isLoading: isLoadingRoles } = useGetRolesQuery({});
  const [editMemeber, { isLoading }] = useEditMemeberRolesMutation({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      try {
        await editMemeber({ user_id: id, role_id: selectedRole }).unwrap();
        setIsModalOpen(false);
      } catch (error) {
        console.error("Failed to update role:", error);
      }
    }
  };
  return (
    <>
      <button onClick={() => setIsModalOpen(true)} type="button">
        <p className="btn text-sm rounded-none normal-case text-[#8F9197] bg-white border border-[#CCCCF5] hover:text-black hover:border hover:border-black hover:bg-white/90 font-bold">
          <FiEdit className="w-4 h-4" />
          Change role
        </p>
      </button>

      <CustomModal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="py-6">
          <div className="border-b pb-1">
            <h1 className="font-bold text-[#242F57] text-[1.5625rem]">
              Change User Role
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name
              </label>
              <input
                id="name"
                type="text"
                disabled
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-[#25324B] text-base">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                disabled
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div> */}
            <div className="space-y-1">
              <label htmlFor="role" className="text-[#25324B] text-base">
                Select Role
              </label>
              {isLoadingRoles ? (
                <Spin />
              ) : (
                <select
                  id="role"
                  required
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                >
                  <option value="">Select a role</option>
                  {rolesData?.data?.map((role: any) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Role"}
            </button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default ChangeRolesModal;

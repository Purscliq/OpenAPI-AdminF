"use client";

import React, { useState, useEffect } from "react";
import { CustomModal, CustomSelect } from "@/lib/AntdComponents";
import {
  useAddRolesMutation,
  useGetPermissonQuery,
} from "@/services/auth/index.service";
import { Select } from "antd";

const AddRolesModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [addRoles, { isLoading }] = useAddRolesMutation({});
  const { data: permissions, isLoading: isLoadingR } = useGetPermissonQuery({});

  const permissionOptions = permissions?.data?.map(
    (permission: { name: any; id: any }) => ({
      label: permission.name,
      value: permission.id,
    })
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addRoles({
        name,
        description,
        permissions_list: selectedPermissions,
      }).unwrap();
      setIsModalOpen(false);
      setName("");
      setDescription("");
      setSelectedPermissions([]);
    } catch (error) {
      console.error("Failed to add role: ", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="py-3 px-9 text-white text-sm bg-black rounded-[0.25rem]"
        onClick={() => setIsModalOpen(true)}
      >
        Add Custom Role
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
              Create Custom Role
            </h1>
            <p className="text-[#636E95] text-base">
              This information can be created and edited
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name of role
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="text-[#25324B] text-base">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-3 py-2 resize-y appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="permissions" className="text-[#25324B] text-base">
                Permissions
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select permissions"
                onChange={(values) => setSelectedPermissions(values)}
                options={permissionOptions}
                loading={isLoadingR}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddRolesModal;

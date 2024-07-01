"use client";

import React, { useState } from "react";
import { CustomModal } from "@/lib/AntdComponents";
import {
  useAddMemberRolesMutation,
  useGetAllBusinessQuery,
  useGetRolesQuery,
} from "@/services/auth/index.service";
import { Spin } from "antd"; // Assuming you are using antd for the loading spinner
import { AiOutlineLoading } from "react-icons/ai";

const AddMembersModal: React.FC = () => {
  const [addMember, { isLoading: isAdding }] = useAddMemberRolesMutation({});
  const { data: rolesData, isLoading: isLoadingRoles } = useGetRolesQuery({});
  const { data: businessData, isLoading: isLoadingBusiness } =
    useGetAllBusinessQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
    business: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMember({
        email: formValues.email,
        role_id: formValues.role,
        business_id: formValues.business,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="py-3 px-9 text-white text-sm bg-black rounded-[0.25rem]"
        onClick={showModal}
      >
        Add Members
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
              Create User
            </h1>
            <p className="text-[#636E95] text-base">
              This information can be created and edited
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                required
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
                value={formValues.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="role" className="text-[#25324B] text-base">
                Select Role
              </label>
              {isLoadingRoles ? (
                <Spin />
              ) : (
                <select
                  id="role"
                  value={formValues.role}
                  onChange={handleChange}
                  required
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
            <div className="space-y-1">
              <label htmlFor="business" className="text-[#25324B] text-base">
                Select Business
              </label>
              {isLoadingBusiness ? (
                <Spin />
              ) : (
                <select
                  id="business"
                  value={formValues.business}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                >
                  <option value="">Select a business</option>
                  {businessData?.data?.map((data: any) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
              disabled={isAdding}
            >
              {isAdding ? <AiOutlineLoading /> : "Submit"}
            </button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddMembersModal;

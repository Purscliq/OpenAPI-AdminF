"use client";

import React, { useState } from "react";
import { CustomInput, CustomModal } from "@/lib/AntdComponents";

const AddMembersModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        onOk={handleOk}
        onCancel={handleCancel}
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
          <form className="mt-8 space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name
              </label>
              <input
                id="name"
                type="text"
                defaultValue="Tope Hope" //remove this!!
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
                defaultValue="temi@gmail" //remove this!!
                required
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="reason" className="text-[#25324B] text-base">
                Select Role
              </label>
              <select
                id="reason"
                required
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              >
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddMembersModal;

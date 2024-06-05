"use client";

import React, { useState } from "react";
import { CustomInput, CustomModal } from "@/lib/AntdComponents";

const AddRolesModal: React.FC = () => {
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
        Add Custom Role
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
              Create Custom Role
            </h1>
            <p className="text-[#636E95] text-base">
              This information can be created and edited
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name of role
              </label>
              <input
                id="name"
                type="text"
                defaultValue="Super Admin" //remove this!!
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
                defaultValue="This role will be able to..." //remove this!!
                required
                className="w-full px-3 py-2 resize-y appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
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

export default AddRolesModal;

"use client";

import React, { useState } from "react";
import { CustomModal } from "@/lib/AntdComponents";
import { useAddPermissionMutation } from "@/services/auth/index.service";

const AddPermissionsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissionName, setPermissionName] = useState("");
  const [addPermission, { isLoading: isAdding }] = useAddPermissionMutation({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPermissionName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPermission({ name: permissionName });
      setIsModalOpen(false);
      setPermissionName(""); // Reset form value
    } catch (error) {
      console.error("Error adding permission:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="py-3 px-9 text-white text-sm bg-black rounded-[0.25rem]"
        onClick={() => setIsModalOpen(true)}
      >
        Add Custom Permission
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
              Create Custom Permission
            </h1>
            <p className="text-[#636E95] text-base">
              This information can be created and edited
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name of Permission
              </label>
              <input
                id="name"
                type="text"
                value={permissionName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
              disabled={isAdding}
            >
              {isAdding ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddPermissionsModal;

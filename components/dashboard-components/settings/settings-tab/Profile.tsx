"use client";

import { Form, SelectProps } from "antd";
import { CustomSelect as Select } from "@/lib/AntdComponents";

const Profile = () => {
  const options: SelectProps["options"] = [
    {
      label: "Super Admin",
      value: "Super Admin",
    },
    {
      label: "End User",
      value: "EndUser",
    },
  ];

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Personal Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>

      <Form className=" w-full rounded-md">
        {/* First Name Section */}
        <div className="mb-4 p-2 grid md:grid-cols-[400px,1fr] gap-6 items-center">
          <div className="text-sm flex-col flex">
            <h2 className="font-semibold text-base">Personal Details:</h2>{" "}
          </div>
          <div className="space-y-3 flex flex-col  w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="fullName" className="font-semibold text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                required
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Roles and Permission
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%", height: "40px" }}
                placeholder="Please select"
                defaultValue={["Operations", "Admin"]}
                onChange={handleChange}
                options={options}
              />
            </div>
          </div>
        </div>
        <hr />

        {/* password Section */}
        <div className="mb-4 p-2 grid md:grid-cols-[400px,1fr] gap-6 items-center">
          <div className="text-sm flex-col flex">
            <h2 className="font-semibold text-base">New Password:</h2>{" "}
            <span className="text-sm mt-2">
              Manage your password to make sure it is safe{" "}
            </span>
          </div>
          <div className="space-y-3 flex flex-col  w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="oldPassword" className="font-semibold text-sm">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                required
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="password" className="font-semibold text-sm">
                New Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="flex justify-center mx-auto items-end my-3">
              <button
                type="submit"
                className="btn w-[400px] bg-black hover:bg-black text-white"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Profile;

"use client";

import React from "react";
import { Button, Form, Input, SelectProps, message } from "antd";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import {
  useGetUserQuery,
  useGetUseroleQuery,
  useResetPasswordMutation,
} from "@/services/auth/index.service";
import { AiOutlineLoading } from "react-icons/ai";

const Profile = () => {
  const [form] = Form.useForm();
  const { data: user, isLoading } = useGetUserQuery({});
  const [updatePass, { isLoading: isUpdating }] = useResetPasswordMutation({});
  const { data: rolesData } = useGetUseroleQuery({});

  const rolesOptions: SelectProps["options"] =
    rolesData?.data?.map((role: any) => ({
      label: role.name,
      value: role.id,
    })) || [];

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const onFinish = async (values: any) => {
    try {
      await updatePass({
        password: values.password,
        old_password: values.oldPassword,
      }).unwrap();
      message.success("Password updated successfully");
      form.resetFields();
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update password";
      message.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Personal Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>

      <Form form={form} onFinish={onFinish} className=" w-full rounded-md">
        {/* First Name Section */}
        <div className="mb-4 p-2 grid md:grid-cols-[400px,1fr] gap-6 items-center">
          <div className="text-sm flex-col flex">
            <h2 className="font-semibold text-base">Personal Details:</h2>{" "}
          </div>
          {isLoading ? (
            <AiOutlineLoading />
          ) : (
            <div className="space-y-3 flex flex-col w-full md:w-[400px]">
              <div className="w-full space-y-1">
                <label htmlFor="fullName" className="font-semibold text-sm">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="fullName"
                  value={`${user?.data?.first_name} ${user?.data?.last_name}`}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </div>
              <div className="w-full space-y-1">
                <label htmlFor="email" className="font-semibold text-sm">
                  Email
                </label>
                <Input
                  type="text"
                  id="email"
                  value={user?.data?.email}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </div>
              <div className="w-full space-y-1">
                <label htmlFor="roles" className="font-semibold text-sm">
                  Roles and Permission
                </label>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%", height: "60px" }}
                  placeholder="Please select"
                  onChange={handleChange}
                  options={rolesOptions}
                  disabled
                  value={rolesOptions}
                />
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* Password Section */}
        <div className="mb-4 p-2 grid md:grid-cols-[400px,1fr] gap-6 items-center">
          <div className="text-sm flex-col flex">
            <h2 className="font-semibold text-base">New Password:</h2>{" "}
            <span className="text-sm mt-2">
              Manage your password to make sure it is safe{" "}
            </span>
          </div>
          <div className="space-y-3 flex flex-col w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="oldPassword" className="font-semibold text-sm">
                Old Password
              </label>
              <Form.Item
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your old password!",
                  },
                ]}
              >
                <Input.Password
                  id="oldPassword"
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </Form.Item>
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="password" className="font-semibold text-sm">
                New Password
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </Form.Item>
            </div>
            <div className="flex justify-center mx-auto items-end my-3">
              <Button
                type="primary"
                htmlType="submit"
                className="w-[400px]"
                loading={isUpdating}
              >
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Profile;

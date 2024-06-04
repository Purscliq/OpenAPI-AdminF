"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { Form } from "antd";

const ResetPassword = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1640px] bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 md:p-0">
      <main className=" flex flex-col items-center justify-center bg-white rounded-3xl w-full md:w-[560px] mx-auto px-8 py-16">
        <div className="space-y-8 w-full">
          <span className="space-y-2 text-center">
            <h1 className="font-bold text-[18px] md:text-[32px] text-[#000000]">
              Password Reset
            </h1>
            <p className=" text-gray-700 md:text-[18px] text-[14px]">
              Kindly enter a new password
            </p>
          </span>

          <Form className="!w-full !space-y-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="password"
                className="text-[#181336] text-sm font-[500]"
              >
                New Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="confirmPassword"
                className="text-[#181336] text-sm font-[500]"
              >
                Confirm Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                required
              />
            </div>

            <span className="flex justify-center">
              <Button
                onClick={() => router.push("/")}
                htmlType="submit"
                type="primary"
                className="!h-[3rem] md:text-[18px] !bg-[#010101] w-full md:w-[80%]"
              >
                Send
              </Button>
            </span>
          </Form>
        </div>{" "}
      </main>
    </div>
  );
};

export default ResetPassword;

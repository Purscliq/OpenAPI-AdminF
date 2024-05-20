"use client";

import logo from "@/assets/logo.svg";
import {
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px] bg-[#FAFAFA]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[550px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-2xl mb-2 text-black">
          Change Password{" "}
        </h1>
        <p className=" text-gray-700 text-lg text-center">
          Your new password must be different from previous used passwords
        </p>
        <form className="w-full space-y-5 mt-8">
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="password"
              className="text-[#181336] text-sm font-[500]"
            >
              Password
            </label>
            <PasswordInput
              className="w-full"
              placeholder=" Enter your password"
              id="password"
              type="password"
              name="newPassword"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="confirmPassword"
              className="text-[#181336] text-sm font-[500]"
            >
              Confirm password
            </label>
            <PasswordInput
              className="w-full"
              placeholder="Confirm your password"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
            />
          </div>
          <Button
            onClick={() => router.push("/")}
            htmlType="submit"
            type="primary"
            className="!h-[3rem] !bg-black w-full !text-white"
          >
            Reset Password
          </Button>

          <span className="text-sm font-medium text-gray-600 flex items-center justify-center cursor-pointer underline">
            Resend Link
          </span>
        </form>
      </main>
    </div>
  );
};

export default ResetPassword;

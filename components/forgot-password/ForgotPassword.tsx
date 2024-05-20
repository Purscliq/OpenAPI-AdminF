"use client";

import { useState, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col  max-w-[1640px] bg-[#FAFAFA]">
      <div className=" mx-auto w-full p-3">
        <nav className="py-4 px-8">
          <Image src={logo} alt="logo" />
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[559px] mx-auto mt-4 p-6">
          {/* {alert && <Alert type="error" closable message={alert} />} */}
          <h1 className="font-bold text-[28px] mb-2 text-balck">
            Reset Password
          </h1>
          <p className=" text-gray-700 text-[18px] text-center">
            Enter the email associated with your account and we’ll send an email
            with instruction to reset your Password
          </p>
          <form className="w-full space-y-6 mt-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.4rem]">
              <label
                htmlFor="email"
                className="text-[#181336] text-sm font-[500]"
              >
                Email Address
              </label>
              <Input
                className="w-full authInput"
                placeholder="Email Address"
                id="email"
                type="email"
                required
              />
            </div>
            <Button
              onClick={() => router.push("/")}
              htmlType="submit"
              type="primary"
              className="!h-[3rem] !bg-Primary w-full"
            >
              Send reset link
            </Button>
            <span className="flex justify-center items-center mt-6">
              <p className="text-[14px] leading-6 text-gray-600">
                Remembered your password ? kindly{" "}
                <Link
                  href="/"
                  className="underline duration-300 cursor-pointer text-black font-semibold"
                >
                  click here
                </Link>{" "}
                to Login
              </p>
            </span>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;

"use client";

import { useRouter } from "next/navigation";
import {
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { Form, message } from "antd";
import { useState } from "react";
import { useForgotPasswordMutation } from "@/services/auth/index.service";

const ForgotPassword = () => {
  const { replace } = useRouter();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    forgotPassword({ email })
      .unwrap()
      .then((res) => {
        console.log(res);
        
        message.success("password reset mail sent");
        // const url = `/forgot-password-2?email=${encodeURIComponent(email)}`;
        replace("reset-password");
      })
      .catch((err) => {
        message.error(err?.data?.message);
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1640px] bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 md:p-0">
      <main className=" flex flex-col items-center justify-center bg-white rounded-3xl w-full md:w-[560px] mx-auto px-8 py-16">
        <div className="space-y-8 w-full">
          <span className="space-y-2 text-center">
            <h1 className="font-bold text-[18px] md:text-[32px] text-[#000000]">
              Forgot Password
            </h1>
            <p className=" text-gray-700 md:text-base text-[14px]">
              Kindly enter the email address linked to this account and we will
              send you a code to enable you change your password.
            </p>
          </span>

          <Form onFinish={handleSubmit} className="!w-full !space-y-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="email"
                className="text-[#181336] text-sm font-[500]"
              >
                Email Address
              </label>
              <Input
                className="w-full "
                placeholder="Email Address"
                id="email"
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                size="large"
                required
              />
            </div>

            <span className="flex justify-center">
              <Button
                htmlType="submit"
                type="primary"
                loading={isLoading}
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

export default ForgotPassword;

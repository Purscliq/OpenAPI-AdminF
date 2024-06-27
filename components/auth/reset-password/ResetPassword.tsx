"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { Form, message } from "antd";
import { useResetPasswordMutation } from "@/services/auth/index.service";
import { ChangeEventHandler, Suspense, useEffect, useState } from "react";
import { passwordSchema } from "@/components/helper/PasswordSchema";

const ResetPassword = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
};

const ResetPasswordForm = () => {
  const { replace } = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const initialState = {
    password: "",
    password2: "",
    email: "",
    token: "",
    update_type: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [validationError, setValidationError] = useState("");
  const [confirmValidationError, setConfirmValidationError] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    const updateType = searchParams.get("update_type");

    setFormData((prev) => ({
      ...prev,
      email: email || "",
      token: token || "",
      update_type: updateType || "",
    }));
  }, [searchParams]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === "password")
      passwordSchema
        .validate({ password: e.target?.value })
        .then(() => setValidationError(""))
        .catch((error) => setValidationError(error.message));
    if (e.target.name === "password2" && e.target.value !== formData.password)
      setConfirmValidationError("password must match");
    else if (
      e.target.name === "password2" &&
      e.target.value === formData.password
    )
      setConfirmValidationError("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleSubmit = () => {
    if (!validationError && !confirmValidationError) {
      resetPassword(formData)
        .unwrap()
        .then((res) => {
          message.success("password updated");
          setFormData(initialState);
          replace("login");
        })
        .catch((err) => {
          message.error(err?.data?.message);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1640px] bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 md:p-0">
      <main className="flex flex-col items-center justify-center bg-white rounded-3xl w-full md:w-[560px] mx-auto px-8 py-16">
        <div className="space-y-8 w-full">
          <span className="space-y-2 text-center">
            <h1 className="font-bold text-[18px] md:text-[32px] text-[#000000]">
              Password Reset
            </h1>
            <p className="text-gray-700 md:text-[18px] text-[14px]">
              Kindly enter a new password
            </p>
          </span>

          <Form onFinish={handleSubmit} className="!w-full !space-y-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="password"
                className="text-[#181336] text-sm font-[500]"
              >
                New Password
              </label>

              <PasswordInput
                id="password"
                placeholder="Enter Password"
                type="password"
                required
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
              {formData.password && validationError && (
                <p className="text-red-500">{validationError}</p>
              )}
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="confirmPassword"
                className="text-[#181336] text-sm font-[500]"
              >
                Confirm Password
              </label>

              <PasswordInput
                id="confirmPassword"
                placeholder="Enter Password"
                type="password"
                required
                value={formData.password2}
                name="password2"
                onChange={handleChange}
              />
              {formData.password2 && confirmValidationError && (
                <p>{confirmValidationError}</p>
              )}
            </div>

            <span className="flex justify-center">
              <Button
                htmlType="submit"
                type="primary"
                className="!h-[3rem] md:text-[18px] !bg-[#010101] w-full md:w-[80%]"
              >
                Send
              </Button>
            </span>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;

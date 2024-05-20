"use client";
import PasswordResetV2 from "@/components/forgot-pass-step2/PasswordResetStep2";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  return <PasswordResetV2 email={params.get("email") || ""} />;
};

export default Page;

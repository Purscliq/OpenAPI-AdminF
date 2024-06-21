/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useGetDashbaordQuery } from "@/services/auth/index.service";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";
interface DecodedToken {
  exp: number;
}

const template = ({ children }: { children: React.ReactNode }) => {
  const { refetch, isError } = useGetDashbaordQuery({});
  const router = useRouter();

  useLayoutEffect(() => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      router.replace("/");
      return;
    }

    try {
      const decodedToken: DecodedToken = jwtDecode(authToken);
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000; 

      if (currentTime > exp) {
        localStorage.removeItem("token");
        router.replace("/");
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
      router.replace("/");
    }
  }, [isError, router]);

  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default template;

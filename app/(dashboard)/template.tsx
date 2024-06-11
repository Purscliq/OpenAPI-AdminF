/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import React, { useLayoutEffect } from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default template;

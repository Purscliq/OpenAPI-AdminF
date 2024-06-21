import React, { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { useGetDashbaordQuery } from "@/services/auth/index.service";

const RestrictedPages = ({ children }:) => {
  const router = useRouter();
  const { refetch, isError } = useGetDashbaordQuery({});
  const pathname = useRouter();

  useLayoutEffect(() => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      router.replace("/");
      return;
    }

    try {
      const { exp } = jwtDecode(authToken);
      const currentTime = Date.now() / 1000; // Current time in seconds

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
  }, [pathname]);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
      router.replace("/");
    }
  }, [isError, router]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default RestrictedPages;

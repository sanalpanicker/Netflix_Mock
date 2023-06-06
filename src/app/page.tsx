"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import authService from "@/service/magicAuthService";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("in hom erouter");
    const route = async () => {
      const isLoggedIn = await authService.isLoggedIn();
      console.log("isLoggedIn", isLoggedIn);
      if (isLoggedIn) {
        await authService.setUser();
        router.push("/home");
      } else router.push("/login");
    };
    route();
  }, []);

  return <div></div>;
}

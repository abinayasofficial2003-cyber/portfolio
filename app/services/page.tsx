"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ServicesSection from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#services");
  }, [router]);

  return <ServicesSection />;
}

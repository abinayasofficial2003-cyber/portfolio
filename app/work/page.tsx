"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WorkSection from "@/components/sections/WorkSection";

export default function WorkPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#work");
  }, [router]);

  return <WorkSection />;
}

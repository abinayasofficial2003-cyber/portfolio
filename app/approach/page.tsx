"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ApproachSection from "@/components/sections/ApproachSection";

export default function ApproachPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#approach");
  }, [router]);

  return <ApproachSection />;
}

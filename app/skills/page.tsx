"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SkillsSection from "@/components/sections/SkillsSection";

export default function SkillsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#skills");
  }, [router]);

  return <SkillsSection />;
}

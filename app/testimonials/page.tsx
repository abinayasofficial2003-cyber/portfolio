"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function TestimonialsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#testimonials");
  }, [router]);

  return <TestimonialsSection />;
}

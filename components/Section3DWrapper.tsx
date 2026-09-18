"use client";

import React from "react";

interface Section3DWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section3DWrapper({
  children,
  id,
  className = "",
}: Section3DWrapperProps) {
  return (
    <section
      id={id}
      className={`h-screen h-[100dvh] w-full snap-start snap-always relative overflow-hidden flex-shrink-0 ${className}`}
    >
      {children}
    </section>
  );
}

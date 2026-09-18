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
      className={`w-full relative overflow-visible flex-shrink-0 min-h-screen h-auto flex flex-col justify-center xl:h-screen xl:h-[100dvh] xl:overflow-hidden xl:snap-start xl:snap-always ${className}`}
    >
      {children}
    </section>
  );
}

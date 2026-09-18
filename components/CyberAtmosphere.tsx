"use client";

import React from "react";
import { motion } from "framer-motion";

interface CyberAtmosphereProps {
  watermarkText?: string;
  sectionCode?: string;
}

export default function CyberAtmosphere({
  watermarkText = "SECURITY ASSESSMENT",
}: CyberAtmosphereProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
      {/* 1. Ambient Glowing Cyber Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.18, 0.32, 0.18],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#f13024] blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-110 h-110 rounded-full bg-[#4a22bd] blur-[140px] mix-blend-screen"
      />

      {/* 2. Cyber HUD Grid Lines & Corner Brackets */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />


      <div className="absolute bottom-6 left-8 sm:left-16 hidden lg:flex items-center gap-4 font-mono text-[9px] text-white/30 tracking-wider">
        <span>SECURITY_PROTOCOL: OWASP_TOP10</span>
        <span className="text-white/20">•</span>
        <span>LATENCY: 12ms</span>
        <span className="text-white/20">•</span>
        <span className="text-emerald-400/80">STATUS: PROTECTED</span>
      </div>

      {/* 4. Giant Subtle Background Watermark Typography */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.018]">
        <span className="text-[10vw] font-black font-sora tracking-tighter text-white whitespace-nowrap leading-none select-none">
          {watermarkText}
        </span>
      </div>

      {/* 5. Animated Scanning Laser Seam */}
      <motion.div
        animate={{
          y: ["0%", "100%", "0%"],
          opacity: [0, 0.08, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f13024] to-transparent pointer-events-none"
      />
    </div>
  );
}

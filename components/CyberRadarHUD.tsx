"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CyberRadarHUD() {
  return (
    <div className="absolute -left-12 -bottom-12 w-56 h-56 xl:w-72 xl:h-72 pointer-events-none select-none z-10 opacity-60 hover:opacity-100 transition-opacity">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-[#f13024]/10 rounded-full blur-2xl" />

      {/* Radar Frame */}
      <div className="relative w-full h-full rounded-full border border-[#f13024]/30 flex items-center justify-center p-4">
        {/* Inner concentric circles */}
        <div className="w-3/4 h-3/4 rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full border border-[#f13024]/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#f13024] shadow-[0_0_8px_#f13024]" />
          </div>
        </div>

        {/* Crosshair grid lines */}
        <div className="absolute inset-x-0 h-px bg-white/10" />
        <div className="absolute inset-y-0 w-px bg-white/10" />

        {/* Rotating Radar Sweep Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(241,48,36,0.35) 360deg)",
          }}
        />

        {/* Animated Threat Detection Blips */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#f13024] shadow-[0_0_10px_#f13024]"
        />

        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
        />

        {/* HUD Telemetry text */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[#f13024] whitespace-nowrap bg-black/70 px-2 py-0.5 rounded border border-[#f13024]/30">
          RADAR // THREAT DETECTED: 0
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { HiArrowUpRight, HiShieldCheck, HiOutlineCpuChip } from "react-icons/hi2";
import { FaBug, FaLock, FaTerminal } from "react-icons/fa";

export interface ProjectCaseStudy {
  id: string;
  code: string;
  category: "Web App Sec" | "API Pentest" | "Mobile Sec" | "Cloud & Infra";
  title: string;
  target: string;
  severity: string;
  cvss: string;
  summary: string;
  attackVectors: string[];
  tools: string[];
  metrics: {
    findings: string;
    retestStatus: string;
    criticality: string;
  };
}

interface CyberProjectCard3DProps {
  project: ProjectCaseStudy;
}

export default function CyberProjectCard3D({ project }: CyberProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  const isCritical = project.cvss.startsWith("9");
  const badgeColor = isCritical
    ? "text-[#f13024] bg-[#f13024]/15 border-[#f13024]/40"
    : "text-amber-400 bg-amber-400/15 border-amber-400/40";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: tilt.isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className="relative w-[330px] sm:w-[370px] xl:w-[395px] shrink-0 h-[435px] sm:h-[445px] xl:h-[455px] rounded-2xl bg-gradient-to-b from-[#1b1d33]/90 via-[#131424]/95 to-[#0b0c16]/98 border border-white/10 hover:border-[#f13024]/50 p-5 flex flex-col justify-between select-none shadow-[0_12px_35px_rgba(0,0,0,0.6)] group transition-colors duration-300 overflow-hidden"
    >
      {/* Dynamic 3D Glare Reflection */}
      {tilt.isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-25 mix-blend-color-dodge transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 260px at ${tilt.glareX}% ${tilt.glareY}%, rgba(241,48,36,0.5), transparent 70%)`,
          }}
        />
      )}

      {/* Cyber Corner Crosshairs */}
      <div className="absolute top-2 left-2.5 text-[9px] font-mono text-[#f13024]/50 pointer-events-none">[+]</div>
      <div className="absolute top-2 right-2.5 text-[9px] font-mono text-[#f13024]/50 pointer-events-none">[+]</div>
      <div className="absolute bottom-2 left-2.5 text-[9px] font-mono text-white/20 pointer-events-none">_//</div>
      <div className="absolute bottom-2 right-2.5 text-[9px] font-mono text-white/20 pointer-events-none">_//</div>

      {/* Laser Scanning Line Animation on Hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#f13024] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

      {/* TOP SECTION: Header Telemetry & Severity */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
            <FaTerminal className="text-[#f13024] text-[8px]" />
            <span>{project.code}</span>
          </div>

          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[9px] font-mono font-bold tracking-wider ${badgeColor}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
            <span>{project.severity}</span>
          </div>
        </div>

        {/* Target Tag */}
        <div className="text-[10px] font-mono tracking-widest text-[#f13024] uppercase mb-1 flex items-center gap-1.5">
          <HiOutlineCpuChip className="text-xs" />
          <span className="truncate">{project.target}</span>
        </div>

        {/* Main Title */}
        <h3 className="text-base xl:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#f13024] transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        {/* Executive Summary */}
        <p className="text-[11px] text-white/60 font-light mt-1.5 line-clamp-2 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* MIDDLE SECTION: Attack Vectors & Tech Stack */}
      <div className="my-2 py-2 border-y border-white/10 space-y-2">
        <div>
          <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1">
            <FaBug className="text-[#f13024]/70 text-[8px]" />
            <span>Exploit Vectors Neutralized</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.attackVectors.slice(0, 3).map((vector, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#f13024]/10 text-white/80 border border-[#f13024]/20"
              >
                {vector}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1">
            <FaLock className="text-emerald-400/70 text-[8px]" />
            <span>Audit Tooling</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tools.slice(0, 4).map((tool, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-white/60 border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Verified Metrics & CTA Link */}
      <div>
        {/* 3-Column Metrics Badge */}
        <div className="grid grid-cols-3 gap-1.5 py-1.5 px-2 rounded-xl bg-black/40 border border-white/5 mb-2.5 text-center">
          <div>
            <div className="text-xs font-bold font-mono text-white">
              {project.metrics.findings}
            </div>
            <div className="text-[8px] font-mono text-white/40 uppercase">Findings</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-xs font-bold font-mono text-[#f13024]">
              {project.cvss}
            </div>
            <div className="text-[8px] font-mono text-white/40 uppercase">Max CVSS</div>
          </div>
          <div>
            <div className="text-xs font-bold font-mono text-emerald-400">
              {project.metrics.retestStatus}
            </div>
            <div className="text-[8px] font-mono text-white/40 uppercase">Retest Pass</div>
          </div>
        </div>

        {/* Action Link */}
        <Link
          href="#contact"
          className="w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#f13024]/20 hover:from-[#f13024] to-[#f13024]/10 hover:to-[#f13024]/80 border border-[#f13024]/40 hover:border-[#f13024] text-white flex items-center justify-between text-[11px] font-mono tracking-wider uppercase transition-all duration-300 shadow-md group/btn"
        >
          <span className="flex items-center gap-1.5">
            <HiShieldCheck className="text-sm text-[#f13024] group-hover/btn:text-white transition-colors" />
            <span>Request Audit Scope</span>
          </span>
          <HiArrowUpRight className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

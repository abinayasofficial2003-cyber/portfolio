"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  HiChevronLeft,
  HiChevronRight,
  HiPause,
  HiPlay,
  HiArrowUpRight,
  HiShieldCheck,
  HiOutlineCpuChip,
} from "react-icons/hi2";
import { FaBug, FaLock, FaTerminal } from "react-icons/fa";

export interface CoverflowProject {
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

const rawProjects: CoverflowProject[] = [
  {
    id: "cs-01",
    code: "CS // 01",
    category: "API Pentest",
    title: "FinTech Banking API Pentest",
    target: "Core Banking REST & Microservices",
    severity: "CRITICAL // CVSS 9.4",
    cvss: "9.4",
    summary:
      "Deep security assessment across payment gateway APIs, token validation endpoints, and internal microservice service mesh.",
    attackVectors: [
      "BOLA / IDOR on Account Balances",
      "JWT Null-Algorithm Signature Bypass",
      "Race Condition in Fund Transfers",
    ],
    tools: ["Burp Suite Pro", "JWT Toolkit", "Postman", "Custom Python"],
    metrics: {
      findings: "14 Findings",
      retestStatus: "100% Resolved",
      criticality: "Critical Tier 1",
    },
  },
  {
    id: "cs-02",
    code: "CS // 02",
    category: "Web App Sec",
    title: "Enterprise SaaS Auth & Isolation",
    target: "Multi-Tenant B2B Web Application",
    severity: "HIGH // CVSS 8.8",
    cvss: "8.8",
    summary:
      "Comprehensive penetration testing of authentication flows, tenant isolation logic, role-based access control, and GraphQL queries.",
    attackVectors: [
      "Cross-Tenant Data Exposure",
      "Blind SQLi via Export Filters",
      "Stored XSS in Activity Logs",
    ],
    tools: ["OWASP ZAP", "SQLmap", "ffuf", "Burp Suite Pro"],
    metrics: {
      findings: "11 Findings",
      retestStatus: "100% Resolved",
      criticality: "High Tier 2",
    },
  },
  {
    id: "cs-03",
    code: "CS // 03",
    category: "Mobile Sec",
    title: "FinTech Mobile App APK Audit",
    target: "Android (APK) & iOS (IPA) Banking App",
    severity: "HIGH // CVSS 8.2",
    cvss: "8.2",
    summary:
      "Static & dynamic binary analysis, root detection bypass, SSL pinning hooks, and local cryptographic storage assessment.",
    attackVectors: [
      "Frida SSL Pinning Bypass",
      "Hardcoded AES Keys in DEX",
      "Insecure SQLite Auth Token Storage",
    ],
    tools: ["MobSF", "Frida", "ADB", "Jadx-GUI", "Ghidra"],
    metrics: {
      findings: "9 Findings",
      retestStatus: "100% Resolved",
      criticality: "High Tier 2",
    },
  },
  {
    id: "cs-04",
    code: "CS // 04",
    category: "Cloud & Infra",
    title: "AWS Multi-Account Infrastructure",
    target: "AWS Multi-Tenant Cloud & Kubernetes",
    severity: "CRITICAL // CVSS 9.1",
    cvss: "9.1",
    summary:
      "Security review of AWS IAM permission boundaries, S3 access control lists, VPC security groups, and EKS container configurations.",
    attackVectors: [
      "IAM Wildcard Privilege Escalation",
      "Publicly Readable S3 Backups",
      "Unrestricted Security Group Ingress",
    ],
    tools: ["AWS CLI", "ScoutSuite", "Prowler", "Trivy", "Pacu"],
    metrics: {
      findings: "16 Findings",
      retestStatus: "100% Resolved",
      criticality: "Critical Tier 1",
    },
  },
  {
    id: "cs-05",
    code: "CS // 05",
    category: "Web App Sec",
    title: "Healthcare Telehealth HIPAA Audit",
    target: "HIPAA Compliant Patient Portal",
    severity: "HIGH // CVSS 8.6",
    cvss: "8.6",
    summary:
      "Penetration testing of telemedicine video endpoints, SAML single sign-on assertion validation, and patient record export controls.",
    attackVectors: [
      "SAML XML Signature Wrapping (XSW)",
      "Mass Assignment on Medical History",
      "Broken Session Invalidation",
    ],
    tools: ["Burp SAML Raider", "Postman", "ffuf", "OWASP Amass"],
    metrics: {
      findings: "8 Findings",
      retestStatus: "100% Resolved",
      criticality: "High Tier 2",
    },
  },
  {
    id: "cs-06",
    code: "CS // 06",
    category: "Cloud & Infra",
    title: "Automated Threat Intel Feed Pipeline",
    target: "Threat Intelligence Ingestion Architecture",
    severity: "HIGH // CVSS 7.8",
    cvss: "7.8",
    summary:
      "Design and security audit of an automated threat intelligence crawler ingesting MalwareBazaar feeds into SIEM with automated YARA rule tagging.",
    attackVectors: [
      "Sandbox Escape Risk Analysis",
      "API Webhook Signature Tampering",
      "Data Poisoning Mitigation",
    ],
    tools: ["Python", "YARA", "ElasticSearch", "Docker", "VirusTotal"],
    metrics: {
      findings: "Pipeline Built",
      retestStatus: "Active Protection",
      criticality: "Automation",
    },
  },
];

const categories = [
  "All Engagements",
  "Web App Sec",
  "API Pentest",
  "Mobile Sec",
  "Cloud & Infra",
] as const;

export default function CyberCoverflow3D() {
  const [activeCategory, setActiveCategory] = useState<string>("All Engagements");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState<boolean>(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All Engagements"
      ? rawProjects
      : rawProjects.filter((p) => p.category === activeCategory);

  const total = filteredProjects.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic Timed Rotation ("time gap" of 3.5s)
  useEffect(() => {
    if (isHovered || isManuallyPaused || total <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isManuallyPaused, nextSlide, total]);

  return (
    <div className="w-full flex flex-col items-center gap-y-3 select-none">
      {/* Top Filter Chips & Navigation Toolbar */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 overflow-x-auto max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                  ? "bg-[#f13024] text-white font-semibold shadow-[0_0_12px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* 3D PERSPECTIVE COVERFLOW STAGE */}
      <div
        ref={stageRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[430px] sm:h-[480px] xl:h-[495px] flex items-center justify-center overflow-hidden"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {filteredProjects.map((project, idx) => {
          // Compute circular relative offset from activeIndex
          let offset = idx - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isAbsOne = Math.abs(offset) === 1;
          const isAbsTwo = Math.abs(offset) === 2;
          const isVisible = Math.abs(offset) <= 2;

          // Compute 3D Coverflow transforms matching reference image
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let opacity = 0;
          let zIndex = 1;
          let brightness = 100;

          const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
          const shiftOne = isMobile ? 120 : 230;
          const shiftTwo = isMobile ? 220 : 410;

          if (isCenter) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            scale = 1;
            opacity = 1;
            zIndex = 30;
            brightness = 100;
          } else if (isAbsOne) {
            const dir = offset > 0 ? 1 : -1;
            translateX = dir * shiftOne; // Shift left or right
            translateZ = -140; // Step back in 3D
            rotateY = dir * -38; // Angle inwards towards center!
            scale = 0.88;
            opacity = 0.82;
            zIndex = 20;
            brightness = 75;
          } else if (isAbsTwo) {
            const dir = offset > 0 ? 1 : -1;
            translateX = dir * shiftTwo; // Outer wings
            translateZ = -260; // Further back in 3D
            rotateY = dir * -52; // Steeper angle
            scale = 0.74;
            opacity = 0.45;
            zIndex = 10;
            brightness = 55;
          } else {
            // Cards outside the 5-card viewport
            const dir = offset > 0 ? 1 : -1;
            translateX = dir * 600;
            translateZ = -400;
            rotateY = dir * -65;
            scale = 0.5;
            opacity = 0;
            zIndex = 0;
          }

          const isCritical = project.cvss.startsWith("9");
          const badgeColor = isCritical
            ? "text-[#f13024] bg-[#f13024]/15 border-[#f13024]/40"
            : "text-amber-400 bg-amber-400/15 border-amber-400/40";

          return (
            <div
              key={project.id}
              onClick={() => {
                if (!isCenter) setActiveIndex(idx);
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity: isVisible ? opacity : 0,
                filter: `brightness(${brightness}%)`,
                transition: "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.65s ease, filter 0.65s ease",
              }}
              className={`absolute w-[290px] sm:w-[350px] xl:w-[380px] h-[410px] sm:h-[450px] xl:h-[465px] rounded-2xl bg-gradient-to-b from-[#1c1e36]/95 via-[#131424]/98 to-[#0b0c16]/98 border p-4 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer overflow-hidden ${isCenter
                ? "border-[#f13024] shadow-[0_0_35px_rgba(241,48,36,0.3)] pointer-events-auto"
                : "border-white/10 hover:border-white/30"
                }`}
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2.5 text-[9px] font-mono text-[#f13024]/50">[+]</div>
              <div className="absolute top-2 right-2.5 text-[9px] font-mono text-[#f13024]/50">[+]</div>
              <div className="absolute bottom-2 left-2.5 text-[9px] font-mono text-white/20">_//</div>
              <div className="absolute bottom-2 right-2.5 text-[9px] font-mono text-white/20">_//</div>

              {/* Active Laser Scanning Line */}
              {isCenter && (
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#f13024] to-transparent animate-pulse shadow-[0_0_10px_#f13024]" />
              )}

              {/* TOP: Header Telemetry */}
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
                <h3 className="text-base xl:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-[#f13024] transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-[11px] text-white/60 font-light mt-1.5 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* MIDDLE: Attack Vectors & Tooling */}
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

              {/* BOTTOM: Metrics & Action Link */}
              <div>
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

                {isCenter ? (
                  <Link
                    href="#contact"
                    className="w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#f13024] to-[#f13024]/80 text-white flex items-center justify-between text-[11px] font-mono tracking-wider uppercase shadow-[0_0_15px_rgba(241,48,36,0.4)] group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <HiShieldCheck className="text-sm" />
                      <span>Request Audit Scope</span>
                    </span>
                    <HiArrowUpRight className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                ) : (
                  <div className="w-full py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 text-white/40 flex items-center justify-center text-[10px] font-mono tracking-wider uppercase">
                    Click to inspect in front
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

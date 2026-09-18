"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { HiChevronLeft, HiChevronRight, HiPause, HiPlay } from "react-icons/hi2";
import CyberProjectCard3D, { ProjectCaseStudy } from "./CyberProjectCard3D";

const rawProjects: ProjectCaseStudy[] = [
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

export default function CyberAutoScrollStream() {
  const [activeCategory, setActiveCategory] = useState<string>("All Engagements");
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProjects =
    activeCategory === "All Engagements"
      ? rawProjects
      : rawProjects.filter((p) => p.category === activeCategory);

  // Duplicate cards for a completely seamless, infinite continuous loop
  const displayCards = [...filteredProjects, ...filteredProjects];

  const handleUserInteractionStart = useCallback(() => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  }, []);

  // Continuous auto-scroll animation loop (slow, ultra-smooth velocity)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const scrollSpeed = 0.55; // Pixels per frame (~33px/sec at 60fps) — slow & relaxed glide

    const tick = () => {
      if (!isHovered && !isManuallyPaused && !isUserInteracting) {
        el.scrollLeft += scrollSpeed;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [isHovered, isManuallyPaused, isUserInteracting, filteredProjects]);

  const handleStep = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    handleUserInteractionStart();
    const stepAmount = 380;
    el.scrollBy({
      left: direction === "left" ? -stepAmount : stepAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-3">
      {/* Top Controls Row: Filter Chips + Stream Status + Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-black/40 border border-white/10 w-full sm:w-auto max-w-md mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = 0;
                  }
                }}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#f13024] text-white font-semibold shadow-[0_0_12px_rgba(241,48,36,0.5)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Live Stream Telemetry & Interactive Controls */}
        <div className="flex items-center gap-3">
          {/* Live indicator badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#f13024]/10 border border-[#f13024]/30 font-mono text-[10px]">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isHovered || isManuallyPaused
                  ? "bg-amber-400"
                  : "bg-emerald-400 animate-ping"
              }`}
            />
            <span
              className={
                isHovered || isManuallyPaused ? "text-amber-400" : "text-white/80"
              }
            >
              {isHovered || isManuallyPaused ? "STREAM: PAUSED" : "STREAM: LIVE AUTO-DRIFT"}
            </span>
          </div>

          {/* Pause / Resume Button */}
          <button
            onClick={() => setIsManuallyPaused(!isManuallyPaused)}
            title={isManuallyPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 hover:border-[#f13024] hover:text-[#f13024] text-white/70 flex items-center justify-center text-xs transition-colors cursor-pointer"
          >
            {isManuallyPaused ? <HiPlay /> : <HiPause />}
          </button>

          {/* Nudge Left / Right Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleStep("left")}
              aria-label="Step left"
              className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 hover:border-[#f13024] hover:text-[#f13024] text-white/70 flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={() => handleStep("right")}
              aria-label="Step right"
              className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 hover:border-[#f13024] hover:text-[#f13024] text-white/70 flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Scrolling Stream Container (Pauses on hover for 3D tilt interaction) */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleUserInteractionStart}
        onWheel={handleUserInteractionStart}
        className="w-full flex items-center gap-4 overflow-x-auto py-2 scrollbar-none select-none cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {displayCards.map((project, idx) => (
          <div key={`${project.id}-${idx}`} className="shrink-0">
            <CyberProjectCard3D project={project} />
          </div>
        ))}
      </div>

      {/* Stream Sub-Footer Info */}
      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-0.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f13024]" />
          <span>{filteredProjects.length} Engagements in Active Feed</span>
        </div>
        <div className="hidden sm:block">
          Hover card to pause & inspect in 3D • Drag to explore
        </div>
      </div>
    </div>
  );
}

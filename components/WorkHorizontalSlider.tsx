"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import CyberProjectCard3D, { ProjectCaseStudy } from "./CyberProjectCard3D";

const projectsData: ProjectCaseStudy[] = [
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
    title: "Enterprise SaaS Auth & Tenant Isolation",
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
      "Frida SSL Certificate Pinning Bypass",
      "Hardcoded AES Keys in Decompiled DEX",
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
    title: "AWS Multi-Account Infrastructure Audit",
    target: "AWS Multi-Tenant Cloud & Kubernetes",
    severity: "CRITICAL // CVSS 9.1",
    cvss: "9.1",
    summary:
      "Security review of AWS IAM permission boundaries, S3 access control lists, VPC security groups, and EKS container configurations.",
    attackVectors: [
      "IAM Wildcard Privilege Escalation",
      "Publicly Readable S3 Database Backups",
      "Unrestricted Security Group Ingress (0.0.0.0/0)",
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
    title: "Healthcare Telehealth SSO & HIPAA Audit",
    target: "HIPAA Compliant Patient Portal",
    severity: "HIGH // CVSS 8.6",
    cvss: "8.6",
    summary:
      "Penetration testing of telemedicine video endpoints, SAML single sign-on assertion validation, and patient record export controls.",
    attackVectors: [
      "SAML XML Signature Wrapping (XSW)",
      "Mass Assignment on Patient Medical History",
      "Broken Session Invalidation on Logout",
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
    title: "Automated Malware IOC Threat Pipeline",
    target: "Threat Intelligence Ingestion Architecture",
    severity: "HIGH // CVSS 7.8",
    cvss: "7.8",
    summary:
      "Design and security audit of an automated threat intelligence crawler ingesting MalwareBazaar feeds into SIEM with automated YARA rule tagging.",
    attackVectors: [
      "Sandbox Escape Risk Analysis",
      "API Webhook Signature Tampering",
      "Data Poisoning Mitigation in IOC Feeds",
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

export default function WorkHorizontalSlider() {
  const [activeCategory, setActiveCategory] = useState<string>("All Engagements");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects =
    activeCategory === "All Engagements"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = (el.scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    updateScrollState();
  }, [filteredProjects]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      {/* Top Filter Chips & Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 overflow-x-auto max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#f13024] text-white font-semibold shadow-[0_0_15px_rgba(241,48,36,0.4)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Prev / Next Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
              canScrollLeft
                ? "border-white/20 bg-white/5 text-white hover:border-[#f13024] hover:bg-[#f13024]/20 hover:text-[#f13024] shadow-md"
                : "border-white/5 bg-black/20 text-white/20 cursor-not-allowed"
            }`}
          >
            <HiChevronLeft className="text-base" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next case study"
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
              canScrollRight
                ? "border-white/20 bg-white/5 text-white hover:border-[#f13024] hover:bg-[#f13024]/20 hover:text-[#f13024] shadow-md"
                : "border-white/5 bg-black/20 text-white/20 cursor-not-allowed"
            }`}
          >
            <HiChevronRight className="text-base" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="w-full flex items-center gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth scrollbar-none snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {filteredProjects.map((project) => (
          <div key={project.id} className="snap-start">
            <CyberProjectCard3D project={project} />
          </div>
        ))}
      </div>

      {/* Bottom Track Progress Indicator */}
      <div className="w-full flex items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2 font-mono text-[10px] text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-pulse" />
          <span>{filteredProjects.length} Engagements Documented</span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-40 sm:w-64 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#f13024] to-red-400 rounded-full transition-all duration-150 shadow-[0_0_8px_#f13024]"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          />
        </div>

        <div className="font-mono text-[10px] text-white/40 hidden sm:block">
          {"Scroll / Drag / Click < >"}
        </div>
      </div>
    </div>
  );
}

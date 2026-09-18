"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  HiGlobeAlt,
  HiServer,
  HiDevicePhoneMobile,
  HiShieldExclamation,
  HiExclamationTriangle,
  HiCheckCircle,
  HiShieldCheck,
  HiArrowUpRight,
} from "react-icons/hi2";

import Circles from "@/components/Circles";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const qualityPillars = [
  "100% Manual PoC Verification",
  "Zero False-Positive Tolerance",
  "CVSS 3.1 Severity Standards",
  "Free Retesting Validation",
];

const serviceCards = [
  {
    Icon: HiGlobeAlt,
    num: "01",
    title: "Web Application Security",
    tag: "OWASP TOP 10",
    desc: "Identify vulnerabilities in web apps across authentication, authorization, input handling, and business logic.",
    threats: ["SQLi", "XSS", "IDOR", "CSRF"],
    severity: "CVSS 9.8 MITIGATION",
  },
  {
    Icon: HiServer,
    num: "02",
    title: "REST API Security",
    tag: "MICROSERVICES",
    desc: "Assess APIs for authentication flaws, broken access control (BOLA/BFLA), input validation, and rate-limiting.",
    threats: ["BOLA", "JWT Flaws", "BFLA", "Rate Limit"],
    severity: "API SHIELDING",
  },
  {
    Icon: HiDevicePhoneMobile,
    num: "03",
    title: "Mobile Security Testing",
    tag: "ANDROID & IOS",
    desc: "Comprehensive testing covering APK analysis, insecure local storage, certificate pinning, and background APIs.",
    threats: ["MobSF", "Frida Bypass", "Cert Pinning"],
    severity: "RUNTIME HARDENING",
  },
  {
    Icon: HiShieldExclamation,
    num: "04",
    title: "Network Pen Testing",
    tag: "INFRASTRUCTURE",
    desc: "Identify exposed services, misconfigurations, and network-level security weaknesses across target scope.",
    threats: ["Port Audits", "Misconfigs", "Patch Review"],
    severity: "PERIMETER DEFENSE",
  },
];

const clientProfiles = [
  {
    title: "SaaS & Web Platforms",
    scope: "Web Apps & Customer APIs",
    desc: "Pre-launch and recurring audits before production releases to prevent tenant leaks.",
    tag: "SAAS",
  },
  {
    title: "FinTech & Payments",
    scope: "Financial APIs & Logic",
    desc: "Rigorous testing of auth, balance manipulations, BOLA, and transaction integrity.",
    tag: "FINTECH",
  },
  {
    title: "Mobile App Teams",
    scope: "Android & iOS Apps",
    desc: "Testing APK reversing, insecure local storage, certificate pinning, and backend APIs.",
    tag: "MOBILE",
  },
  {
    title: "Startups & Scale-ups",
    scope: "Rapid Product Scope",
    desc: "Tailored security assessments designed around your product roadmap and MVP infrastructure.",
    tag: "STARTUPS",
  },
  {
    title: "Dev & Engineering",
    scope: "Secure Code & Remediation",
    desc: "Clear developer-friendly remediation guidance with actionable PoCs to speed up fixes.",
    tag: "DEV TEAMS",
  },
  {
    title: "Healthcare & Tech",
    scope: "PII & Access Control",
    desc: "Ensuring sensitive customer records cannot be harvested by unauthorized actors.",
    tag: "HEALTHCARE",
  },
];

const vulnerabilityMatrix = [
  { name: "Broken Object Level Auth (BOLA)", severity: "CRITICAL" },
  { name: "SQL & Command Injection", severity: "CRITICAL" },
  { name: "Broken Authentication / JWT", severity: "HIGH" },
  { name: "Cross-Site Scripting (XSS)", severity: "HIGH" },
  { name: "Insecure Direct Object Reference", severity: "HIGH" },
  { name: "Server-Side Request Forgery (SSRF)", severity: "HIGH" },
  { name: "Mass Assignment & Tampering", severity: "MEDIUM" },
  { name: "API Rate-Limiting Flaws", severity: "MEDIUM" },
  { name: "Insecure Local Storage", severity: "HIGH" },
  { name: "Certificate Pinning Bypass", severity: "MEDIUM" },
  { name: "Security Misconfiguration", severity: "HIGH" },
  { name: "Business Logic Vulnerabilities", severity: "HIGH" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<
    "services" | "whoIHelp" | "problems"
  >("services");

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative px-6 sm:px-12 xl:px-16 overflow-hidden bg-primary/40">
      <CyberAtmosphere
        watermarkText="SECURITY SERVICES"
        sectionCode="02 // TESTING SCOPE & AUDITING"
      />
      <Circles />

      {/* Main Container with generous right padding to keep safe from Floating Nav */}
      <div className="container mx-auto h-full max-h-[88vh] flex flex-col justify-center z-10 py-4 pr-6 sm:pr-10 xl:pr-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 2xl:gap-10 items-center min-w-0">
          {/* Left Column: Mission, Key Pillars, Tabs, CTA (5 cols) */}
          <div className="xl:col-span-5 flex flex-col justify-center text-center xl:text-left">
            {/* Top Telemetry Badge */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-xs font-mono text-[#f13024] w-max mx-auto xl:mx-0 mb-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-pulse" />
              <span>OFFENSIVE AUDITING & DEFENSE SUITE</span>
            </motion.div>

            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="h2 text-[26px] sm:text-[34px] xl:text-[38px] 2xl:text-[42px] mb-2 leading-tight"
            >
              Security services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="mb-4 max-w-lg mx-auto xl:mx-0 text-xs sm:text-[13px] text-white/70 font-light leading-relaxed"
            >
              Comprehensive security testing designed to discover real-world vulnerabilities across applications, APIs, and infrastructure before attackers exploit them.
            </motion.p>

            {/* 4 Cyber Quality Pillars */}
            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="grid grid-cols-2 gap-2 mb-4 text-left"
            >
              {qualityPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-white/80"
                >
                  <HiShieldCheck className="text-accent text-sm shrink-0" />
                  <span className="truncate">{pillar}</span>
                </div>
              ))}
            </motion.div>

            {/* Navigation Tabs Dock */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="flex items-center justify-center xl:justify-start gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10 w-max mx-auto xl:mx-0 mb-4 font-mono text-xs"
            >
              <button
                onClick={() => setActiveTab("services")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer text-xs ${
                  activeTab === "services"
                    ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab("whoIHelp")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer text-xs ${
                  activeTab === "whoIHelp"
                    ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Who I Help
              </button>
              <button
                onClick={() => setActiveTab("problems")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer text-xs ${
                  activeTab === "problems"
                    ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Risk Matrix
              </button>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="flex items-center justify-center xl:justify-start gap-3"
            >
              <Link
                href="#contact"
                onClick={handleScrollToContact}
                className="btn rounded-full border border-white/40 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent hover:text-accent font-light text-xs uppercase tracking-wider"
              >
                Request Scope
              </Link>
              <div className="text-[10px] font-mono text-white/40">
                {"// CONFIDENTIAL TESTING"}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Perfectly Balanced 2x2 Services Grid (7 cols) */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="xl:col-span-7 w-full min-w-0 flex flex-col justify-center"
          >
            {/* Tab 1: Clean 2x2 Cyber Services Grid — No Overflow, Fully Visible */}
            {activeTab === "services" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
                {serviceCards.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-black/50 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#f13024]/70 hover:shadow-[0_0_25px_rgba(241,48,36,0.25)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Corner Crosshairs */}
                    <span className="absolute top-1.5 left-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>
                    <span className="absolute top-1.5 right-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>

                    <div>
                      {/* Card Header: Icon, Number, Tag */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/15 flex items-center justify-center text-accent text-xl group-hover:scale-110 group-hover:border-accent/60 transition-transform">
                          <service.Icon aria-hidden />
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-mono text-xs text-white/40 font-bold">
                            {service.num}
                          </span>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-full bg-[#f13024]/20 text-[#f13024] border border-[#f13024]/40 font-semibold mt-0.5">
                            {service.tag}
                          </span>
                        </div>
                      </div>

                      {/* Title & Severity */}
                      <div className="text-sm sm:text-base font-bold text-white group-hover:text-accent transition-colors leading-snug mb-1">
                        {service.title}
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-white/70 font-light leading-relaxed mb-2.5 line-clamp-2">
                        {service.desc}
                      </p>

                      {/* Threat Tags */}
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {service.threats.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-white/80 group-hover:border-accent/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <a
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-accent hover:text-white transition-colors"
                    >
                      <span className="font-semibold text-[11px]">Request Audit</span>
                      <HiArrowUpRight className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tab 2: Who I Help Grid */}
            {activeTab === "whoIHelp" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1 text-left">
                {clientProfiles.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3.5 hover:border-[#f13024]/60 hover:shadow-[0_0_20px_rgba(241,48,36,0.2)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#f13024]/20 border border-[#f13024]/40 text-[#f13024] font-bold">
                          {item.tag}
                        </span>
                        <HiCheckCircle className="text-accent text-base" />
                      </div>
                      <div className="text-xs font-bold text-white mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-[9px] font-mono text-accent mb-1.5">
                        SCOPE: {item.scope}
                      </div>
                      <p className="text-[10px] text-white/70 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tab 3: Interactive Risk Diagnostic Matrix */}
            {activeTab === "problems" && (
              <div className="bg-gradient-to-br from-white/[0.08] to-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-left max-h-[380px] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                  <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase font-bold">
                    <HiExclamationTriangle className="text-base" />
                    <span>Attack Surface Vulnerability Matrix</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/50">
                    OWASP & NIST BENCHMARK
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {vulnerabilityMatrix.map((vuln, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="p-2 rounded-lg bg-black/50 border border-white/10 hover:border-accent/60 hover:bg-[#f13024]/10 transition-all flex items-center justify-between group"
                    >
                      <div className="text-[11px] text-white/90 group-hover:text-white font-medium truncate pr-2">
                        {vuln.name}
                      </div>
                      <span
                        className={`font-mono text-[9px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                          vuln.severity === "CRITICAL"
                            ? "bg-[#f13024]/30 text-[#f13024] border border-[#f13024]/50"
                            : vuln.severity === "HIGH"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {vuln.severity}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

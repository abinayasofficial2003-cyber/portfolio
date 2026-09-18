"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Brand & Tactical Icons
import {
  SiOwasp,
  SiJsonwebtokens,
  SiAndroid,
  SiFlutter,
  SiWireshark,
  SiKalilinux,
  SiGithubactions,
  SiGit,
  SiBurpsuite,
  SiPython,
  SiLinux,
  SiDocker,
} from "react-icons/si";

import {
  FaAws,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaCode,
  FaTerminal,
  FaBug,
  FaNetworkWired,
  FaKey,
  FaShieldAlt,
  FaServer,
  FaProjectDiagram,
  FaBoxes,
  FaHdd,
  FaFolderOpen,
  FaFireExtinguisher,
} from "react-icons/fa";

import {
  HiFingerPrint,
  HiCpuChip,
  HiBolt,
  HiArrowPath,
  HiShieldCheck,
  HiSparkles,
  HiExclamationTriangle,
  HiEye,
  HiDevicePhoneMobile,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";

import Circles from "@/components/Circles";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

export interface CyberSkill {
  id: string;
  name: string;
  shortName: string;
  category:
  | "Web & API Security"
  | "Mobile Security"
  | "Network Security"
  | "Cloud Security"
  | "Threat Modeling"
  | "DevSecOps"
  | "Security Tools"
  | "Programming & Platforms"
  | "Security Monitoring";
  color: string;
  Icon: React.ElementType;
  vector: string;
  description: string;
}

// 51 Combat Assets grouped into 6 graceful delta rows
export const SKILL_ROWS: CyberSkill[][] = [
  // ROW 1: 11 Items - Web & API Security + Flagship Interceptors
  [
    {
      id: "owasp",
      name: "OWASP Top 10",
      shortName: "OWASP",
      category: "Web & API Security",
      color: "#ffffff",
      Icon: SiOwasp,
      vector: "Top 10 Benchmark",
      description: "Validation against OWASP Top 10 web & API application vulnerabilities.",
    },
    {
      id: "burp",
      name: "Burp Suite Pro",
      shortName: "Burp Suite",
      category: "Security Tools",
      color: "#ff6633",
      Icon: SiBurpsuite,
      vector: "HTTP Interceptor",
      description: "Flagship web proxy, custom extensions, Repeater, and Intruder attacks.",
    },
    {
      id: "auth",
      name: "Auth & Access",
      shortName: "Auth",
      category: "Web & API Security",
      color: "#f13024",
      Icon: FaLock,
      vector: "Broken Access",
      description: "Authentication bypasses, MFA flaws, session hijacking, and privilege escalation.",
    },
    {
      id: "idor",
      name: "IDOR / BOLA",
      shortName: "IDOR",
      category: "Web & API Security",
      color: "#ec4899",
      Icon: HiFingerPrint,
      vector: "Object Authorization",
      description: "Insecure Direct Object References and Broken Object Level Authorization.",
    },
    {
      id: "sqli",
      name: "SQL Injection",
      shortName: "SQLi",
      category: "Web & API Security",
      color: "#38bdf8",
      Icon: FaDatabase,
      vector: "DB Injection",
      description: "Blind, boolean, time-based, and union-based SQL injection exploitation.",
    },
    {
      id: "xss",
      name: "Cross-Site Scripting",
      shortName: "XSS",
      category: "Web & API Security",
      color: "#f59e0b",
      Icon: FaCode,
      vector: "Client-Side Exec",
      description: "Reflected, Stored, and DOM-based XSS payload crafting and CSP evasion.",
    },
    {
      id: "csrf",
      name: "CSRF Defense",
      shortName: "CSRF",
      category: "Web & API Security",
      color: "#a855f7",
      Icon: HiArrowPath,
      vector: "Request Forgery",
      description: "Cross-Site Request Forgery bypass via anti-CSRF token manipulation.",
    },
    {
      id: "jwt",
      name: "JWT Security",
      shortName: "JWT",
      category: "Web & API Security",
      color: "#d63aff",
      Icon: SiJsonwebtokens,
      vector: "Token Tampering",
      description: "None-algorithm exploits, secret key brute-force, and claim tampering.",
    },
    {
      id: "bizlogic",
      name: "Business Logic",
      shortName: "Biz Logic",
      category: "Web & API Security",
      color: "#ef4444",
      Icon: HiCpuChip,
      vector: "Workflow Abuse",
      description: "State manipulation, payment gateway logic bugs, and race conditions.",
    },
    {
      id: "zap",
      name: "OWASP ZAP",
      shortName: "ZAP",
      category: "Security Tools",
      color: "#0084ff",
      Icon: SiOwasp,
      vector: "Automated Scanner",
      description: "Active scan policies, automated spidering, and vulnerability detection.",
    },
    {
      id: "sqlmap",
      name: "SQLmap",
      shortName: "SQLmap",
      category: "Security Tools",
      color: "#e11d48",
      Icon: FaDatabase,
      vector: "SQL Automation",
      description: "Automated database schema extraction and query injection payloads.",
    },
  ],

  // ROW 2: 10 Items - Mobile Security, Reversing & Fuzzers
  [
    {
      id: "android",
      name: "Android OS",
      shortName: "Android",
      category: "Mobile Security",
      color: "#3ddc84",
      Icon: SiAndroid,
      vector: "Platform Security",
      description: "IPC vulnerabilities, exported component exposure, and intent injection.",
    },
    {
      id: "apk",
      name: "APK Analysis",
      shortName: "APK",
      category: "Mobile Security",
      color: "#10b981",
      Icon: FaCode,
      vector: "Static Decompile",
      description: "Jadx/apktool decompilation, Smali analysis, and manifest auditing.",
    },
    {
      id: "mobsf",
      name: "MobSF Framework",
      shortName: "MobSF",
      category: "Mobile Security",
      color: "#06b6d4",
      Icon: HiDevicePhoneMobile,
      vector: "Automated Audit",
      description: "Static and dynamic security analysis of mobile binaries and APIs.",
    },
    {
      id: "frida",
      name: "Frida Hooking",
      shortName: "Frida",
      category: "Mobile Security",
      color: "#e11d48",
      Icon: HiBolt,
      vector: "Runtime Hook",
      description: "Dynamic binary instrumentation, function hooking, and memory tampering.",
    },
    {
      id: "adb",
      name: "ADB Bridge",
      shortName: "ADB",
      category: "Mobile Security",
      color: "#8b5cf6",
      Icon: FaTerminal,
      vector: "Bridge Shell",
      description: "Device shell automation, logcat inspection, and app container auditing.",
    },
    {
      id: "sslpin",
      name: "SSL Pinning",
      shortName: "SSL Pin",
      category: "Mobile Security",
      color: "#f59e0b",
      Icon: FaKey,
      vector: "Cert Pinning",
      description: "Certificate pinning validation and dynamic bypass using Frida scripts.",
    },
    {
      id: "root",
      name: "Root Detection",
      shortName: "Root Detect",
      category: "Mobile Security",
      color: "#ec4899",
      Icon: FaShieldAlt,
      vector: "Tamper Evasion",
      description: "Evasion audits for Magisk Hide, SafetyNet, and hardware attestation.",
    },
    {
      id: "flutter",
      name: "Flutter Mobile",
      shortName: "Flutter",
      category: "Mobile Security",
      color: "#47c5fb",
      Icon: SiFlutter,
      vector: "Dart Binary",
      description: "Dart snapshot reverse engineering and proxy routing interception.",
    },
    {
      id: "ffuf",
      name: "ffuf Fuzzer",
      shortName: "ffuf",
      category: "Security Tools",
      color: "#10b981",
      Icon: FaTerminal,
      vector: "Fast Fuzzing",
      description: "High-speed directory, virtual host, and parameter discovery.",
    },
    {
      id: "gobuster",
      name: "Gobuster",
      shortName: "Gobuster",
      category: "Security Tools",
      color: "#a855f7",
      Icon: FaFolderOpen,
      vector: "Brute-force",
      description: "URI and DNS subdomain brute-forcing using custom wordlists.",
    },
  ],

  // ROW 3: 9 Items - Network & Cloud Security
  [
    {
      id: "nikto",
      name: "Nikto Scanner",
      shortName: "Nikto",
      category: "Security Tools",
      color: "#f59e0b",
      Icon: FaServer,
      vector: "Server Audit",
      description: "Web server configuration checks, dangerous files, and header review.",
    },
    {
      id: "nmap",
      name: "Nmap Scanner",
      shortName: "Nmap",
      category: "Network Security",
      color: "#3b82f6",
      Icon: FaNetworkWired,
      vector: "Port Mapping",
      description: "Port scanning, service enumeration, OS detection, and NSE scripting.",
    },
    {
      id: "nessus",
      name: "Nessus Scanner",
      shortName: "Nessus",
      category: "Network Security",
      color: "#22c55e",
      Icon: HiShieldCheck,
      vector: "Enterprise Scan",
      description: "Enterprise network vulnerability scanning and patch validation.",
    },
    {
      id: "openvas",
      name: "OpenVAS",
      shortName: "OpenVAS",
      category: "Network Security",
      color: "#14b8a6",
      Icon: FaServer,
      vector: "Open Scanner",
      description: "Open-source network risk auditing and unauthenticated service audits.",
    },
    {
      id: "wireshark",
      name: "Wireshark",
      shortName: "Wireshark",
      category: "Network Security",
      color: "#1679a7",
      Icon: SiWireshark,
      vector: "Packet Dissect",
      description: "Deep packet inspection, cleartext credential capture, and protocol triage.",
    },
    {
      id: "metasploit",
      name: "Metasploit",
      shortName: "Metasploit",
      category: "Network Security",
      color: "#ef4444",
      Icon: SiKalilinux,
      vector: "Exploit PoC",
      description: "Exploit payload delivery, listener verification, and post-exploitation.",
    },
    {
      id: "aws",
      name: "AWS Security",
      shortName: "AWS",
      category: "Cloud Security",
      color: "#ff9900",
      Icon: FaAws,
      vector: "Cloud Infra",
      description: "VPC architecture security, security groups, and trust policy reviews.",
    },
    {
      id: "iam",
      name: "IAM Privilege",
      shortName: "IAM",
      category: "Cloud Security",
      color: "#f59e0b",
      Icon: FaUserShield,
      vector: "Privilege Escalation",
      description: "Auditing overprivileged roles, policy wildcards, and identity leaks.",
    },
    {
      id: "s3",
      name: "S3 Storage",
      shortName: "S3",
      category: "Cloud Security",
      color: "#e11d48",
      Icon: FaServer,
      vector: "Bucket Leaks",
      description: "S3 public exposure, ACL policies, and encryption-at-rest checks.",
    },
  ],

  // ROW 4: 8 Items - Cloud, Threat Modeling & DevSecOps
  [
    {
      id: "ebs",
      name: "EBS Volumes",
      shortName: "EBS",
      category: "Cloud Security",
      color: "#8b5cf6",
      Icon: FaHdd,
      vector: "Volume Crypto",
      description: "Unencrypted EBS volume snapshots and unattached disk exposures.",
    },
    {
      id: "awscli",
      name: "AWS CLI",
      shortName: "AWS CLI",
      category: "Cloud Security",
      color: "#f13024",
      Icon: FaTerminal,
      vector: "CLI Telemetry",
      description: "Automated configuration auditing and STS session token validation.",
    },
    {
      id: "ssrf",
      name: "SSRF Defense",
      shortName: "SSRF",
      category: "Cloud Security",
      color: "#ec4899",
      Icon: HiArrowTopRightOnSquare,
      vector: "IMDSv2 Exfil",
      description: "Server-Side Request Forgery mitigation targeting cloud metadata.",
    },
    {
      id: "stride",
      name: "STRIDE Modeling",
      shortName: "STRIDE",
      category: "Threat Modeling",
      color: "#f13024",
      Icon: FaShieldAlt,
      vector: "Threat Framework",
      description: "Systematic modeling: Spoofing, Tampering, Info Disclosure, Elevation.",
    },
    {
      id: "dfd",
      name: "DFD Architecture",
      shortName: "DFD",
      category: "Threat Modeling",
      color: "#3b82f6",
      Icon: FaProjectDiagram,
      vector: "Data Flow Map",
      description: "Mapping process flows, data stores, and trust transition zones.",
    },
    {
      id: "trust",
      name: "Trust Boundaries",
      shortName: "Trust Bounds",
      category: "Threat Modeling",
      color: "#a855f7",
      Icon: HiEye,
      vector: "Boundary Control",
      description: "Demarcation lines where untrusted input transitions to internal tiers.",
    },
    {
      id: "risk",
      name: "Risk Assessment",
      shortName: "Risk Assess",
      category: "Threat Modeling",
      color: "#f59e0b",
      Icon: HiExclamationTriangle,
      vector: "CVSS Severity",
      description: "Evaluating exploit likelihood and business impact for prioritized fixes.",
    },
    {
      id: "sast",
      name: "SAST Code Scan",
      shortName: "SAST",
      category: "DevSecOps",
      color: "#06b6d4",
      Icon: FaCode,
      vector: "Static Analysis",
      description: "Scanning source repositories for insecure functions and SQL/XSS flaws.",
    },
  ],

  // ROW 5: 8 Items - DevSecOps, Platforms & Monitoring
  [
    {
      id: "dast",
      name: "DAST Runtime",
      shortName: "DAST",
      category: "DevSecOps",
      color: "#e11d48",
      Icon: FaBug,
      vector: "Dynamic Scan",
      description: "Dynamic black-box vulnerability testing of live staging applications.",
    },
    {
      id: "sca",
      name: "SCA Dependencies",
      shortName: "SCA",
      category: "DevSecOps",
      color: "#f59e0b",
      Icon: FaBoxes,
      vector: "Supply Chain",
      description: "Scanning open-source packages for known public vulnerabilities & CVEs.",
    },
    {
      id: "secrets",
      name: "Secrets Detection",
      shortName: "Secrets",
      category: "DevSecOps",
      color: "#ec4899",
      Icon: FaKey,
      vector: "Credential Leaks",
      description: "Hunting hardcoded API keys, private certificates, and passwords.",
    },
    {
      id: "cicd",
      name: "CI/CD Gates",
      shortName: "CI/CD",
      category: "DevSecOps",
      color: "#2088ff",
      Icon: SiGithubactions,
      vector: "Pipeline Gates",
      description: "Automated security quality gates blocking vulnerable builds.",
    },
    {
      id: "trivy",
      name: "Trivy Scanner",
      shortName: "Trivy",
      category: "DevSecOps",
      color: "#38bdf8",
      Icon: SiDocker,
      vector: "Container Scan",
      description: "Vulnerability scanning across Docker layers and OS packages.",
    },
    {
      id: "gitleaks",
      name: "Gitleaks",
      shortName: "Gitleaks",
      category: "DevSecOps",
      color: "#f05032",
      Icon: SiGit,
      vector: "Git History",
      description: "Deep scanning of Git commits and pull requests for exposed secrets.",
    },
    {
      id: "python",
      name: "Python Automation",
      shortName: "Python",
      category: "Programming & Platforms",
      color: "#ffd438",
      Icon: SiPython,
      vector: "Exploit Scripts",
      description: "Developing custom exploit scripts, API fuzzers, and crypto tooling.",
    },
    {
      id: "linux",
      name: "Linux Systems",
      shortName: "Linux",
      category: "Programming & Platforms",
      color: "#fcc624",
      Icon: SiLinux,
      vector: "Core OS",
      description: "Operating system internals, bash scripting, and permission models.",
    },
  ],

  // ROW 6: 5 Items - Platforms & Security Monitoring
  [
    {
      id: "git",
      name: "Git VCS",
      shortName: "Git",
      category: "Programming & Platforms",
      color: "#f05032",
      Icon: SiGit,
      vector: "VCS Hardening",
      description: "Version control security, signed commits, and repository auditing.",
    },
    {
      id: "docker",
      name: "Docker Containers",
      shortName: "Docker",
      category: "Programming & Platforms",
      color: "#2496ed",
      Icon: SiDocker,
      vector: "Container Sec",
      description: "Container isolation, rootless setups, Dockerfile hardening, socket security.",
    },
    {
      id: "logrhythm",
      name: "LogRhythm SIEM",
      shortName: "SIEM",
      category: "Security Monitoring",
      color: "#38bdf8",
      Icon: HiEye,
      vector: "Enterprise SIEM",
      description: "Log aggregation, correlation rule tuning, and incident triage.",
    },
    {
      id: "waf",
      name: "WAF Logs",
      shortName: "WAF Logs",
      category: "Security Monitoring",
      color: "#ef4444",
      Icon: FaFireExtinguisher,
      vector: "Firewall Telemetry",
      description: "Web application firewall telemetry analysis and rule tuning.",
    },
    {
      id: "secanalysis",
      name: "Security Analysis",
      shortName: "Analysis",
      category: "Security Monitoring",
      color: "#a855f7",
      Icon: HiSparkles,
      vector: "Threat Triage",
      description: "Investigating anomaly indicators and correlating multi-stage attack patterns.",
    },
  ],
];

export const CATEGORIES = [
  { id: "ALL", label: "All (45)" },
  { id: "Web & API Security", label: "Web & API" },
  { id: "Mobile Security", label: "Mobile" },
  { id: "Network Security", label: "Network" },
  { id: "Cloud Security", label: "Cloud" },
  { id: "Threat Modeling", label: "Threat Model" },
  { id: "DevSecOps", label: "DevSecOps" },
  { id: "Security Tools", label: "Tools" },
  { id: "Programming & Platforms", label: "Platforms" },
  { id: "Security Monitoring", label: "Monitoring" },
] as const;

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<CyberSkill | null>(null);

  return (
    <div className="w-full h-full flex items-center justify-center relative px-4 sm:px-8 xl:px-14 overflow-hidden select-none bg-primary/50">
      <CyberAtmosphere
        watermarkText="CYBER ARSENAL"
        sectionCode="02 // COMBAT-VERIFIED ARSENAL"
      />
      <Circles />

      {/* Main Foreground Container */}
      <div className="container mx-auto h-full max-h-[96vh] flex flex-col justify-between items-center z-10 pt-16 sm:pt-18 xl:pt-20 pb-3">
        {/* COMPACT STREAMLINED HEADER */}
        <div className="text-center max-w-3xl mx-auto w-full">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1 mb-1"
          >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight">
              Securing systems with <span className="text-accent">modern technologies .</span>
            </h2>


          </motion.div>

          {/* Subtitle in Cursive / Serif Style */}
          <motion.p
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xs sm:text-[13px] text-white/60 italic font-serif tracking-wide mb-2"
          >
            Never miss a vulnerability, exploit or threat vector.
          </motion.p>

          {/* SLEEK PERFECTLY BALANCED CATEGORY FILTER PILLS */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-4xl mx-auto px-2 mb-1"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-300 cursor-pointer border ${isSelected
                      ? "bg-[#f13024] text-white font-semibold border-[#f13024] shadow-[0_0_15px_rgba(241,48,36,0.6)]"
                      : "bg-black/60 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 border-white/10"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* PROMINENT ENLARGED FLOATING ICON MATRIX (SPACE-PORTFOLIO DELTA PYRAMID) */}
        <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 xl:gap-3.5 w-full max-w-5xl mx-auto my-auto relative">
          {SKILL_ROWS.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: rowIdx * 0.06 }}
              className="flex items-center justify-center gap-2 sm:gap-3 xl:gap-3.5 flex-wrap"
            >
              {row.map((skill) => {
                const IconComponent = skill.Icon;
                const isMatch =
                  activeCategory === "ALL" || skill.category === activeCategory;
                const isHovered = hoveredSkill?.id === skill.id;

                return (
                  <div
                    key={skill.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* ENLARGED Floating Cyber Icon Badge */}
                    <motion.div
                      animate={{
                        opacity: isMatch ? 1 : 0.2,
                        scale: isHovered ? 1.25 : isMatch ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.18 }}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 xl:w-15 xl:h-15 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md border ${isHovered
                          ? "bg-black/95 border-[#f13024] shadow-[0_0_30px_rgba(241,48,36,0.9)] z-30"
                          : isMatch
                            ? "bg-black/55 border-white/15 hover:border-white/40 shadow-[0_6px_20px_rgba(0,0,0,0.6)] z-10"
                            : "bg-black/30 border-white/5 grayscale"
                        }`}
                    >
                      {/* Icon */}
                      <IconComponent
                        style={{ color: isHovered ? "#ffffff" : skill.color }}
                        className="text-2xl sm:text-2xl xl:text-3xl transition-transform duration-200 group-hover:scale-110"
                      />

                      {/* Crisp label below icon */}
                      <span className="text-[9px] sm:text-[10px] font-mono text-white/80 mt-1 truncate max-w-[44px] sm:max-w-[50px] text-center leading-none">
                        {skill.shortName}
                      </span>
                    </motion.div>

                    {/* Interactive Floating Holographic HUD Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.12 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-60 sm:w-68 p-3 rounded-xl bg-black/95 border border-[#f13024]/70 shadow-[0_10px_35px_rgba(241,48,36,0.5)] pointer-events-none z-50 text-left backdrop-blur-xl"
                        >
                          <div className="flex items-center justify-between gap-1 mb-1 border-b border-white/10 pb-1">
                            <span className="font-bold text-white text-xs font-sora flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                              {skill.name}
                            </span>
                            <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-accent/20 border border-accent/40 text-accent">
                              {skill.vector}
                            </span>
                          </div>

                          <div className="text-[10px] font-mono text-white/50 mb-1">
                            {skill.category}
                          </div>

                          <p className="text-[11px] text-white/80 font-light leading-snug">
                            {skill.description}
                          </p>

                          {/* Tooltip Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-solid border-t-black/95 border-t-6 border-x-transparent border-x-6 border-b-0" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* BOTTOM REAL-TIME TELEMETRY HUD BAR */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="py-1.5 px-4 rounded-full bg-black/75 border border-white/10 backdrop-blur-xl flex items-center justify-between font-mono text-[10px] text-white/60 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            {hoveredSkill ? (
              <div className="flex items-center gap-2 truncate text-white">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" />
                <span className="font-bold text-accent shrink-0">
                  {hoveredSkill.name.toUpperCase()}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 truncate">
                  {hoveredSkill.description}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3 truncate">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  FIREWALL ACTIVE
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 truncate">
                  Incoming attack vectors deflected • Hover over any asset to inspect capability
                </span>
              </div>
            )}

            <div className="hidden sm:flex items-center gap-3 shrink-0 text-white/50 font-mono text-[9px]">
              <span className="text-accent font-semibold">100% MANUAL PoC</span>
              <span>•</span>
              <span className="text-emerald-400">ZERO FALSE POSITIVES</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

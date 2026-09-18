"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  HiEnvelope,
  HiPhone,
  HiShieldCheck,
  HiGlobeAlt,
  HiServer,
  HiDevicePhoneMobile,
  HiCloud,
  HiCommandLine,
  HiCheckBadge,
  HiArrowUpRight,
  HiLockClosed,
  HiClipboardDocument,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import CyberAtmosphere from "@/components/CyberAtmosphere";
import CyberVault3D from "@/components/CyberVault3D";
import { fadeIn } from "@/variants";

const SCOPES = [
  { id: "Web Application", label: "Web App (OWASP)", icon: HiGlobeAlt, tag: "SQLi / XSS" },
  { id: "REST API", label: "REST / GraphQL API", icon: HiServer, tag: "BOLA / JWT" },
  { id: "Mobile App", label: "Mobile App Sec", icon: HiDevicePhoneMobile, tag: "Android / iOS" },
  { id: "Cloud & AWS", label: "Cloud & AWS Audit", icon: HiCloud, tag: "IAM / S3" },
  { id: "Network", label: "Network Pentest", icon: HiCommandLine, tag: "Perimeter" },
  { id: "Retest Validation", label: "Retesting Validation", icon: HiCheckBadge, tag: "Remediation" },
];

const APPROACHES = [
  { id: "Grey Box", label: "Grey Box (Recommended)", desc: "Authenticated multi-role security testing" },
  { id: "Black Box", label: "Black Box", desc: "Zero-knowledge external attack simulation" },
  { id: "White Box", label: "White Box / Audit", desc: "Source code review and architecture analysis" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    url: "",
    approach: "Grey Box",
    services: ["Web Application", "REST API"] as string[],
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [dispatchStep, setDispatchStep] = useState(0);
  const [terminalTime, setTerminalTime] = useState("");

  // Live Terminal Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTerminalTime(
        now.toTimeString().split(" ")[0] + " // " + now.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleScope = (scopeId: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(scopeId)
        ? prev.services.filter((s) => s !== scopeId)
        : [...prev.services, scopeId],
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abinayaselsa@gmail.com");
    setCopiedEmail(true);
    toast.success("Direct email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      toast.error("Operator name required (min 2 characters)");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Valid business email required");
      return;
    }

    if (form.message.trim().length < 5) {
      toast.error("Please provide requirement description (min 5 characters)");
      return;
    }

    setIsLoading(true);
    setDispatchStep(1);

    // Multi-step dispatch animation
    setTimeout(() => setDispatchStep(2), 500);

    try {
      const payload = {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        url: form.url,
        services: [`[Approach: ${form.approach}]`, ...form.services],
        message: form.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setDispatchStep(3);
        toast.success("Assessment dispatch sent! Check your email for confirmation.");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          url: "",
          approach: "Grey Box",
          services: ["Web Application"],
          message: "",
        });
      } else {
        toast.error(data?.error || "Dispatch failed. Please email directly to abinayaselsa@gmail.com");
      }
    } catch {
      toast.error("Network error. Please email abinayaselsa@gmail.com directly.");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setDispatchStep(0);
      }, 1200);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative px-3 sm:px-6 xl:px-12 overflow-hidden">
      <CyberAtmosphere
        watermarkText="ENGAGEMENT INTAKE"
        sectionCode="06 // SEC-OPS COMMAND DISPATCH"
      />

      <div className="container mx-auto h-full max-h-[92vh] flex flex-col justify-center z-10 pt-16 sm:pt-20 pb-2">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-8 items-center">
          {/* ================= LEFT COLUMN: TACTICAL TELEMETRY & 3D VAULT ================= */}
          <motion.div
            variants={fadeIn("right", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4"
          >
            {/* Tactical Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f13024]/10 border border-[#f13024]/35 text-[11px] font-mono text-[#f13024] w-max shadow-[0_0_15px_rgba(241,48,36,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#f13024] animate-pulse" />
              <span className="tracking-wide">ENCRYPTED UPLINK // CHANNEL-07</span>
            </div>

            {/* High-Impact Headline */}
            <div>
              <h2 className="text-[22px] sm:text-[28px] xl:text-[34px] font-bold tracking-tight text-white leading-tight">
                Initiate Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f13024] via-[#ff6854] to-[#f13024]">
                  Assessment Dispatch.
                </span>
              </h2>
              <p className="text-white/60 text-xs sm:text-[13px] font-light leading-relaxed mt-1.5 max-w-md">
                Deploy manual penetration testing, API vulnerability discovery, and cloud security audits. All engagements operate under strict NDA.
              </p>
            </div>

            {/* 3D Interactive Cyber Vault Widget */}
            <CyberVault3D />

            {/* Direct Comms Channels (1-Click Copy & WhatsApp Quick Chat) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {/* Email Card with 1-Click Copy */}
              <div
                onClick={handleCopyEmail}
                className="group relative p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-accent/60 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider flex items-center gap-1">
                    <HiEnvelope className="text-accent text-xs" /> DIRECT EMAIL
                  </span>
                  {copiedEmail ? (
                    <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-0.5">
                      <HiClipboardDocumentCheck /> COPIED
                    </span>
                  ) : (
                    <HiClipboardDocument className="text-white/40 group-hover:text-accent text-xs transition-colors" />
                  )}
                </div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-white group-hover:text-accent truncate transition-colors mt-1">
                  abinayaselsa@gmail.com
                </div>
                <div className="text-[9px] font-mono text-white/40 mt-0.5">
                  Click to copy address
                </div>
              </div>

              {/* WhatsApp Direct Chat */}
              <a
                href="https://wa.me/919150553911?text=Hi%20Abinaya,%20I%20would%20like%20to%20request%20a%20security%20assessment%20consultation."
                target="_blank"
                rel="noreferrer noopener"
                className="group relative p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-emerald-500/60 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider flex items-center gap-1">
                    <FaWhatsapp className="text-emerald-400 text-xs" /> SECURE CHAT
                  </span>
                  <HiArrowUpRight className="text-white/40 group-hover:text-emerald-400 text-xs transition-colors" />
                </div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-white group-hover:text-emerald-400 truncate transition-colors mt-1">
                  +91 9150553911
                </div>
                <div className="text-[9px] font-mono text-white/40 mt-0.5">
                  Signal / WhatsApp Direct
                </div>
              </a>
            </div>

            {/* Engagement Guarantees */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 text-[10px] font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <HiShieldCheck className="text-accent text-xs" /> Mutual NDA First
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <HiLockClosed className="text-accent text-xs" /> 100% Manual PoC
              </span>
              <span className="text-white/20">•</span>
              <span className="text-emerald-400 font-semibold">&lt; 24h SLA</span>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: MIL-SPEC DISPATCH TERMINAL ================= */}
          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:col-span-7 w-full"
          >
            <div className="relative rounded-2xl bg-[#110e20]/90 backdrop-blur-2xl border border-white/15 p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_0_25px_rgba(241,48,36,0.06)] overflow-hidden">
              {/* Futuristic Corner Tech Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />

              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f13024] inline-block shadow-[0_0_6px_#f13024]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block opacity-80" />
                  </div>
                  <span className="text-white/70 font-semibold pl-2 border-l border-white/10 hidden sm:inline">
                    AEGIS // ASSESSMENT_DISPATCH_CONSOLE
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white/50">
                  <span className="text-emerald-400 font-mono hidden sm:inline">
                    TLS 1.3 ACTIVE
                  </span>
                  <span className="text-white/40">{terminalTime || "LIVE TELEMETRY"}</span>
                </div>
              </div>

              {/* Intake Form Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* 1. Testing Approach Selector (Tabs) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                      Select Testing Methodology:
                    </span>
                    <span className="text-[9px] font-mono text-accent">
                      {APPROACHES.find((a) => a.id === form.approach)?.desc}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    {APPROACHES.map((appr) => {
                      const active = form.approach === appr.id;
                      return (
                        <button
                          key={appr.id}
                          type="button"
                          onClick={() => setForm({ ...form, approach: appr.id })}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-mono transition-all text-center border cursor-pointer ${
                            active
                              ? "bg-accent/20 border-accent text-white font-bold shadow-[0_0_12px_rgba(241,48,36,0.3)]"
                              : "bg-black/40 border-white/10 text-white/50 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {appr.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Two-Column Input Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="relative">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-0.5">
                      CLIENT_OPERATOR *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      disabled={isLoading}
                      className="w-full h-8 sm:h-9 px-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent text-white placeholder-white/25 text-xs font-mono outline-none transition-all focus:shadow-[0_0_10px_rgba(241,48,36,0.25)]"
                    />
                  </div>

                  <div className="relative">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-0.5">
                      ORG_OR_PROJECT
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme FinTech Corp"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      disabled={isLoading}
                      className="w-full h-8 sm:h-9 px-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent text-white placeholder-white/25 text-xs font-mono outline-none transition-all focus:shadow-[0_0_10px_rgba(241,48,36,0.25)]"
                    />
                  </div>

                  <div className="relative">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-0.5">
                      BUSINESS_EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      disabled={isLoading}
                      className="w-full h-8 sm:h-9 px-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent text-white placeholder-white/25 text-xs font-mono outline-none transition-all focus:shadow-[0_0_10px_rgba(241,48,36,0.25)]"
                    />
                  </div>

                  <div className="relative">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-0.5">
                      TARGET_URL_OR_HOST
                    </label>
                    <input
                      type="text"
                      placeholder="https://app.enterprise.com"
                      value={form.url}
                      onChange={(e) => setForm({ ...form, url: e.target.value })}
                      disabled={isLoading}
                      className="w-full h-8 sm:h-9 px-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent text-white placeholder-white/25 text-xs font-mono outline-none transition-all focus:shadow-[0_0_10px_rgba(241,48,36,0.25)]"
                    />
                  </div>
                </div>

                {/* 3. Interactive Target Scope Matrix with Live Gauge */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                      Engagement Scope Target:
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                      [{form.services.length} / {SCOPES.length} VECTORS ACTIVE]
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {SCOPES.map((scope) => {
                      const active = form.services.includes(scope.id);
                      const Icon = scope.icon;
                      return (
                        <button
                          key={scope.id}
                          type="button"
                          onClick={() => toggleScope(scope.id)}
                          className={`p-1.5 sm:p-2 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between group ${
                            active
                              ? "bg-accent/20 border-accent text-white font-semibold shadow-[0_0_12px_rgba(241,48,36,0.2)]"
                              : "bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <Icon
                              className={`text-sm ${
                                active ? "text-accent" : "text-white/40 group-hover:text-white"
                              }`}
                            />
                            <span className="text-[11px] font-mono truncate">{scope.label}</span>
                          </div>
                          <span
                            className={`text-[9px] font-mono ml-1 px-1 rounded ${
                              active ? "bg-accent text-white" : "text-white/30"
                            }`}
                          >
                            {active ? "✓" : "+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Scope Description & Objectives Console */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">
                      ASSESSMENT_OBJECTIVES_AND_SCOPE *
                    </label>
                    <span className="text-[9px] font-mono text-white/40">
                      {form.message.length} / 2000 CHARS
                    </span>
                  </div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe testing goals, user account tiers, specific API endpoints, or critical compliance timelines..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={isLoading}
                    className="w-full min-h-[64px] max-h-[85px] p-2.5 rounded-lg bg-black/50 border border-white/10 focus:border-accent text-white placeholder-white/25 text-xs font-mono outline-none transition-all focus:shadow-[0_0_10px_rgba(241,48,36,0.25)] resize-none"
                  />
                </div>

                {/* 5. Holographic Laser Dispatch Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative h-10 rounded-xl bg-gradient-to-r from-[#d62419] via-[#f13024] to-[#d62419] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/30 shadow-[0_0_20px_rgba(241,48,36,0.4)] hover:shadow-[0_0_30px_rgba(241,48,36,0.7)] transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {/* Subtle animated laser scan beam */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>
                        {dispatchStep === 1 && "ENCRYPTING PAYLOAD (AES-256)..."}
                        {dispatchStep === 2 && "CONNECTING TLS TUNNEL TO GMAIL..."}
                        {dispatchStep === 3 && "DISPATCH TRANSMITTED! ✓"}
                        {dispatchStep === 0 && "DISPATCHING BRIEF..."}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <HiLockClosed className="text-sm" />
                      <span>DISPATCH SECURITY INTAKE BRIEF</span>
                      <HiArrowUpRight className="text-sm group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

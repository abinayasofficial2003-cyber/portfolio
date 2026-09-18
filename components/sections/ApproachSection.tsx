"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { HiShieldCheck, HiDocumentText } from "react-icons/hi2";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import CyberOrb3D from "@/components/CyberOrb3D";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const workflowSteps = [
  {
    num: "01",
    title: "Scope",
    desc: "Define the application, assets, access level, and testing boundaries.",
  },
  {
    num: "02",
    title: "Discover",
    desc: "Identify attack surfaces, technologies, endpoints, and potential weaknesses.",
  },
  {
    num: "03",
    title: "Test",
    desc: "Perform manual and automated security testing based on the agreed scope.",
  },
  {
    num: "04",
    title: "Validate",
    desc: "Verify findings and assess their actual security impact.",
  },
  {
    num: "05",
    title: "Report",
    desc: "Document confirmed vulnerabilities with evidence, impact, severity, and remediation guidance.",
  },
  {
    num: "06",
    title: "Retest",
    desc: "Validate remediation where retesting is included in the engagement.",
  },
];

const frameworks = [
  { label: "OWASP TOP 10", sub: "Web Application Security" },
  { label: "OWASP API SECURITY", sub: "REST & Microservice Assessment" },
  { label: "OWASP MOBILE TOP 10", sub: "Android APK & Runtime Security" },
  { label: "STRIDE", sub: "Threat Modeling & Trust Boundaries" },
  { label: "BLACK BOX", sub: "External Zero-Knowledge Testing" },
  { label: "GREY BOX", sub: "Authenticated Multi-Role Testing" },
];

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState<
    "workflow" | "methodology" | "report" | "deliverables"
  >("workflow");

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <div className="w-full min-h-screen xl:h-full flex items-center justify-center relative px-4 sm:px-8 xl:px-16 overflow-visible xl:overflow-hidden">
      <CyberAtmosphere
        watermarkText="TESTING PIPELINE"
        sectionCode="03 // ATTACK SURFACE & AUDIT"
      />
      <Circles />

      <div className="container mx-auto h-auto min-h-screen xl:h-full xl:max-h-[92vh] flex flex-col xl:flex-row gap-x-8 items-center justify-between z-10 pt-20 sm:pt-22 xl:pt-20 pb-24 xl:pb-3">
        {/* Left Column: Heading & 3D Model */}
        <div className="flex-1 flex flex-col justify-center max-w-lg text-center xl:text-left">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-xs font-mono text-[#f13024] w-max mx-auto xl:mx-0 mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#f13024] animate-pulse" />
            <span>INTERACTIVE 3D ATTACK SURFACE</span>
          </motion.div>

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h2 text-[26px] sm:text-[34px] xl:text-[40px] mb-2 leading-tight"
          >
            From discovery to <span className="text-accent">remediation.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-2 text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md mx-auto xl:mx-0"
          >
            I combine automated security tooling with manual testing and
            vulnerability validation to distinguish meaningful security issues from
            false positives.
          </motion.p>

          {/* Interactive 3D Cyber Defense Model with HUD frame */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f13024]/10 to-[#4a22bd]/10 rounded-full blur-2xl pointer-events-none" />
            <CyberOrb3D />
          </motion.div>
        </div>

        {/* Right Column: Rock-Solid Stationary Tabs & Panels */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 w-full max-w-xl flex flex-col justify-start xl:pt-2"
        >
          {/* FIXED TAB BAR (Stationary Header) */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-black/50 border border-white/10 w-max mx-auto xl:mx-0 mb-3.5 font-mono text-xs shrink-0">
            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "workflow"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              6-Phase Workflow
            </button>
            <button
              onClick={() => setActiveTab("methodology")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "methodology"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Methodology
            </button>
            <button
              onClick={() => setActiveTab("report")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "report"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Report Deliverable
            </button>
            <button
              onClick={() => setActiveTab("deliverables")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "deliverables"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              What You Receive
            </button>
          </div>

          {/* FIXED-HEIGHT CONTENT CONTAINER ON DESKTOP, NATURAL COMFORTABLE HEIGHT ON MOBILE */}
          <div className="min-h-[260px] h-auto xl:h-[335px] w-full relative overflow-visible xl:overflow-hidden">
            {/* Tab 1: 6-Phase Workflow */}
            {activeTab === "workflow" && (
              <motion.div
                key="workflow"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 h-full overflow-y-auto pr-1 text-left"
              >
                {workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-3 hover:border-[#f13024]/60 transition-all duration-200 group flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-x-2 font-mono text-xs font-bold text-accent mb-1">
                      <span className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center text-[10px]">
                        {step.num}
                      </span>
                      <span className="uppercase text-white group-hover:text-accent transition-colors">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 2: Methodology Frameworks */}
            {activeTab === "methodology" && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 h-full overflow-y-auto pr-1 text-left"
              >
                {frameworks.map((fw, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-3.5 hover:border-[#f13024]/60 transition-all flex flex-col justify-center"
                  >
                    <div className="font-mono text-xs font-bold text-accent mb-1">
                      {fw.label}
                    </div>
                    <div className="text-[11px] text-white/60 font-light leading-snug">
                      {fw.sub}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 3: Report Deliverable Preview */}
            {activeTab === "report" && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-4 text-left h-full overflow-y-auto space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <HiDocumentText className="text-xl text-accent" />
                    <div>
                      <div className="text-[11px] font-mono text-accent font-bold uppercase">
                        SECURITY ASSESSMENT REPORT
                      </div>
                      <div className="text-xs font-semibold text-white">
                        Sanitized Technical Findings Preview
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/30 font-bold">
                    HIGH / CVSS 8.5
                  </span>
                </div>

                <div>
                  <div className="font-mono text-xs text-white/90 font-bold mb-1">
                    Finding #01: Broken Object Level Authorization (BOLA)
                  </div>
                  <p className="text-[11px] text-white/60 font-light leading-relaxed mb-2">
                    Authenticated users can access and modify billing records of other
                    tenants by manipulating user_id parameters.
                  </p>
                  <div className="p-2.5 bg-black/60 rounded-lg border border-white/10 font-mono text-[10px] text-accent/90 mb-2">
                    GET /api/v2/users/89410/billing HTTP/2
                    <br />
                    Host: api.target-client.com
                    <br />
                    Authorization: Bearer &lt;Attacker_Token&gt;
                  </div>
                  <div className="text-[11px] text-emerald-400 font-light">
                    <span className="font-bold">Remediation:</span> Implement tenant
                    ownership validation assertions before returning object data.
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: What You Receive */}
            {activeTab === "deliverables" && (
              <motion.div
                key="deliverables"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 h-full overflow-y-auto pr-1 text-left"
              >
                {[
                  {
                    title: "Detailed Findings",
                    desc: "Clearly documented vulnerabilities with technical details and supporting evidence.",
                  },
                  {
                    title: "Risk & Impact",
                    desc: "Understand the security significance of each confirmed finding.",
                  },
                  {
                    title: "Remediation Guidance",
                    desc: "Practical recommendations to help address identified vulnerabilities.",
                  },
                  {
                    title: "Retest Validation",
                    desc: "Where included, remediation is retested to verify fixes.",
                  },
                ].map((deliv, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-3 hover:border-[#f13024]/60 transition-all flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-x-2 text-accent font-bold text-xs mb-1">
                      <HiShieldCheck className="text-base shrink-0" />
                      <span>{deliv.title}</span>
                    </div>
                    <p className="text-[11px] text-white/60 font-light leading-relaxed">
                      {deliv.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Bottom Action (Anchored stationary position) */}
          <div className="mt-3.5 flex justify-center xl:justify-start shrink-0">
            <Link
              href="#contact"
              onClick={handleScrollToContact}
              className="btn rounded-full border border-white/40 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent hover:text-accent font-light text-xs uppercase tracking-wider"
            >
              Discuss Testing Scope
            </Link>
          </div>
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default ApproachSection;

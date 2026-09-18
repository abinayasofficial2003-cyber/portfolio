"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiShieldCheck } from "react-icons/hi2";

import Circles from "@/components/Circles";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import avatarImg from "@/public/avatar2.png";
import { fadeIn } from "@/variants";

type AboutItem = {
  title: string;
  stage?: string;
  description?: string;
};

type AboutCategory = {
  title: string;
  info: AboutItem[];
};

const aboutData: AboutCategory[] = [
  {
    title: "credentials",
    info: [
      {
        title: "Certified Penetration Testing (CPT)",
        stage: "RedTeam Hacker Academy",
        description:
          "Hands-on offensive security, penetration testing, exploitation methodology, and network defense.",
      },
      {
        title: "B.E. — Computer Science Engineering",
        stage: "Jeppiaar Institute of Technology • May 2025",
        description:
          "Rigorous foundation in computer systems architecture, algorithms, network protocols, and application design.",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Offensive Security Assessments",
        stage: "VAPT Consultant",
        description:
          "Hands-on penetration testing and vulnerability assessments across web applications, REST APIs, and mobile systems.",
      },
      {
        title: "Security Research & CTF Labs",
        stage: "Hands-on Exploits",
        description:
          "Practical exploitation research across PortSwigger Web Security Academy, TryHackMe, and AWS Cloud CTF environments.",
      },
    ],
  },
  {
    title: "philosophy",
    info: [
      {
        title: "Manual PoC Verification",
        stage: "Zero False Positives",
        description:
          "Every finding is manually confirmed with reproducible proof-of-concept steps to eliminate false positives entirely.",
      },
      {
        title: "Actionable Remediation Guidance",
        stage: "Developer-First",
        description:
          "Prioritized remediation guidance and secure code examples designed for software engineering teams to patch swiftly.",
      },
    ],
  },
];


const stats = [
  { label: "WEB", sub: "Applications" },
  { label: "REST", sub: "APIs" },
  { label: "MOBILE", sub: "Applications" },
  { label: "AWS", sub: "Cloud" },
];

const AboutSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full flex items-center justify-center relative px-6 sm:px-12 xl:px-16 overflow-hidden bg-primary/40">
      <CyberAtmosphere
        watermarkText="SECURITY IDENTITY"
        sectionCode="01 // OPERATOR PROFILE & CREDENTIALS"
      />
      <Circles />

      <div className="container mx-auto h-full max-h-[88vh] flex flex-col justify-center z-10 py-4">
        {/* Perfectly Balanced 3-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 2xl:gap-8 items-center">
          {/* COLUMN 1: Avatar Showcase with Cyber Holographic Frame (xl: 4 cols) */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:flex xl:col-span-4 flex-col items-center justify-center relative"
          >
            {/* Holographic Frame Container */}
            <div className="relative w-full max-w-[340px] 2xl:max-w-[380px] h-[460px] 2xl:h-[500px] rounded-2xl bg-gradient-to-t from-[#f13024]/15 via-black/40 to-transparent border border-white/10 p-2 flex items-end justify-center overflow-hidden group shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-[#f13024]/60 select-none">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#f13024]/60 select-none">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#f13024]/60 select-none">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#f13024]/60 select-none">+</div>

              {/* Ambient radial glow */}
              <div className="absolute inset-0 bg-[#f13024]/10 rounded-2xl blur-xl pointer-events-none" />

              {/* Vertical Laser Scanner confined strictly inside the frame */}
              <motion.div
                animate={{
                  y: ["0%", "100%", "0%"],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#f13024] to-transparent shadow-[0_0_10px_#f13024] z-20 pointer-events-none"
              />

              {/* The Avatar Image */}
              <Image
                src={avatarImg}
                alt="Abinaya S"
                priority
                className="w-auto h-full max-h-[440px] 2xl:max-h-[480px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-10"
              />

              {/* Operator Badge anchored neatly to the bottom */}
              <div className="absolute bottom-3 inset-x-4 py-1.5 px-3 rounded-xl bg-black/85 backdrop-blur-md border border-[#f13024]/40 flex items-center justify-between z-20 font-mono text-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold tracking-wider">ABINAYA S</span>
                </div>
                <span className="text-[#f13024] font-bold">CPT CERTIFIED</span>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Bio & Capability Metrics (xl: 4 cols) */}
          <div className="xl:col-span-4 flex flex-col justify-center text-center xl:text-left">
            {/* Top Terminal Badge */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-xs font-mono text-[#f13024] w-max mx-auto xl:mx-0 mb-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-pulse" />
              <span>OFFENSIVE SECURITY & DEFENSE</span>
            </motion.div>

            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="h2 mb-2 text-[26px] sm:text-[34px] xl:text-[38px] 2xl:text-[42px] leading-tight"
            >
              About <span className="text-accent">Abinaya</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="text-xs sm:text-[13px] text-white/70 font-light leading-relaxed mb-4"
            >
              I am a cybersecurity professional focused on application security,
              penetration testing, vulnerability assessment, mobile security,
              cloud security, threat modeling, secure code review, and DevSecOps.
              My work involves identifying security weaknesses across web
              applications, REST APIs, mobile apps, and cloud environments with
              actionable remediation.
            </motion.p>

            {/* 4 Capability Stats Grid */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="grid grid-cols-2 gap-2.5 mb-3"
            >
              {stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="relative p-2.5 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-[#f13024]/70 hover:shadow-[0_0_15px_rgba(241,48,36,0.2)] transition-all duration-300 group overflow-hidden text-center cursor-default"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#f13024] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-base sm:text-lg font-black font-mono text-accent mb-0.5 group-hover:scale-105 transition-transform">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-white/60 tracking-wider">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Testing Approach Badge */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-accent/40 transition-all text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f13024]/20 border border-[#f13024]/50 flex items-center justify-center text-accent shrink-0">
                <HiShieldCheck className="text-lg" />
              </div>
              <div className="text-[11px]">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <span>Manual + Automated Testing</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ZERO FALSE POSITIVES
                  </span>
                </div>
                <p className="text-white/50 text-[10px] leading-tight mt-0.5">
                  Vulnerabilities are manually validated with proof-of-concept evidence before reporting.
                </p>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 3: Interactive Tabs & Cards (xl: 4 cols) */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="xl:col-span-4 flex flex-col justify-start xl:pt-4"
          >
            {/* Tab navigation buttons top-aligned (Stationary) */}
            <div className="flex gap-1.5 sm:gap-2 p-1 rounded-xl bg-black/50 border border-white/10 w-max mx-auto xl:mx-0 mb-3.5 font-mono text-xs shrink-0">
              {aboutData.map((item, itemI) => (
                <button
                  key={itemI}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-300 capitalize cursor-pointer flex items-center gap-1 text-[11px] sm:text-xs ${index === itemI
                    ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  onClick={() => setIndex(itemI)}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Cards (Fixed height: zero jumping) */}
            <div className="h-[255px] sm:h-[265px] xl:h-[275px] flex flex-col gap-y-2.5 overflow-y-auto pr-1">
              {aboutData[index].info.map((item, itemI) => (
                <motion.div
                  key={itemI}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: itemI * 0.08 }}
                  className="w-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-3.5 text-left hover:border-[#f13024]/50 hover:shadow-[0_0_20px_rgba(241,48,36,0.15)] transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#f13024]/10 rounded-full blur-xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1 relative z-10">
                    <span className="font-bold text-white text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {item.title}
                    </span>
                    {item.stage && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent w-max">
                        {item.stage}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-xs text-white/70 font-light leading-relaxed mt-0.5 relative z-10">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Persistent Bridge Link to Dedicated Skills & Arsenal Section */}
            <div className="pt-3 text-left">
              <Link
                href="/#skills"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("skills");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", "#skills");
                  }
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f13024]/15 hover:bg-[#f13024] border border-[#f13024]/40 hover:border-[#f13024] text-white font-mono text-[11px] transition-all duration-300 shadow-[0_0_15px_rgba(241,48,36,0.25)] hover:shadow-[0_0_20px_rgba(241,48,36,0.6)] cursor-pointer group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white animate-pulse" />
                <span>EXPLORE 45+ SKILLS & TOOLKIT ARSENAL</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

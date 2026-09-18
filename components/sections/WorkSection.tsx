"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import CyberCoverflow3D from "@/components/CyberCoverflow3D";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const WorkSection = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <div className="w-full min-h-screen xl:h-full flex items-center justify-center relative px-4 sm:px-8 xl:px-14 overflow-visible xl:overflow-hidden">
      <CyberAtmosphere
        watermarkText="SECURITY AUDITS"
        sectionCode="04 // ENGAGEMENTS & FINDINGS"
      />
      <Circles />

      {/* Main Container with generous top clearance from transparent AegisSec header */}
      <div className="container mx-auto h-auto min-h-screen xl:h-full xl:max-h-[94vh] flex flex-col justify-center z-10 pt-20 sm:pt-22 xl:pt-24 pb-24 xl:pb-2 pr-2 sm:pr-8 xl:pr-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-1">
          <div>
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-xs font-mono text-[#f13024] mb-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-pulse" />
              <span>3D COVERFLOW SECURITY DOSSIERS</span>
            </motion.div>

            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h2 text-[24px] sm:text-[30px] xl:text-[34px] leading-tight mb-1"
            >
              Case studies <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-xs sm:text-[13px] text-white/60 font-light max-w-xl leading-relaxed"
            >
              Real-world penetration testing assessments, exploit vectors neutralized,
              and verified remediation metrics.
            </motion.p>
          </div>

          {/* Right Action Link */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:flex items-center gap-3"
          >
            <Link
              href="#contact"
              onClick={handleScrollToContact}
              className="btn rounded-full border border-white/20 hover:border-[#f13024] px-5 py-1.5 transition-all duration-300 flex items-center gap-2 hover:text-[#f13024] font-mono text-xs text-white/80 hover:bg-[#f13024]/10"
            >
              <span>Discuss Project Scope</span>
              <HiArrowUpRight className="text-xs" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Perspective Coverflow Showcase */}
        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <CyberCoverflow3D />
        </motion.div>
      </div>

      {/* Preserve Bulb as explicitly requested */}
      <Bulb />
    </div>
  );
};

export default WorkSection;

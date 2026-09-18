"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiShieldCheck, HiChatBubbleLeftRight, HiQuestionMarkCircle } from "react-icons/hi2";

import TestimonialSlider from "@/components/TestimonialSlider";
import FaqSection from "@/components/FaqSection";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const TestimonialsSection = () => {
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
        watermarkText="CLIENT TRUST"
        sectionCode="05 // FEEDBACK & FAQS"
      />

      <div className="container mx-auto h-auto min-h-screen xl:h-full xl:max-h-[92vh] flex flex-col justify-between z-10 pt-20 sm:pt-22 xl:pt-20 pb-24 xl:pb-3">
        {/* COMPACT TOP HEADER */}
        <div className="text-center max-w-2xl mx-auto w-full">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-[11px] font-mono text-[#f13024] mb-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-pulse" />
            <span>TESTED & TRUSTED METHODOLOGY</span>
          </motion.div>

          <motion.h2
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl sm:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight mb-1"
          >
            Client Trust & <span className="text-accent">Security FAQs .</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xs text-white/60 font-light max-w-lg mx-auto leading-relaxed"
          >
            Verified client outcomes, actionable vulnerability remediation, and clear audit guidelines.
          </motion.p>
        </div>

        {/* BALANCED TWO-COLUMN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-7 items-start w-full max-w-6xl mx-auto my-auto">
          {/* COLUMN 1: Verified Client Feedback (lg: 6 cols) */}
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            {/* Column Label */}
            <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <HiChatBubbleLeftRight className="text-accent text-base" />
                <span>Client Feedback</span>
              </div>
              <span className="text-[10px] text-accent font-mono px-2 py-0.5 rounded bg-accent/15 border border-accent/30">
                VERIFIED REVIEWS
              </span>
            </div>

            {/* Testimonial Card Slider */}
            <TestimonialSlider />

            {/* Tactical Trust Guarantee Bar */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-center font-mono text-[10px]">
              <div className="p-2 rounded-xl bg-black/45 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="text-accent font-bold text-[11px]">100% MANUAL</div>
                <div className="text-white/50 text-[9px] mt-0.5">PoC Verification</div>
              </div>
              <div className="p-2 rounded-xl bg-black/45 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="text-accent font-bold text-[11px]">ZERO FALSE</div>
                <div className="text-white/50 text-[9px] mt-0.5">Positive Tolerance</div>
              </div>
              <div className="p-2 rounded-xl bg-black/45 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="text-accent font-bold text-[11px]">FREE RETEST</div>
                <div className="text-white/50 text-[9px] mt-0.5">Fix Validation</div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Frequently Asked Questions (lg: 6 cols) */}
          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            {/* Column Label */}
            <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <HiQuestionMarkCircle className="text-accent text-base" />
                <span>Frequently Asked Questions</span>
              </div>
              <span className="text-[10px] text-white/50 font-mono">
                6 QUESTIONS
              </span>
            </div>

            {/* Scrollable FAQ Accordion Container */}
            <div className="h-[345px] sm:h-[355px] overflow-y-auto pr-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(241,48,36,0.5)_transparent]">
              <FaqSection />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-x-4 shrink-0"
        >
          <Link
            href="#contact"
            onClick={handleScrollToContact}
            className="btn rounded-full border border-white/40 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent hover:text-accent font-light text-xs uppercase tracking-wider"
          >
            Request Assessment
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

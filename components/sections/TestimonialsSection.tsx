"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import TestimonialSlider from "@/components/TestimonialSlider";
import FaqSection from "@/components/FaqSection";
import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<"testimonials" | "faq">(
    "testimonials"
  );

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative px-4 sm:px-8 xl:px-16 overflow-hidden">
      <CyberAtmosphere
        watermarkText="CLIENT TRUST"
        sectionCode="05 // FEEDBACK & FAQS"
      />

      <div className="container mx-auto h-full max-h-[88vh] flex flex-col justify-center text-center z-10 py-6">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f13024]/10 border border-[#f13024]/30 text-xs font-mono text-[#f13024] w-max mx-auto mb-2">
            <span className="w-2 h-2 rounded-full bg-[#f13024] animate-pulse" />
            <span>TESTED & TRUSTED SECURITY METHODOLOGY</span>
          </div>

          <h2 className="h2 text-[28px] sm:text-[38px] xl:text-[46px] mb-3">
            Client trust & <span className="text-accent">FAQ.</span>
          </h2>

          <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-black/40 border border-white/10 w-max mx-auto font-mono text-xs">
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "testimonials"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Client Feedback
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "faq"
                  ? "bg-[#f13024] text-white font-bold shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Frequently Asked Questions
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          {activeTab === "testimonials" ? (
            <TestimonialSlider />
          ) : (
            <div className="max-h-[340px] overflow-y-auto pr-2 text-left bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6">
              <FaqSection />
            </div>
          )}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 flex items-center justify-center gap-x-4"
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

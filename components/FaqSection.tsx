"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export const faqList = [
  {
    q: "What can you test?",
    a: "I provide security assessments for web applications, REST APIs, mobile applications, networks, and selected vulnerability-assessment scopes.",
  },
  {
    q: "Do you perform manual testing?",
    a: "Yes. Security tools support the assessment, while manual testing and validation are used to investigate application behavior and confirm findings.",
  },
  {
    q: "Do you provide a security report?",
    a: "Yes. The assessment can include documented findings, evidence, impact, severity, and remediation recommendations based on the agreed engagement scope.",
  },
  {
    q: "Can you test an authenticated application?",
    a: "Yes. Testing requirements and access levels (such as Grey Box testing with multi-role accounts) are defined during the initial scope discussion.",
  },
  {
    q: "Do you provide retesting?",
    a: "Retesting can be included depending on the engagement and scope to verify that patched vulnerabilities have been addressed effectively.",
  },
  {
    q: "How long does an assessment take?",
    a: "The duration depends on the application, scope, number of assets, access requirements, and depth of testing. Typical assessments range from 3 to 10 business days.",
  },

];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <div className="w-full space-y-2">
      {faqList.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                ? "bg-[#f13024]/10 border-[#f13024]/40 shadow-[0_0_15px_rgba(241,48,36,0.1)]"
                : "bg-black/50 border-white/10 hover:border-white/20"
              }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-3.5 py-2.5 text-left flex items-center justify-between gap-3 cursor-pointer"
            >
              <span className="text-xs sm:text-[13px] font-medium text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item.q}
              </span>
              <HiChevronDown
                className={`text-sm text-accent shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isOpen && (
              <div className="px-3.5 pb-3 pt-1 text-[11px] sm:text-xs text-white/70 font-light leading-relaxed border-t border-white/5 bg-black/20">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


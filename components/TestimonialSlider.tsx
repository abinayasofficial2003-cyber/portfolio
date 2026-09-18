"use client";

import { FaQuoteLeft } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "SaaS Engineering Lead",
    position: "Enterprise Cloud Application",
    message:
      "Abinaya identified high-impact authorization vulnerabilities across our REST APIs that our automated scanners missed entirely. The remediation guidance was clear, actionable, and verified during retesting.",
  },
  {
    image: "/t-avt-2.png",
    name: "Fintech CTO",
    position: "Payment & Mobile Core",
    message:
      "The penetration testing report was comprehensive, professional, and practical. Every vulnerability had clear proof-of-concept evidence and prioritized severity aligned with our business risk.",
  },
  {
    image: "/t-avt-3.png",
    name: "Product Founder",
    position: "Pre-Launch Security Audit",
    message:
      "Fast turnaround and thorough methodology covering OWASP Top 10, business logic, and cloud configurations. Helped us validate security and protect customer trust before our public release.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[270px] sm:h-[290px] w-full"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="h-full w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f13024]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top row: Client info & Star Rating */}
            <div className="flex items-center justify-between gap-3 relative z-10">
              <div>
                <div className="text-base sm:text-lg font-bold text-white leading-tight">
                  {person.name}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-accent uppercase tracking-wider mt-0.5">
                  {person.position}
                </div>
              </div>

              {/* Star Rating */}
              <div className="text-accent text-xs sm:text-sm tracking-widest">
                ★★★★★
              </div>
            </div>


            {/* Message Body */}
            <div className="relative z-10 my-auto py-2">
              <FaQuoteLeft className="text-xl text-accent/30 mb-1.5" aria-hidden />
              <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed italic">
                &quot;{person.message}&quot;
              </p>
            </div>

            {/* Bottom Footer Badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-2 border-t border-white/5 relative z-10">
              <span className="text-emerald-400/90 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED ENGAGEMENT
              </span>
              <span>CONFIRMED REMEDIATION</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default TestimonialSlider;

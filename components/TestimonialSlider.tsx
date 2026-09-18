"use client";

import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export interface TestimonialItem {
  name: string;
  position: string;
  company: string;
  message: string;
  badge: string;
}

export const testimonialData: TestimonialItem[] = [
  {
    name: "Karthikeyan S.",
    position: "Founder & CEO",
    company: "Chennai Logistics & Supply Chain SaaS",
    message:
      "Abinaya conducted a thorough Web App VAPT on our freight dispatch platform. She uncovered critical BOLA and authorization flaws in our billing API that automated scanners completely missed. The proof-of-concept evidence and retesting validation gave us complete confidence before our client rollout.",
    badge: "VAPT • 100% REMEDIATED",
  },
  {
    name: "Divya Balasubramanian",
    position: "Chief Technology Officer",
    company: "Coimbatore FinTech & Lending Core",
    message:
      "Outstanding API security assessment for our microservices payment gateway. Abinaya demonstrated a deep understanding of OWASP API Top 10, identifying JWT signature validation bugs and race conditions in fund transfers. Professional report with zero false positives.",
    badge: "API PENTEST • CRITICAL FIXES",
  },
  {
    name: "Vigneshwaran M.",
    position: "Managing Director",
    company: "Tiruppur Garment Exports ERP",
    message:
      "We hired Abinaya to audit our multi-tenant enterprise ERP portal. She discovered tenant isolation bypasses and SQL injection vectors in our custom reporting module. Her step-by-step remediation guide allowed our developers to fix every issue in two days.",
    badge: "WEB & ERP SEC • ZERO FALSE POSITIVES",
  },
  {
    name: "Ananya Natarajan",
    position: "Co-Founder & Head of Product",
    company: "Chennai EdTech Mobile Learning",
    message:
      "Abinaya audited our student mobile application on Android. Using MobSF and Frida dynamic hooking, she bypassed our initial SSL pinning and identified insecure shared preferences storage. Retesting was swift, helping us securely launch on Google Play.",
    badge: "MOBILE APP SEC • FRIDA HOOKING",
  },
  {
    name: "Senthil Nathan K.",
    position: "Director of Technology",
    company: "Madurai Healthcare & Diagnostics",
    message:
      "Critical patient data protection was our highest priority. Abinaya tested our healthcare booking system and REST APIs against patient record leakage and IDOR exploits. Her actionable documentation and quick communication made the audit smooth.",
    badge: "HEALTHCARE VAPT • DATA PRIVACY",
  },
  {
    name: "Praveen Kumar R.",
    position: "Head of Engineering",
    company: "Bengaluru-Chennai Cloud Infrastructure",
    message:
      "Exceptional AWS cloud security and IAM audit. Abinaya identified overprivileged IAM roles, public S3 bucket policies, and potential SSRF pivoting to metadata services. Her retesting confirmed our cloud architecture is fully hardened.",
    badge: "AWS CLOUD AUDIT • IAM HARDENED",
  },
  {
    name: "Meenakshi Sundaram",
    position: "Founder",
    company: "Salem AgriTech & Farmer Marketplace",
    message:
      "Fast turnaround and deep technical expertise. Abinaya conducted a comprehensive pre-launch security assessment on our e-commerce portal, catching payment callback manipulation and price-tampering logic flaws before go-live.",
    badge: "BUSINESS LOGIC • PRE-LAUNCH AUDIT",
  },
  {
    name: "Saravanan Perumal",
    position: "Technical Lead",
    company: "Trichy RetailPOS & Inventory Solutions",
    message:
      "Abinaya performed rigorous authenticated Grey Box penetration testing across multiple user permission roles. She pinpointed broken access control and CSRF flaws that could have exposed multi-store revenue reports. Highly recommended security consultant.",
    badge: "GREY BOX VAPT • ACCESS CONTROL",
  },
  {
    name: "Deepa Raghavan",
    position: "VP of Operations & Security",
    company: "E-Commerce Fulfilment Platform",
    message:
      "Professional, transparent, and meticulous. Abinaya validated every single vulnerability manually with clear PoC screenshots and cURL commands. Our developers loved working with her remediation guidelines.",
    badge: "MANUAL POC • HIGH RISK MITIGATED",
  },
  {
    name: "Ashwin Ramachandran",
    position: "Chief Executive Officer",
    company: "Smart IoT & Telematics India",
    message:
      "Abinaya tested our fleet telemetry APIs and web dashboard. She discovered unauthenticated MQTT endpoints and sensitive token exposures. The comprehensive executive summary and developer-ready findings made patch verification seamless.",
    badge: "API & IOT AUDIT • VERIFIED RETEST",
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="h-[270px] sm:h-[285px] w-full"
      >
        {testimonialData.map((person, i) => (
          <SwiperSlide key={i}>
            <div className="h-full w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f13024]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top row: Client info, Rating & Custom Non-overlapping Navigation Arrows */}
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div>
                  <div className="text-sm sm:text-base font-bold text-white leading-tight flex items-center gap-2">
                    <span>{person.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-accent/15 border border-accent/30 text-accent font-semibold">
                      {person.position}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-wider mt-0.5">
                    {person.company}
                  </div>
                </div>

                {/* Right controls: Stars + Sleek Non-overlapping arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-accent text-xs tracking-widest hidden sm:block">
                    ★★★★★
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      aria-label="Previous Review"
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-black/60 border border-white/15 hover:border-accent hover:text-accent flex items-center justify-center text-white/70 transition-all cursor-pointer hover:bg-black/80 active:scale-95"
                    >
                      <HiChevronLeft className="text-xs sm:text-sm" />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      aria-label="Next Review"
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-black/60 border border-white/15 hover:border-accent hover:text-accent flex items-center justify-center text-white/70 transition-all cursor-pointer hover:bg-black/80 active:scale-95"
                    >
                      <HiChevronRight className="text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Body (Cleanly separated with zero arrow obstruction) */}
              <div className="relative z-10 my-auto py-1 px-1">
                <FaQuoteLeft className="text-lg text-accent/30 mb-1" aria-hidden />
                <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                  &quot;{person.message}&quot;
                </p>
              </div>

              {/* Bottom Footer Badge */}
              <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-2 border-t border-white/5 relative z-10">
                <span className="text-emerald-400/90 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {person.badge}
                </span>
                <span className="text-white/50 hidden sm:inline">
                  REVIEW {i + 1} OF {testimonialData.length}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;

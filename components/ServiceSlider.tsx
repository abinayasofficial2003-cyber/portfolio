"use client";

import {
  HiGlobeAlt,
  HiServer,
  HiDevicePhoneMobile,
  HiShieldExclamation,
  HiMagnifyingGlassCircle,
  HiArrowUpRight,
  HiShieldCheck,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const serviceData: {
  Icon: IconType;
  number: string;
  title: string;
  description: string;
  linkText: string;
  tag: string;
  vulnerabilities: string[];
  severity: string;
}[] = [
  {
    Icon: HiGlobeAlt,
    number: "01",
    title: "Web Application Security",
    description:
      "Identify vulnerabilities in web applications across authentication, authorization, input handling, session management, business logic, and configuration.",
    linkText: "Request Web Audit",
    tag: "OWASP TOP 10",
    vulnerabilities: ["SQLi", "XSS", "IDOR / BOLA", "CSRF", "Auth Bypass"],
    severity: "CVSS 9.8 RISK MITIGATION",
  },
  {
    Icon: HiServer,
    number: "02",
    title: "API Security Assessment",
    description:
      "Assess REST APIs for authentication/authorization weaknesses, access-control issues, input validation flaws, rate-limiting, and business-logic vulnerabilities.",
    linkText: "Request API Audit",
    tag: "REST & GRAPHQL",
    vulnerabilities: ["BOLA", "BFLA", "JWT Flaws", "Mass Assign", "Rate Limits"],
    severity: "MICROSERVICE & CLOUD",
  },
  {
    Icon: HiDevicePhoneMobile,
    number: "03",
    title: "Mobile Security Testing",
    description:
      "Security testing for mobile applications covering APK analysis, permissions, insecure storage, exported components, certificate pinning, and session security.",
    linkText: "Request Mobile Audit",
    tag: "ANDROID & IOS",
    vulnerabilities: ["MobSF", "Frida Bypass", "Cert Pinning", "Insecure Storage"],
    severity: "RUNTIME & APK ANALYSIS",
  },
  {
    Icon: HiShieldExclamation,
    number: "04",
    title: "Network Pen Testing",
    description:
      "Identify exposed services, network-level vulnerabilities, and security weaknesses across the agreed testing scope.",
    linkText: "Request Network Audit",
    tag: "INFRASTRUCTURE",
    vulnerabilities: ["Port Scans", "Exposed Ports", "Misconfigs", "Patch Audits"],
    severity: "PERIMETER DEFENSE",
  },
  {
    Icon: HiMagnifyingGlassCircle,
    number: "05",
    title: "Vulnerability Assessment",
    description:
      "Identify, validate, and prioritize security vulnerabilities across applications and infrastructure, with clear findings and practical remediation.",
    linkText: "Request Full Audit",
    tag: "FULL RE-AUDIT",
    vulnerabilities: ["CVSS 3.1", "PoC Validation", "Executive Report", "Retesting"],
    severity: "ZERO FALSE POSITIVES",
  },
];

const ServiceSlider = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[380px] sm:h-[400px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-black/50 backdrop-blur-xl h-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-[#f13024]/70 hover:shadow-[0_0_35px_rgba(241,48,36,0.25)] transition-all duration-300 relative overflow-hidden text-left">
            {/* Corner Crosshairs */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#f13024]/50 select-none">+</span>

            {/* Ambient Neon Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#f13024]/10 rounded-full blur-2xl group-hover:bg-[#f13024]/20 transition-all pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f13024] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header with Icon, Number, Tag */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/15 flex items-center justify-center text-accent text-2xl group-hover:scale-110 group-hover:border-accent/60 group-hover:shadow-[0_0_18px_rgba(241,48,36,0.5)] transition-all duration-300">
                  <item.Icon aria-hidden />
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-xs text-white/40 group-hover:text-accent transition-colors font-bold tracking-widest">
                    {item.number}
                  </span>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#f13024]/15 text-[#f13024] border border-[#f13024]/30 mt-1 font-semibold tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Title & Severity */}
              <div className="mb-1 text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                {item.title}
              </div>
              <div className="font-mono text-[10px] text-white/50 mb-2.5 flex items-center gap-1.5">
                <HiShieldCheck className="text-accent text-xs shrink-0" />
                <span>{item.severity}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 mb-3">
                {item.description}
              </p>

              {/* Target Vulnerability Scope Tags */}
              <div className="flex flex-wrap gap-1 mb-2">
                {item.vulnerabilities.map((v, vIdx) => (
                  <span
                    key={vIdx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10 text-white/80 group-hover:border-accent/30 group-hover:text-white transition-colors"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Link */}
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-accent hover:text-white transition-colors"
            >
              <span className="font-semibold">{item.linkText}</span>
              <HiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

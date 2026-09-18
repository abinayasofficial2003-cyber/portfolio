"use client";

import Image from "next/image";
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
      className="h-[360px] sm:h-100"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-6 sm:px-16">
            <div className="w-full max-w-75 flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto ring-2 ring-accent/30 rounded-full p-1">
                  <Image
                    src={person.image}
                    width={90}
                    height={90}
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>

                <div className="text-base sm:text-lg font-semibold text-white">{person.name}</div>

                <div className="text-[11px] uppercase font-mono text-accent tracking-wider">
                  {person.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-px xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-50 relative xl:pl-16">
              <div className="mb-3">
                <FaQuoteLeft
                  className="text-3xl xl:text-5xl text-accent/30 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              <div className="text-sm sm:text-base xl:text-lg text-center md:text-left text-white/80 font-light leading-relaxed">
                &quot;{person.message}&quot;
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

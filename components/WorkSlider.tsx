"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const workSlides = {
  slides: [
    {
      items: [
        {
          title: "Web App Security",
          category: "OWASP Top 10 • Auth & IDOR",
          path: "/thumb1.jpg",
          link: "/contact",
          badge: "CASE STUDY 01",
        },
        {
          title: "REST API Security",
          category: "BOLA • JWT • Access Control",
          path: "/thumb2.jpg",
          link: "/contact",
          badge: "CASE STUDY 02",
        },
        {
          title: "Mobile App Security",
          category: "Android APK • MobSF • Frida",
          path: "/thumb3.jpg",
          link: "/contact",
          badge: "CASE STUDY 03",
        },
        {
          title: "AWS Cloud Security",
          category: "IAM • S3 • EC2 Auditing",
          path: "/thumb4.jpg",
          link: "/contact",
          badge: "CASE STUDY 04",
        },
      ],
    },
    {
      items: [
        {
          title: "MalwareBazaar Automation",
          category: "Python • Threat Intelligence",
          path: "/thumb4.jpg",
          link: "/contact",
          badge: "SECURITY LAB",
        },
        {
          title: "AWS Cloud CTF Lab",
          category: "AWS CLI • Kali • IAM Exploits",
          path: "/thumb1.jpg",
          link: "/contact",
          badge: "HANDS-ON LAB",
        },
        {
          title: "Threat Modeling (STRIDE)",
          category: "Architecture & Trust Boundaries",
          path: "/thumb2.jpg",
          link: "/contact",
          badge: "METHODOLOGY",
        },
        {
          title: "Vulnerability Remediation",
          category: "Zero False-Positive Retesting",
          path: "/thumb3.jpg",
          link: "/contact",
          badge: "DELIVERABLE",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-75 sm:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.items.map((item, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={item.path}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-linear-to-l from-transparent via-[#f13024]/80 to-[#131424]/90 opacity-0 group-hover:opacity-90 transition-all duration-500"
                    aria-hidden
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-mono text-[10px] bg-black/60 border border-white/20 text-white px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  {/* Slide-up Content */}
                  <div className="absolute bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300 text-left w-full">
                    <div className="text-white font-bold text-sm sm:text-base leading-snug">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-white/80 font-mono mb-2">
                      {item.category}
                    </div>

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-x-2 text-[11px] font-mono tracking-wider text-white hover:text-white uppercase font-semibold"
                    >
                      <span>VIEW SCOPE</span>
                      <BsArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiCommandLine,
  HiViewColumns,
  HiRectangleGroup,
  HiCpuChip,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData: { name: string; targetId: string; Icon: IconType }[] = [
  { name: "home", targetId: "home", Icon: HiHome },
  { name: "about", targetId: "about", Icon: HiUser },
  { name: "skills", targetId: "skills", Icon: HiCommandLine },
  { name: "services", targetId: "services", Icon: HiRectangleGroup },
  { name: "approach", targetId: "approach", Icon: HiCpuChip },
  { name: "work", targetId: "work", Icon: HiViewColumns },
  {
    name: "faq",
    targetId: "testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    targetId: "contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("fullpage-scroll-container");
      const scrollPos = container
        ? container.scrollTop + container.clientHeight / 2
        : window.scrollY + window.innerHeight / 2;

      const sectionIds = navData.map((item) => item.targetId);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    const container = document.getElementById("fullpage-scroll-container");
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-auto xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-7 px-4 sm:px-12 md:px-24 xl:px-0 h-16 xl:h-max py-2 xl:py-8 bg-black/85 backdrop-blur-xl border-t border-white/15 xl:border xl:border-white/10 xl:bg-white/10 text-xl xl:text-xl xl:rounded-full pointer-events-auto shadow-[0_-10px_30px_rgba(0,0,0,0.8)] xl:shadow-2xl">
        {navData.map((link, i) => {
          const isActive = activeSection === link.targetId;

          return (
            <Link
              className={`${
                isActive ? "text-accent" : "text-white"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={`/#${link.targetId}`}
              onClick={(e) => handleNavClick(e, link.targetId)}
              key={i}
            >
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex"
              >
                <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize font-sora">
                    {link.name}
                  </div>

                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>

              <div>
                <link.Icon aria-hidden />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

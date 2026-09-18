"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import avatarImg from "@/public/avatar.png";
import { fadeIn } from "@/variants";

const HeroSection = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <div className="bg-primary/60 w-full min-h-screen xl:h-screen xl:h-[100dvh] relative overflow-hidden flex items-center justify-center">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10 flex items-center justify-center">
        <div className="text-center flex flex-col justify-between pt-24 sm:pt-28 xl:pt-40 pb-0 xl:pb-0 xl:text-left h-full min-h-screen xl:min-h-0 container mx-auto z-10">
          <div className="flex flex-col items-center xl:items-start max-w-sm sm:max-w-md xl:max-w-xl mx-auto xl:mx-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 text-[26px] sm:text-[34px] xl:text-[54px] 2xl:text-[60px] leading-tight mb-3 sm:mb-4"
            >
              ABINAYA S <br />
              <span className="text-accent">
                Application Security <br /> & Cybersecurity
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-xs sm:text-sm xl:text-base max-w-xs sm:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-3 sm:mb-5 text-white/70 font-light leading-relaxed"
            >
              I help businesses identify security vulnerabilities across web
              applications, APIs, mobile applications, and network environments
              and understand how to fix them.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[10px] sm:text-xs font-semibold tracking-wider text-accent uppercase mb-3 sm:mb-6 max-w-xs sm:max-w-md xl:max-w-xl mx-auto xl:mx-0"
            >
              Web Security • API Security • Mobile Security • Network Security
            </motion.div>
          </div>

          {/* Mobile View: Avatar placed from the bottom */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex xl:hidden relative w-full justify-center items-end mt-auto pointer-events-none select-none pb-0"
          >
            <div className="relative z-10 flex items-end justify-center w-full max-w-[320px] sm:max-w-[380px] h-[340px] sm:h-[400px]">
              <Image
                src={avatarImg}
                alt="Abinaya S"
                priority
                className="w-auto h-full max-h-[340px] sm:max-h-[400px] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex items-center gap-x-6"
          >
            <ProjectsBtn />
            <Link
              href="#contact"
              onClick={handleScrollToContact}
              className="btn rounded-full border border-white/40 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent hover:text-accent font-light text-sm"
            >
              Request Assessment
            </Link>
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[12px] text-white/40 font-light mt-6 hidden xl:block"
          >
            Security testing focused on real vulnerabilities, practical risk, and
            actionable remediation.
          </motion.p>
        </div>
      </div>
      <div className="w-full xl:w-7xl h-full absolute right-0 bottom-0 pointer-events-none overflow-hidden">
        {/* Desktop explosion */}
        <div
          role="img"
          className="hidden xl:block bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* Mobile explosion placed from the bottom with top fade effect only */}
        <div
          role="img"
          className="block xl:hidden absolute bottom-0 left-1/2 -translate-x-[76%] w-[640px] sm:w-[720px] h-[360px] sm:h-[420px] bg-explosion bg-cover bg-no-repeat mix-blend-color-dodge translate-z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)]"
          aria-hidden
        />

        {/* Mobile ambient crimson glow */}
        <div className="block xl:hidden absolute bottom-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] bg-[#f13024]/25 rounded-full blur-3xl pointer-events-none" />

        <ParticlesContainer />

        {/* Desktop avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[590px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

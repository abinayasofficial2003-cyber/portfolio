"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
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
    <div className="bg-primary/60 h-full w-full h-screen relative overflow-hidden">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
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
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-6"
          >
            I help businesses identify security vulnerabilities across web
            applications, APIs, mobile applications, and network environments —
            and understand how to fix them.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xs font-semibold tracking-wider text-accent uppercase mb-8 max-w-sm xl:max-w-xl mx-auto xl:mx-0"
          >
            Web Security • API Security • Mobile Security • Network Security
          </motion.div>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
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
      <div className="w-7xl h-full absolute right-0 bottom-0 pointer-events-none">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

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

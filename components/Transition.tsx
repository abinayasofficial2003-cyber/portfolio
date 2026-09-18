"use client";

import { motion } from "framer-motion";

const Transition = () => {
  const transitionVariants = {
    initial: {
      y: "100%",
      height: "100%",
    },
    animate: {
      y: "0%",
      height: "0%",
    },
    exit: {
      y: ["0%", "100%"],
      height: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div
        role="status"
        className="fixed top-full left-0 right-0 w-screen h-screen z-30 bg-[#2e2257] pointer-events-none"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        role="status"
        className="fixed top-full left-0 right-0 w-screen h-screen z-20 bg-[#3b2d71] pointer-events-none"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        role="status"
        className="fixed top-full left-0 right-0 w-screen h-screen z-10 bg-[#4b3792] pointer-events-none"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
};

export default Transition;

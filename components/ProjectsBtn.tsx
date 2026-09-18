"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#work");
      }
    }
  };

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/#work"
        onClick={handleClick}
        className="relative w-46.25 h-46.25 flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-35.25 max-h-37 pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "@/components/Socials";

const Header = () => {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const container = document.getElementById("fullpage-scroll-container");
      if (container) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header className="fixed top-0 left-0 z-40 w-full items-center px-6 sm:px-16 xl:px-0 xl:h-22.5 bg-transparent pointer-events-none transition-all duration-300">
      <div className="container mx-auto pointer-events-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 xl:py-6">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-x-3"
          >
            <span className="text-[26px] font-bold tracking-tight text-white font-sora">
              Aegis<span className="text-accent">Sec</span>
              <span className="text-accent">.</span>
            </span>
            <span className="text-xs font-light text-white/50 border-l border-white/20 pl-3 hidden sm:inline-block tracking-wider">
              Cybersecurity
            </span>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

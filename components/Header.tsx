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
    <header className="fixed top-0 left-0 z-40 w-full items-center px-4 sm:px-8 xl:px-0 xl:h-22.5 bg-black/85 backdrop-blur-md border-b border-white/10 xl:border-b-0 xl:bg-transparent xl:backdrop-blur-none pointer-events-none transition-all duration-300">
      <div className="container mx-auto pointer-events-auto">
        <div className="flex flex-row justify-between items-center py-3 xl:py-6">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-x-2.5 sm:gap-x-3"
          >
            <span className="text-[22px] sm:text-[26px] font-bold tracking-tight text-white font-sora">
              Aegis<span className="text-accent">Sec</span>
              <span className="text-accent">.</span>
            </span>
            <span className="text-xs font-light text-white/50 border-l border-white/20 pl-2.5 sm:pl-3 hidden sm:inline-block tracking-wider">
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

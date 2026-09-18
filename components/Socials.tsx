import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abinayas2003/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:abinayaselsa@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3.5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "LinkedIn"
              ? "bg-accent rounded-full p-1.5 text-white hover:brightness-110 shadow-[0_0_15px_rgba(241,48,36,0.4)]"
              : "text-white/80 hover:text-accent p-1.5"
          } transition-all duration-300 flex items-center justify-center`}
        >
          <social.Icon aria-hidden className="w-4 h-4" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

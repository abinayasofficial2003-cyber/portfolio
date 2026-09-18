import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "Github",
    link: "https://github.com/Abinayasela",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
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
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-1.25 hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

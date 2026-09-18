import Image from "next/image";
import avatarImg from "@/public/avatar.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src={avatarImg}
        alt="Abinaya S"
        priority
        className="translate-z-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Avatar;


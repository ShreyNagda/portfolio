import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  { icon: <FaGithub />, path: "http://github.com/ShreyNagda/" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shrey-nagda/" },
  { icon: <RiInstagramFill />, path: "https://www.instagram.com/shrey_nagda/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@shreynagda" },
];
export default function Socials({ className }: { className: string }) {
  return (
    <div className={className}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

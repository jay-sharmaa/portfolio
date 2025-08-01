import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <span className="font-bold ml-[10px] hidden md:block text-gray-300 no-underline cursor-default">
          Software Engineer
        </span>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#applinks" className="cursor-pointer">
              App Downloads
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <a
            href=""
            target="_blank"
            className="hover:scale-105 transition-transform"
            title="Download Resume"
          >
            <Image
              src="/resume-img.png"
              alt="Resume"
              width={32}
              height={32}
            />
          </a>
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
          <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sjaysharma00@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform"
        title="Email Me"
      >
        <Image
          src="/email-icon.png"
          alt="Email"
          width={24}
          height={24}
        />
      </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

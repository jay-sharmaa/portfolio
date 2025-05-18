import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiKaggle, SiLeetcode } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        
        <div className="flex flex-row gap-8 items-center justify-center text-[18px]">
          <a href="https://www.kaggle.com/naivedatamodel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <SiKaggle />
            <span className="text-[15px]">Kaggle</span>
          </a>
          <a href="https://leetcode.com/u/var_jaysharma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <SiLeetcode />
            <span className="text-[15px]">LeetCode</span>
          </a>
          <a href="https://www.linkedin.com/in/jay-sharma-907887272/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <RxLinkedinLogo />
            <span className="text-[15px]">LinkedIn</span>
          </a>
          <a href="https://github.com/jay-sharmaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <FaGithub />
            <span className="text-[15px]">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

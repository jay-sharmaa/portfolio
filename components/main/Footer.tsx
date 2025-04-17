import React from "react";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiKaggle, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        
        {/* Social links in a single row */}
        <div className="flex flex-row gap-8 items-center justify-center text-[18px]">
          <a href="https://www.kaggle.com/naivedatamodel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <SiKaggle />
            <span className="text-[15px]">Kaggle</span>
          </a>
          <a href="https://leetcode.com/u/var_jaysharma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <SiLeetcode />
            <span className="text-[15px]">LeetCode</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <RxInstagramLogo />
            <span className="text-[15px]">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/jay-sharma-907887272/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <RxLinkedinLogo />
            <span className="text-[15px]">LinkedIn</span>
          </a>
          <a href="https://github.com/jay-sharmaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <RxLinkedinLogo />
            <span className="text-[15px]">GitHub</span>
          </a>
        </div>

        {/* Footer text */}
        <div className="text-[14px] text-center text-gray-400">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;


"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold text-gray-300">
              PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[65px] left-0 right-0 bg-[#0300149e] backdrop-blur-lg border-t border-[#7042f861] md:hidden z-50">
            <div className="flex flex-col items-center py-4 space-y-4 text-gray-200">
              <a href="#about-me" className="cursor-pointer hover:text-white w-full text-center py-2" onClick={toggleMenu}>
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-white w-full text-center py-2" onClick={toggleMenu}>
                Skills
              </a>
              <a href="#experience" className="cursor-pointer hover:text-white w-full text-center py-2" onClick={toggleMenu}>
                Experience
              </a>
              <a href="#projects" className="cursor-pointer hover:text-white w-full text-center py-2" onClick={toggleMenu}>
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[50px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 md:px-6">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <motion.a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <motion.span 
            className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              textShadow: "0 0 8px rgb(124, 58, 237, 0.5), 0 0 12px rgb(45, 212, 191, 0.5)"
            }}
          >
              PORTFOLIO
          </motion.span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[400px] h-full flex-row items-center justify-between md:mr-10">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[10px] px-[12px] py-[6px] rounded-full text-gray-200 text-sm">
            <motion.a 
              href="#home" 
              className="cursor-pointer relative px-1.5 py-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Home
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#about-me" 
              className="cursor-pointer relative px-1.5 py-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              About me
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#skills" 
              className="cursor-pointer relative px-1.5 py-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Skills
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="cursor-pointer relative px-1.5 py-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Projects
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#certificates" 
              className="cursor-pointer relative px-1.5 py-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Certificates
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden flex items-center p-2 rounded-md text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1, color: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <>
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 12h16" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 18h16" 
                  />
                </>
              )}
            </svg>
          </motion.div>
        </motion.button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            className="absolute top-[50px] left-0 right-0 bg-[#0300149e] backdrop-blur-lg border-t border-[#7042f861] md:hidden z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-2 space-y-2 text-gray-200">
              <motion.a 
                href="#home" 
                className="cursor-pointer w-full text-center py-1.5 relative text-sm" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Home</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#about-me" 
                className="cursor-pointer w-full text-center py-1.5 relative text-sm" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">About me</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#skills" 
                className="cursor-pointer w-full text-center py-1.5 relative text-sm" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Skills</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#projects" 
                className="cursor-pointer w-full text-center py-1.5 relative text-sm" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Projects</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#certificates" 
                className="cursor-pointer w-full text-center py-1.5 relative text-sm" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Certificates</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ResumeLink, Socials } from "@/constants";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
      }}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey, I&apos;m{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              {" "}
              Anshu Raj{" "}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          I&apos;m a <span className="text-purple-400 font-medium">Full Stack Developer</span> with expertise in creating
          responsive websites, mobile applications, and robust software solutions.
          Explore my <span className="text-cyan-400 font-medium">projects</span> and <span className="text-purple-400 font-medium">skills</span> below.
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row items-center gap-6"
        >
          {/* Social Media Icons */}
          <div className="flex flex-row gap-4">
            {Socials.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 button-primary flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <Image 
                      src={social.src} 
                      alt={social.name} 
                      width={16} 
                      height={16} 
                      className="brightness-0 invert w-4 h-4" 
                      loading="eager"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={ResumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 button-primary text-center text-white font-medium cursor-pointer rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            className="drop-shadow-lg w-auto h-auto"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
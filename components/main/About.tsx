"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-[10px] px-[20px] border border-[#7042f88b] opacity-[0.9] rounded-full"
        >
          <h3 className="text-[13px] text-[#b49bff]">
            Get to know me
          </h3>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl font-bold text-white mt-[10px] text-center mb-[30px]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 px-10 md:px-20 max-w-6xl">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex-1 flex flex-col gap-5"
        >
          <h3 className="text-2xl font-bold text-white">
            Full-Stack Developer with a passion for creating beautiful, functional websites
          </h3>
          <p className="text-gray-300 text-lg">
            I'm Anshu Raj, a dedicated Full-Stack Developer with expertise in modern web technologies. 
            With a strong foundation in both front-end and back-end development, I create seamless, 
            responsive applications that deliver exceptional user experiences.
          </p>
          <p className="text-gray-300 text-lg">
            My journey in web development began with a curiosity about how websites work, which 
            evolved into a passion for building them. I specialize in React, Next.js, Node.js, 
            and various other technologies that enable me to bring creative ideas to life.
          </p>
          <p className="text-gray-300 text-lg">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
            projects, and continuously expanding my knowledge in this ever-evolving field.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex-1 flex flex-col gap-4"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-[#0300145e] p-6 rounded-lg border border-[#7042f861] shadow-lg shadow-[#2A0E61]/50"
          >
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
              Education
            </h4>
            <p className="text-gray-300">
              Bachelor's in Computer Science with specialization in Web Technologies
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-[#0300145e] p-6 rounded-lg border border-[#7042f861] shadow-lg shadow-[#2A0E61]/50"
          >
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
              Experience
            </h4>
            <p className="text-gray-300">
              5+ years of professional experience in web development and application design
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-[#0300145e] p-6 rounded-lg border border-[#7042f861] shadow-lg shadow-[#2A0E61]/50"
          >
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
              Interests
            </h4>
            <p className="text-gray-300">
              UI/UX Design, Cloud Computing, Open Source Contribution, and Continuous Learning
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
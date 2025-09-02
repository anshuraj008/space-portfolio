"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <motion.h1 
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>
      
      <motion.div 
        variants={slideInFromLeft(0.5)}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        <ProjectCard
          src="/Meet-ai.png"
          title="Meet AI Website"
          description="Developed a real-time meeting platform with an integrated AI agent that listens to conversations boosting meeting productivity by 30%."
        />

        <ProjectCard
          src="/Tour.png"
          title="Tour & Travel Website"
          description="Designed a full-stack booking website for tours & travel using MERN stack, improving user booking efficiency by 30%."
        />

        <ProjectCard
          src="/Chat.png"
          title="Streamify Website"
          description="Built a real-time chat & video communication web application, users to connect globally boosted user engagement by 35%."
        />

          <ProjectCard
          src="/Design.png"
          title="Retro Design Website"
          description="A visually nostalgic website inspired by retro aesthetics, featuring bold typography, vintage classic palettes and playful illustrations."
        />

          <ProjectCard
          src="/can.png"
          title="3D Animation Website"
          description="A web-based 3D animation project built using HTML, CSS, and JavaScript, showcasing interactive motion effects and immersive user experiences."
        />
        
          <ProjectCard
          src="/Animation.png"
          title="Blue Print Website"
          description="A blueprint-style website designed with HTML, CSS, and JavaScript, interactive elements that mimic architectural design plans."
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
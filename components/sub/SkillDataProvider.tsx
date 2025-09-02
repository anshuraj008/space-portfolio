"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name?: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.05;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={containerVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.35 }}
      whileHover={{ scale: 1.06 }}
      className="group flex flex-col items-center gap-2"
    >
      {/* Icon tile with consistent sizing + hover effects */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm shadow-md shadow-[#2A0E61]/30 p-3 grid place-items-center transition-all duration-200 group-hover:border-purple-400/70 group-hover:shadow-lg group-hover:shadow-purple-500/20 transform-gpu">
        <motion.div
          initial={{ rotate: -180 }}
          animate={inView ? { rotate: 0 } : { rotate: -180 }}
          whileHover={{ scale: 1.08, rotate: 360 }}
          transition={{
            rotate: { duration: 0.6, delay: index * animationDelay, ease: "easeOut" },
            scale: { type: "spring", stiffness: 400, damping: 20 },
          }}
          className="w-full h-full will-change-transform"
        >
          <Image
            src={src}
            width={width}
            height={height}
            alt={name ? `${name} logo` : "skill image"}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
      </div>

      {/* Label */}
      {name && (
        <span className="text-xs md:text-sm text-gray-200 text-center max-w-[7rem] truncate" title={name}>
          {name}
        </span>
      )}
    </motion.div>
  );
};

export default SkillDataProvider;
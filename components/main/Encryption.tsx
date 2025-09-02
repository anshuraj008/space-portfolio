"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-row relative items-center justify-center w-full h-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Performance
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            {" "}
            &{" "}
          </motion.span>
          Security
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto"
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <motion.div
            animate={isHovered ? { y: 20, rotateZ: 10 } : { y: 5, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
            />
          </motion.div>
          <motion.div
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className="z-10"
            />
          </motion.div>
        </div>

        <motion.div 
          className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]"
          animate={isHovered ? 
            { boxShadow: "0px 0px 15px rgba(123, 67, 251, 0.5)" } : 
            { boxShadow: "0px 0px 0px rgba(123, 67, 251, 0)" }
          }
        >
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute z-[20] bottom-[10px] px-[5px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
      </motion.div>

      <motion.div 
        className="w-full flex items-start justify-center absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </motion.div>
    </motion.div>
  );
};

export default Encryption;
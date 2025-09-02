"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import CertificateCard from "../sub/CertificateCard";

// Staggered list animation
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificates = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="certificates"
      className="w-full py-20 -mt-6"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={slideInFromTop}
          className="text-center text-[32px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Certificates
        </motion.h2>
        <motion.p
          variants={slideInFromTop}
          className="mt-4 text-center text-neutral-400 max-w-2xl mx-auto"
        >
          A collection of my professional certifications and course completions.
        </motion.p>

        <motion.div
          variants={container}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {/* Replace placeholders below with your real certificates */}
          <motion.div variants={item}>
            <CertificateCard
              src="/Internship1.png"
              title="Full-Stack Internship"
              issuer="Ardent CompuTech"
              date="2024"
              href="/Internship1.pdf"
            />
          </motion.div>
          <motion.div variants={item}>
            <CertificateCard
              src="/Internship2.png"
              title="React Advanced"
              issuer="Udemy"
              date="2023"
              href="/Internship2.pdf"
            />
          </motion.div>
          <motion.div variants={item}>
            <CertificateCard
              src="/Internship3.png"
              title="Cloud Fundamentals"
              issuer="Google Cloud"
              date="2023"
              href="/Internship3.pdf"
            />
          </motion.div>
          <motion.div variants={item}>
            <CertificateCard
              src="/Internship4.png"
              title="TypeScript Essentials"
              issuer="Microsoft Learn"
              date="2023"
              href="/Internship4.pdf"
            />
          </motion.div>
          <motion.div variants={item}>
            <CertificateCard
              src="/Internship5.png"
              title="Node.js Backend"
              issuer="Coursera"
              date="2022"
              href="/Internship5.pdf"
            />
          </motion.div>
           <motion.div variants={item}>
            <CertificateCard
              src="/Internship6.png"
              title="Node.js Backend"
              issuer="Coursera"
              date="2022"
              href="/Internship6.pdf"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certificates;
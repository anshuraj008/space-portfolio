"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Socials } from "@/constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "mailto:anshuraj@gmail.com"; // target email
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`From: ${email}\nPassword: ${password}`);
    window.location.href = `${to}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="relative w-full bg-[#070216]/70 backdrop-blur border-t border-white/10 text-gray-300">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(123,67,251,0.15),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Socials */}
        <div>
          <motion.h3 
            className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Connect
          </motion.h3>
          <motion.p 
            className="mt-3 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Follow me on social media and stay updated with my latest projects.
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-3">
            {Socials.map((social, i) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <div className="w-10 h-10 rounded-lg border border-white/15 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center shadow-lg shadow-purple-500/10">
                    <Image src={social.src} alt={social.name} width={18} height={18} className="brightness-0 invert" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <motion.h3 
            className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quick Links
          </motion.h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about-me" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#certificates" className="hover:text-white transition-colors">Certificates</a></li>
          </ul>

          <div className="mt-6 text-sm text-gray-400">
            <p>Contact: <a href="mailto:anshuraj122502@gmail.com" className="text-cyan-300 hover:underline">anshuraj122502@gmail.com</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <motion.h3 
            className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Send a Message
          </motion.h3>
          <form onSubmit={handleMailto} className="mt-4 space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm outline-none focus:border-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm outline-none focus:border-cyan-400/50"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full button-primary rounded-md py-2 text-sm font-medium shadow-lg shadow-purple-500/20"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Anshu Raj. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js, TypeScript & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
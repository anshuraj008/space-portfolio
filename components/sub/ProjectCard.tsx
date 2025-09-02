import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string; // optional link to project (site or repo)
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  const card = (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(123, 67, 251, 0.5)" }}
    >
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain transition-transform duration-500 hover:scale-110"
        />
      </div>

      <motion.div
        className="relative p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        {card}
      </Link>
    );
  }

  return card;
};

export default ProjectCard;
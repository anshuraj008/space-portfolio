import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  issuer?: string;
  date?: string;
  href?: string; // link to certificate (pdf or external)
}

const CertificateCard = ({ src, title, issuer, date, href }: Props) => {
  const isExternal = !!href && href.startsWith("http");

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(123, 67, 251, 0.5)" }}
    >
      <div className="overflow-hidden">
        {href ? (
          <Link href={href} target={isExternal ? "_blank" : "_blank"} rel="noopener noreferrer">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={600}
              className="w-full object-contain transition-transform duration-500 hover:scale-110 cursor-pointer"
            />
          </Link>
        ) : (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={600}
            className="w-full object-contain transition-transform duration-500 hover:scale-110"
          />
        )}
      </div>

      <motion.div
        className="relative p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h3>
        {(issuer || date) && (
          <p className="mt-1 text-sm text-gray-400">{issuer}{issuer && date ? " • " : ""}{date}</p>
        )}

        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 rounded-md border border-cyan-500/40 px-3 py-1 text-sm text-cyan-300 transition-colors hover:bg-cyan-500/10 cursor-pointer"
            aria-label={`View ${title}`}
          >
            View Certificate →
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CertificateCard;
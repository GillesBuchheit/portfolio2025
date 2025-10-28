"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col backdrop-blur-sm bg-white/50 border border-[#0A0100]/10 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#e61f00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0100]/80 via-[#0A0100]/20 to-transparent" />
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-erstoria text-[#0A0100]/90 mb-3 group-hover:text-[#e61f00] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-[#0A0100]/70 font-light mb-4 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="px-3 py-1 text-xs font-medium bg-[#0A0100]/5 border border-[#0A0100]/10 text-[#0A0100]/70 hover:bg-[#e61f00]/10 hover:border-[#e61f00]/30 hover:text-[#e61f00] transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {link && (
          <div className="mt-4 pt-4 border-t border-[#0A0100]/10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#0A0100]/60 hover:text-[#e61f00] transition-colors duration-300"
            >
              Voir le projet
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

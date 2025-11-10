"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface TechCardProps {
  category: string;
  description: string;
  technos: [
    {
      name: string;
      icon: string;
    },
  ];
}

export default function TechCard({
  category,
  description,
  technos,
}: TechCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col backdrop-blur-sm bg-white/50 border shadow-sm hover:shadow-md transition-all duration-300 ${isOpen ? "border-brand/50 shadow-brand/10" : "border-[#0A0100]/10"} p-6`}
    >
      <div
        className={`absolute inset-0 blur-xl transition-all duration-300 ${isOpen ? "bg-brand/5" : "bg-transparent"}`}
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-lg lg:text-xl font-bold text-[#0A0100]/90 mb-1">
            {category}
          </div>
          <div className="text-xs lg:text-sm text-[#0A0100]/60 font-light">
            {description}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`shrink-0 p-2 transition-all duration-300 ${isOpen ? "bg-brand/10 hover:bg-brand/20" : "hover:bg-[#0A0100]/5"}`}
          aria-label={isOpen ? "Fermer les détails" : "Voir les détails"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ChevronDown
              size={24}
              className={`transition-colors duration-300 ${isOpen ? "text-brand" : "text-[#0A0100]/60"}`}
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 20 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative overflow-hidden"
          >
            <div className="w-full h-px bg-linear-to-r from-transparent via-brand/20 to-transparent mb-5" />

            <div className="grid grid-cols-2 gap-4">
              {technos.map((techno, index) => (
                <motion.div
                  key={techno.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex flex-row items-center gap-3 p-2 hover:bg-[#0A0100]/5 transition-colors duration-200"
                >
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src={techno.icon}
                      alt={techno.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm font-medium text-[#0A0100]/80">
                    {techno.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

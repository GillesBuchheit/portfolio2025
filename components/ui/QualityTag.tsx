"use client";

import { motion } from "motion/react";

interface QualityTagProps {
  qualities: string[];
}

export default function QualityTag({ qualities }: QualityTagProps) {
  const uniqueQualities = Array.from(new Set(qualities));

  return (
    <div className="relative w-full mt-10">
      {/* <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#e61f00]/30 to-transparent" /> */}

      <div className="flex flex-wrap gap-3 lg:gap-4 pt-8 justify-center lg:justify-start">
        {uniqueQualities.map((quality, index) => (
          <motion.div
            key={quality}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#e61f00]/0 group-hover:bg-[#e61f00]/5 blur-xl transition-all duration-300" />

            <div className="relative px-6 py-3 bg-white/50 backdrop-blur-sm border border-[#0A0100]/10 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-[#e61f00]/30">
              <span className="absolute rounded-full left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#e61f00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="text-sm lg:text-base font-light text-[#0A0100]/70 group-hover:text-[#0A0100]/90 transition-colors duration-300 pl-0 group-hover:pl-3">
                {quality}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

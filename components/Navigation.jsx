"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

function Menu({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      label: "ACCUEIL",
      href: "/",
    },
    {
      label: "À PROPOS",
      href: "/#apropos",
    },
    {
      label: "COMPÉTENCES",
      href: "/#competences",
    },
    {
      label: "PORTFOLIO",
      href: "/#portfolio",
    },
    {
      label: "CONTACT",
      href: "/contact",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center bg-[#f5f5f0]"
        >
          <motion.div className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={item.href}
                href={item.href}
                className="text-black font-erstoria text-4xl md:text-6xl hover:text-[#0A0100]/60 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Navigation Header */}
      <div className="text-white flex items-center justify-between w-full fixed top-0 left-0 px-4 sm:px-6 md:px-12 lg:px-20 py-10 z-50">
        <Link
          href="/"
          className="bg-[#0A0100] w-15 h-15 font-erstoria text-2xl sm:text-3xl md:text-3xl hidden md:flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          GB.
        </Link>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="p-5 w-15 h-15 hover:scale-110 transition-all duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="xicon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <XIcon size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menuicon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon size={32} />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </>
  );
}

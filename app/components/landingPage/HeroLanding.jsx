"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

const technologies = ["React", "Java", "Next.js", "TypeScript"];

export default function HeroLanding() {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="accueil"
      className="relative min-h-screen h-screen flex flex-col overflow-hidden bg-[#f5f5f0] px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <Navigation />
      <div className="flex flex-1 pt-8 sm:pt-12 md:pt-16  items-center lg:justify-between justify-center gap-8">
        <div className="flex flex-col justify-center w-full lg:w-3/5 max-w-full items-center lg:items-start">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 sm:w-14 bg-[#0A0100]"></span>
            <h1 className="text-xs sm:text-sm lg:text-lg font-erstoria text-[#0A0100]/60 whitespace-nowrap">
              GILLES BUCHHEIT
            </h1>
            <span className="h-px w-8 sm:w-14 bg-[#0A0100]"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl text-brand font-erstoria mt-2 text-center lg:text-left">
            Développeur web
          </h2>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl text-black font-erstoria flex flex-wrap items-center justify-center lg:justify-start min-h-[1.2em] gap-2">
            <span className="whitespace-nowrap">Fullstack</span>
            <span>|</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTechIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {technologies[currentTechIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-4 sm:mt-6 md:mt-10 font-light text-[#0a0100b3] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-center lg:text-left">
            Transformer les idées en expériences digitales puissantes qui
            engagent, inspirent et connectent.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto justify-center lg:justify-start">
            <Button
              size="xxl"
              className="hover:bg-[#B91C1C] text-white group font-erstoria text-sm sm:text-base w-full sm:w-auto"
              asChild
            >
              <Link href="/#portfolio">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link href="/contact">
              <Button
                size="xxl"
                variant="outline"
                className="hover:bg-[#FEF2F2] font-erstoria text-sm sm:text-base w-full sm:w-auto"
              >
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/hero_banner.jpg"
          alt="Illustration"
          width={1920}
          height={1097}
          className="hidden lg:block object-cover lg:w-2/5 h-auto rotate-90 xl:rotate-0"
        />
      </div>

      <div className="grid grid-cols-2 sm:flex sm:justify-between  gap-4 sm:gap-6 py-4 sm:py-6">
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <span className="font-erstoria text-sm sm:text-base">
            Travaille à
          </span>
          <span className="text-xs sm:text-sm text-[#0A0100]/60">
            METZ | NANCY | LUXEMBOURG
          </span>
        </div>
        <div className="flex flex-col justify-center gap-1 items-center">
          <span className="font-erstoria text-lg sm:text-xl">3</span>
          <span className="text-xs sm:text-sm text-[#0A0100]/60 text-center">
            ANS D&apos;EXPERIENCE
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center sm:items-center col-span-2 sm:col-span-1">
          <Link
            href="#"
            className="font-erstoria text-sm sm:text-base transition-colors"
          >
            Explorer
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-transparent cursor-pointer hover:text-[#0A0100]/60 hover:scale-110 transition-all duration-300"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

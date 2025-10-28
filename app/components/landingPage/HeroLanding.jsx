import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function HeroLanding() {
  return (
    <section className="relative h-screen flex flex-col  overflow-hidden bg-[#f5f5f0] justify-between ">
      <div className=" flex pt-16 px-12 lg:px-20 justify-between  ">
        <div className="flex flex-col justify-center ">
          <div className="flex items-center gap-2   ">
            <span className="h-px w-14 bg-[#0A0100]"></span>
            <h1 className="text-sm lg:text-lg font-erstoria text-[#0A0100]/60">
              GILLES BUCHHEIT
            </h1>
            <span className="h-px w-14 bg-[#0A0100]"></span>
          </div>
          <h2 className="text-5xl lg:text-7xl xl:text-8xl md:text-5xl sm:text-4xl  text-[#e61f00] font-erstoria">
            Développeur web
          </h2>
          <span className="text-5xl lg:text-7xl xl:text-8xl md:text-6xl sm:text-5xl text-black font-erstoria">
            Fullstack React | Java
          </span>
          <p className="mt-10 font-light text-[#0a0100b3] mb-15 text-sm lg:text-xl">
            Transformer les idées en expériences digitales puissantes qui
            engagent, inspirent et connectent.
          </p>
          <div className="flex flex-wrap gap-4  ">
            <Button
              size="xxl"
              className=" hover:bg-[#B91C1C] text-white group font-erstoria"
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5  group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xxl"
              variant="outline"
              className="hover:bg-[#FEF2F2] font-erstoria"
            >
              Me contacter
            </Button>
          </div>
        </div>
        <Image
          src="/abstract2.jpg"
          alt="Illustration"
          width={400}
          height={500}
        />
      </div>

      <div className="flex sm:justify-between px-12 p-6 flex-col sm:flex-row flex-wrap ">
        <div className="flex flex-col gap-1 ">
          <span className="font-erstoria">Travaille à</span>
          <span className="text-sm text-[#0A0100]/60">
            METZ | NANCY | LUXEMBOURG
          </span>
        </div>
        <div className="flex flex-col justify-center gap-1 items-center">
          <span className="font-erstoria">3</span>
          <span className="text-sm text-[#0A0100]/60">ANS D'EXPERIENCE</span>
        </div>
        <div className="flex flex-col gap-1 align-baseline">
          <Link href="#" className="font-erstoria">
            Explorer
          </Link>
          <span className="text-sm text-[#0A0100]/60">
            METZ | NANCY | LUXEMBOURG
          </span>
        </div>
      </div>
    </section>
  );
}

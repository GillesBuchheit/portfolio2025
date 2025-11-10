"use client";

import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Footer from "../components/landingPage/Footer";
import Navigation from "@/components/Navigation";
import { contactInfo, personalInfo, contactDetails } from "@/lib/contactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      <Navigation />

      <section className="relative min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 sm:w-14 bg-[#0A0100]"></span>
              <h1 className="text-xs sm:text-sm lg:text-lg font-erstoria text-[#0A0100]/60 whitespace-nowrap">
                RESTONS EN CONTACT
              </h1>
              <span className="h-px w-8 sm:w-14 bg-[#0A0100]"></span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand font-erstoria mb-4">
              Contact
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-erstoria text-[#0A0100]/60 tracking-wide mt-6">
              Une question ? Un projet ? Parlons-en.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-16 bg-white/50 p-6 rounded-lg border border-[#0A0100]/10 max-w-md">
            <MapPin className="w-6 h-6 text-brand" />
            <div>
              <p className="font-erstoria text-sm text-[#0A0100]/60 mb-1">
                Localisation
              </p>
              <p className="font-light text-[#0A0100] text-lg">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-lg border border-[#0A0100]/10 hover:border-brand/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors duration-300 shrink-0">
                      <Icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-erstoria text-xl text-[#0A0100] mb-2">
                        {contact.label}
                      </h3>
                      <p className="text-sm text-[#0A0100]/60 mb-3">
                        {contact.description}
                      </p>
                      {contact.href ? (
                        <Link
                          href={contact.href}
                          target={
                            contact.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            contact.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-brand font-medium text-sm hover:underline inline-flex items-center gap-2 group/link"
                        >
                          {contact.value}
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <p className="text-[#0A0100] font-medium text-sm">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl -z-10 group-hover:bg-brand/10 transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0A0100] text-white p-8 md:p-12 rounded-lg relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="font-erstoria text-3xl md:text-4xl mb-4">
                Prêt à démarrer un projet ?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl">
                Je suis disponible pour des missions freelance et des
                opportunités de collaboration. Contactez-moi pour discuter de
                votre projet.
              </p>
              <Link href={`mailto:${contactDetails.email}`}>
                <Button
                  size="xxl"
                  className="bg-brand hover:bg-[#B91C1C] text-white group font-erstoria"
                >
                  Envoyez-moi un message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

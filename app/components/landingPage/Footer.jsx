"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0100] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#e61f00] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-[#e61f00]"></span>
              <h3 className="text-xl font-erstoria tracking-[0.2em] text-white">
                GILLES BUCHHEIT
              </h3>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Développeur web Fullstack passionné par la création
              d&apos;expériences digitales innovantes et performantes.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:border-[#e61f00] hover:bg-[#e61f00]/10 transition-all duration-300">
                  <Github className="w-5 h-5 text-white/60 group-hover:text-[#e61f00] transition-colors" />
                </div>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:border-[#e61f00] hover:bg-[#e61f00]/10 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-[#e61f00] transition-colors" />
                </div>
              </Link>
              <Link href="mailto:contact@gillesbuchheit.dev" className="group">
                <div className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:border-[#e61f00] hover:bg-[#e61f00]/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-[#e61f00] transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-erstoria text-sm tracking-[0.2em] text-[#e61f00] mb-6 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#accueil"
                  className="text-white/60 hover:text-[#e61f00] transition-colors duration-300 text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#apropos"
                  className="text-white/60 hover:text-[#e61f00] transition-colors duration-300 text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#competences"
                  className="text-white/60 hover:text-[#e61f00] transition-colors duration-300 text-sm"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-white/60 hover:text-[#e61f00] transition-colors duration-300 text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-[#e61f00] transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-erstoria text-sm tracking-[0.2em] text-[#e61f00] mb-6 uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#e61f00]" />
                <span>METZ | NANCY | LUXEMBOURG</span>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[#e61f00]" />
                <Link
                  href="mailto:contact@gillesbuchheit.dev"
                  className="hover:text-[#e61f00] transition-colors"
                >
                  contact@gillesbuchheit.dev
                </Link>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[#e61f00]" />
                <span>Sur demande</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-white/40 text-xs font-erstoria tracking-wider">
                © {currentYear} GILLES BUCHHEIT
              </p>
              <span className="h-px w-8 bg-white/20"></span>
              <p className="text-white/40 text-xs">Tous droits réservés</p>
            </div>
            {/* <div className="flex gap-6 text-xs text-white/40">
              <Link
                href="/mentions-legales"
                className="hover:text-[#e61f00] transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/politique-confidentialite"
                className="hover:text-[#e61f00] transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e61f00]/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}

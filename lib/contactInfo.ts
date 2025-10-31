import { Mail, Phone, Github, Linkedin, type LucideIcon } from "lucide-react";

export const personalInfo = {
  name: "GILLES BUCHHEIT",
  title: "Développeur web Fullstack",
  bio: "Développeur web Fullstack passionné par la création d'expériences digitales innovantes et performantes.",
  location: "METZ | NANCY | LUXEMBOURG",
};

export const contactDetails = {
  email: "contact@gillesbuchheit.dev",
  phone: "+33 6 77 46 23 73",
  github: {
    url: "https://github.com/GillesBuchheit",
    display: "github.com/gillesbuchheit",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/gilles-buchheit-01ab231bb/",
    display: "linkedin.com/in/gillesbuchheit",
  },
};

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  description: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    description: "Envoyez-moi un email pour discuter de vos projets",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: contactDetails.phone,
    href: null,
    description: "Disponible après premier contact",
  },
  {
    icon: Github,
    label: "GitHub",
    value: contactDetails.github.display,
    href: contactDetails.github.url,
    description: "Découvrez mes projets open source",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: contactDetails.linkedin.display,
    href: contactDetails.linkedin.url,
    description: "Connectons-nous professionnellement",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: contactDetails.github.url,
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: contactDetails.linkedin.url,
    icon: Linkedin,
  },
  {
    name: "Email",
    url: `mailto:${contactDetails.email}`,
    icon: Mail,
  },
];

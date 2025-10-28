import TechCard from "@/components/ui/TechCard";
import { Button } from "@/components/ui/button";

import DownloadCV from "./DownloadCv";

export default function Competences() {
  const technologies = [
    {
      category: "Frontend",

      description: "Création d’interfaces performantes et dynamiques",
      technos: [
        {
          name: "React",
          icon: "/logos/react.svg",
        },
        {
          name: "Redux",
          icon: "/logos/redux.svg",
        },
        {
          name: "Next.js",
          icon: "/logos/next.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/logos/tailwind.svg",
        },

        {
          name: "TypeScript",
          icon: "/logos/typescript.svg",
        },
      ],
    },
    {
      category: "Backend",

      description: "Création d’API robustes et performantes",
      technos: [
        {
          name: "Java",
          icon: "/logos/java.svg",
        },
        {
          name: "Spring Boot",
          icon: "/logos/spring.svg",
        },
        {
          name: "Python",
          icon: "/logos/python.svg",
        },
      ],
    },
    {
      category: "Base de données",
      description: "Gestion de bases de données",
      technos: [
        {
          name: "SQL server",
          icon: "/logos/sqlserver.svg",
        },
        {
          name: "Supabase",
          icon: "/logos/supabase.svg",
        },
      ],
    },
    {
      category: "Outils",
      description: "Outils de développement ",
      technos: [
        {
          name: "Git",
          icon: "/logos/git.svg",
        },
        {
          name: "Jenkins",
          icon: "/logos/jenkins.svg",
        },
      ],
    },
  ];

  return (
    <section className="relative h-screen pt-10 px-12 lg:px-20">
      <div className="flex relative">
        <div className="flex flex-col justify-center  flex-1">
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            EXPERTISE TECHNIQUE
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#e61f00]">
            Mes compétences
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            TECHNOLOGIES UTILISEES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {technologies.map((technology) => (
              <TechCard
                key={technology.category}
                category={technology.category}
                description={technology.description}
                technos={technology.technos}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}

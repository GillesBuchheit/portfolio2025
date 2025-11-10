import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import DownloadCV from "./DownloadCv";

export default function Portfolio() {
  const projects = [
    {
      title: "Portfolio personnel",
      description:
        "Mon portfolio personnel avec tous mes projets et mes compétences.",
      image: "/portfolio.png",
      image_width: 1901,
      image_height: 950,
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://gillesbuchheit.dev",
    },
    {
      title: "CourtClub",
      description:
        "Création de ligues de tennis avec gestion des joueurs, des matchs et des résultats.",
      image: "/court_club.png",
      image_width: 1919,
      image_height: 744,
      tags: ["React", "Redux", "Python", "fastAPI", "PostgreSQL"],
      link: "https://superleague-frontend.onrender.com/",
    },
    {
      title: "Site web Dr. Blanke Marine",
      description:
        "Site web de la clinique dentaire Dr. Blanke Marine avec portfolio de services, horaires et contact.",
      image: "/site_web_dr_blanke.png",
      image_width: 1919,
      image_height: 949,
      tags: ["Bootstrap", "PHP", "HTML", "CSS"],
      link: "https://dr-blanke-marine.chirurgiens-dentistes.fr/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen pt-10 px-12 lg:px-20 pb-20"
    >
      <div className="flex relative">
        <div className="flex flex-col justify-center flex-1">
          <SectionTitle
            preTitle="Portfolio"
            title="Mes projets"
            postTitle="Réalisations & applications web"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

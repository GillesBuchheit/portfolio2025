import ProjectCard from "@/components/ui/ProjectCard";
import DownloadCV from "./DownloadCv";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme de commerce électronique moderne avec gestion de panier, paiement sécurisé et interface administrateur complète.",
      image: "/abstract2.jpg",
      tags: ["React", "Next.js", "TypeScript", "Supabase"],
      link: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Application de gestion de tâches avec collaboration en temps réel, notifications et tableau de bord analytique.",
      image: "/building.jpg",
      tags: ["React", "Redux", "Spring Boot", "PostgreSQL"],
      link: "https://example.com",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Tableau de bord interactif pour visualiser et gérer un portfolio d'investissements avec graphiques en temps réel.",
      image: "/sphere.jpg",
      tags: ["Next.js", "Tailwind CSS", "Python", "SQL Server"],
      link: "https://example.com",
    },
    {
      title: "Social Media Platform",
      description:
        "Réseau social avec système de posts, commentaires, likes et messagerie instantanée entre utilisateurs.",
      image: "/red_texture.jpg",
      tags: ["React", "TypeScript", "Java", "Jenkins"],
    },
  ];

  return (
    <section className="relative min-h-screen pt-10 px-12 lg:px-20 pb-20">
      <div className="flex relative">
        <div className="flex flex-col justify-center flex-1">
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            PORTFOLIO
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#e61f00]">
            MES PROJETS
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            APPLICATIONS WEB
          </div>

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

          <div className="flex justify-center mt-10">
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}

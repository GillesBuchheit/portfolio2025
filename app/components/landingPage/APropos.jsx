import Image from "next/image";
import QualityTag from "@/components/ui/QualityTag";

export default function APropos() {
  const qualities = [
    "Performance",
    "Robustesse",
    "Fiabilité",
    "Design",
    "UX/UI",
  ];
  return (
    <section className="relative h-screen pt-10 px-12 lg:px-20">
      <div className="flex relative">
        <div className="flex flex-col justify-center  flex-1">
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            A PROPOS
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#e61f00]">
            CREATEUR
          </div>
          <div className="text-4xl lg:text-6xl font-erstoria text-[#0A0100]/60 mb-10">
            D&apos;APPLICATIONS WEB
          </div>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Je m'appelle Gilles Buchheit, j'ai 26 ans et je suis développeur web
            avec plus de 3 ans d'expérience. Passionné par le code et les
            technologies modernes, je conçois et développe des solutions web
            complètes, alliant performance, fiabilité et design soigné.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Mon travail se situe à la croisée du développement backend et de la
            création d'expériences utilisateur intuitives. J'accorde une grande
            importance à la qualité du code, à la structure des architectures
            logicielles et à la clarté des interfaces qui en découlent.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Ma philosophie : créer des applications qui ne se contentent pas de
            fonctionner, mais qui offrent une véritable valeur ajoutée grâce à
            un équilibre entre technologie, efficacité et expérience
            utilisateur.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Chaque projet est pour moi une opportunité d'innover, d'apprendre et
            de repousser mes limites, tout en maintenant un haut niveau
            d'exigence technique et créative.
          </p>
        </div>
        <div className="flex-1 relative hidden md:block">
          <Image
            className="absolute top-0 right-[10%] md:right-[15%] lg:right-[20%] z-10 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-72 object-cover"
            src="/abstract2.jpg"
            alt="Gilles Buchheit"
            width={200}
            height={200}
          />

          <Image
            className="absolute top-[30%] md:top-[35%] lg:top-[40%] right-0 md:right-[5%] z-20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-72 object-cover"
            src="/sphere.jpg"
            alt="Gilles Buchheit"
            width={640}
            height={1138}
          />

          <Image
            className="absolute top-[15%] md:top-[18%] lg:top-[20%] right-[25%] md:right-[30%] lg:right-[35%] z-30 w-28 h-36 md:w-32 md:h-40 lg:w-36 lg:h-48 object-cover"
            src="/red_texture.jpg"
            alt="Gilles Buchheit"
            width={150}
            height={200}
          />
        </div>
      </div>
      <QualityTag qualities={qualities} />
    </section>
  );
}

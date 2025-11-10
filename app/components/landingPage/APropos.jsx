import Image from "next/image";
import QualityTag from "@/components/ui/QualityTag";
import SectionTitle from "@/components/ui/SectionTitle";

const firstPicSizes = "w-32 h-32 md:w-40 md:h-40 lg:w-72 lg:h-96";
const secondPicSizes = "w-40 h-40 md:w-48 md:h-48 lg:w-72 lg:h-96";
const thirdPicSizes = "w-28 h-36 md:w-32 md:h-40 lg:w-55 lg:h-80";

export default function APropos() {
  const qualities = [
    "Performance",
    "Robustesse",
    "Fiabilité",
    "Design",
    "UX/UI",
  ];
  return (
    <section id="apropos" className="relative pt-10 px-12 lg:px-20 mb-10">
      <div className="flex relative">
        <div className="flex flex-col justify-center  flex-1">
          <SectionTitle
            preTitle="A propos"
            title="Créateur"
            postTitle="D'applications web modernes"
          />
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Je m’appelle Gilles Buchheit, je suis développeur web avec plus de 3
            ans d’expérience.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            J’aide les particuliers et les entreprises à concevoir des solutions
            web complètes, alliant performance, fiabilité et design soigné.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Mon travail couvre tout le processus de créationd’une application,
            de la conception jusqu’au déploiement. Je m’occupe du design, du
            développement d’un backend performant et de la mise en place
            d’interfaces modernes et intuitives.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            J'accorde une grande importance à la qualité du code, à la structure
            des architectures logicielles et à la clarté des interfaces qui en
            découlent.
          </p>
          <p className="font-light text-sm lg:text-xl text-[#0A0100]/60 mb-5">
            Chaque projet est pour moi une opportunité d’apprendre, de découvrir
            de nouvelles choses et de se confronter à de nouveaux challenges.
          </p>
        </div>
        <div className="flex-1 relative hidden md:block">
          <Image
            className={`absolute top-0 right-[10%] md:right-[15%] lg:right-[20%] z-10 w-32 h-32 ${firstPicSizes} object-cover`}
            src="/abstract2.jpg"
            alt="Gilles Buchheit"
            width={200}
            height={200}
          />

          <Image
            className={`absolute top-[30%] md:top-[35%] lg:top-[40%] right-0 md:right-[5%] z-20  ${secondPicSizes} object-cover`}
            src="/sphere.jpg"
            alt="Gilles Buchheit"
            width={640}
            height={1138}
          />

          <Image
            className={`absolute top-[15%] md:top-[18%] lg:top-[60%] right-[25%] md:right-[30%] lg:right-[35%] z-30 ${thirdPicSizes} object-cover`}
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

import Apropos from "./components/landingPage/APropos";
import Competences from "./components/landingPage/Competences";
import HeroLanding from "./components/landingPage/HeroLanding";
import Portfolio from "./components/landingPage/Portfolio";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      {/* Hero Section */}
      <HeroLanding />
      <Apropos />
      <Competences />
      <Portfolio />
    </div>
  );
}

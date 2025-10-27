import Image from "next/image";
import HeroLanding from "./components/landingPage/HeroLanding";
import Apropos from "./components/landingPage/APropos";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      {/* Hero Section */}
      <HeroLanding />
      <Apropos />
    </div>
  );
}

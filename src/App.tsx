import { useRef } from "react";
import Hero from "@components/Hero";
import OriginStory from "@components/OriginStory";
import GoldenEra from "@components/GoldenEra";
import ModernIcons from "@components/ModernIcons";
import ElectrificationPrelude from "@components/ElectrificationPrelude";
import TaycanReveal from "@components/TaycanReveal";
import LifestyleGallery from "@components/LifestyleGallery";
import Footer from "@components/Footer";
import TransitionStatement from "@components/TransitionStatement";
import HeroTransition from "@components/HeroTransition";

function App() {
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const stickyNavRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Hero heroImageRef={heroImageRef} stickyNavRef={stickyNavRef} />
      <HeroTransition heroImageRef={heroImageRef} stickyNavRef={stickyNavRef} />
      <OriginStory />
      <GoldenEra />
      <ModernIcons />
      <ElectrificationPrelude />
      <TaycanReveal />
      <LifestyleGallery />
      <TransitionStatement />
      <Footer />
    </>
  );
}

export default App;

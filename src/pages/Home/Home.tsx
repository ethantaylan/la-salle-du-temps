import { AccessibilitySection } from "./components/AccessibilitySection";
import { GymSpacesSection } from "./components/GymSpacesSection";
import { Hero } from "./components/Hero";
import { SavoirFaireSection } from "./components/SavoirFaireSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { VideoSection } from "./components/VideoSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <VideoSection />
      <AccessibilitySection />
      <GymSpacesSection />
      <SavoirFaireSection />
      <TestimonialsSection />
    </>
  );
};

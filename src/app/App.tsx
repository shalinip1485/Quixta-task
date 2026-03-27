import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ScrollRevealSection from "../components/ScrollRevealSection";
import JourneySection from "../components/JourneySection";
import SolutionsSection from "../components/SolutionsSection";
import GenTechSection from "../components/GenTechSection";
import TechnologySection from "../components/TechnologySection";
import SustainabilitySection from "../components/SustainabilitySection";
import NewsroomSection from "../components/NewsroomSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Chatbot } from "../components/Chatbot";

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-orange-500/30 selection:text-orange-200">
      <Header />
      <main>
        <HeroSection />
        <ScrollRevealSection />
        <JourneySection />
        <SolutionsSection />
        <GenTechSection />
        <TechnologySection />
        <SustainabilitySection />
        <NewsroomSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

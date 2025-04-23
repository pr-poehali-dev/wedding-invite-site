
import { Heart } from "lucide-react";
import WeddingHero from "@/components/WeddingHero";
import EventDetails from "@/components/EventDetails";
import ProgramSection from "@/components/ProgramSection";
import RsvpForm from "@/components/RsvpForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Главный баннер */}
      <WeddingHero />

      {/* Детали мероприятия */}
      <EventDetails />

      {/* Программа мероприятия */}
      <ProgramSection />

      {/* Форма подтверждения */}
      <RsvpForm />

      {/* Подвал сайта */}
      <footer className="py-8 text-center text-rose-600 bg-white">
        <Heart className="inline-block mr-1 h-4 w-4" />
        <span className="text-sm">С любовью, Анна и Михаил</span>
        <p className="text-xs text-rose-400 mt-2">2024</p>
      </footer>
    </div>
  );
};

export default Index;

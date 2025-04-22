
import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";
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
      <footer className="py-8 text-center text-rose-600">
        <Heart className="inline-block mr-1 h-4 w-4" />
        <span className="text-sm">С любовью, Анна и Михаил</span>
      </footer>
    </div>
  );
};

export default Index;


import { Heart } from "lucide-react";

const WeddingHero = () => {
  return (
    <section className="relative bg-rose-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Heart className="text-rose-500 h-12 w-12 animate-pulse" />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl mb-4 text-rose-800">Александра и Иван</h1>
          <p className="text-lg md:text-xl text-rose-700 mb-3">приглашают вас на свою свадьбу</p>
          <div className="w-24 h-1 bg-rose-400 mx-auto my-6"></div>
          <p className="text-xl md:text-3xl font-semibold text-rose-900 mb-8">28 июня 2025</p>
          <div className="inline-block border-2 border-rose-300 rounded-lg px-10 py-6 bg-white/80 backdrop-blur shadow-md">
            <p className="text-rose-600 italic">
              Мы с радостью приглашаем вас разделить с нами один из самых важных дней в нашей жизни
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;

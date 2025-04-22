
import { Heart } from "lucide-react";

const WeddingHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-b from-rose-100 to-rose-50 px-4">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Heart size={80} className="text-rose-300" />
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-12">
          <Heart size={80} className="text-rose-300" />
        </div>
      </div>
      
      {/* Основное содержимое */}
      <div className="text-center z-10 max-w-3xl mx-auto">
        <p className="text-rose-500 font-medium mb-4">Мы женимся!</p>
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6">
          Анна & Михаил
        </h1>
        <div className="h-0.5 w-20 bg-rose-300 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-rose-700 mb-8">
          С радостью приглашаем вас на наше торжество
        </p>
        <div className="text-3xl md:text-4xl font-semibold text-rose-600 mb-2">
          20 июля 2024
        </div>
        <p className="text-rose-500">
          Просим подтвердить ваше присутствие до 1 июля
        </p>
        
        <div className="mt-12">
          <a 
            href="#rsvp" 
            className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Подтвердить присутствие
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingHero;

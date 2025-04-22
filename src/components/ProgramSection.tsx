
import { Camera, Music, Utensils, Wine } from "lucide-react";

const ProgramSection = () => {
  return (
    <div className="py-16 bg-rose-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
          Программа дня
        </h2>
        
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* События */}
          <div className="space-y-12">
            {/* Событие 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-rose-700">15:00 — 16:00</h3>
                <h4 className="text-lg font-medium text-rose-600 mt-1">Сбор гостей</h4>
                <p className="text-rose-600 mt-2">
                  Приветственные напитки и легкие закуски
                </p>
              </div>
              <div className="bg-white p-4 rounded-full border border-rose-200 z-10">
                <Wine className="h-6 w-6 text-rose-500" />
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            {/* Событие 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="bg-white p-4 rounded-full border border-rose-200 z-10">
                <Camera className="h-6 w-6 text-rose-500" />
              </div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                <h3 className="text-xl font-semibold text-rose-700">16:00 — 17:00</h3>
                <h4 className="text-lg font-medium text-rose-600 mt-1">Свадебная церемония</h4>
                <p className="text-rose-600 mt-2">
                  Торжественная регистрация брака и обмен кольцами
                </p>
              </div>
            </div>
            
            {/* Событие 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-rose-700">17:00 — 19:00</h3>
                <h4 className="text-lg font-medium text-rose-600 mt-1">Праздничный ужин</h4>
                <p className="text-rose-600 mt-2">
                  Изысканное меню и праздничные тосты
                </p>
              </div>
              <div className="bg-white p-4 rounded-full border border-rose-200 z-10">
                <Utensils className="h-6 w-6 text-rose-500" />
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            {/* Событие 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="bg-white p-4 rounded-full border border-rose-200 z-10">
                <Music className="h-6 w-6 text-rose-500" />
              </div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                <h3 className="text-xl font-semibold text-rose-700">19:00 — 23:00</h3>
                <h4 className="text-lg font-medium text-rose-600 mt-1">Танцы и развлечения</h4>
                <p className="text-rose-600 mt-2">
                  Музыкальная программа, конкурсы и танцы до упаду
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;


import { Clock, Music, Camera, Utensils, Wine } from "lucide-react";

const ProgramSection = () => {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-rose-800 font-serif mb-12">Программа дня</h2>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="bg-rose-200 rounded-full p-3">
                <Clock className="h-6 w-6 text-rose-600" />
              </div>
              <div className="h-full w-0.5 bg-rose-300 my-2"></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-rose-200 w-full">
              <div className="flex items-center mb-3">
                <Clock className="md:hidden h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-lg font-semibold text-rose-700">15:00 - Сбор гостей</h3>
              </div>
              <p className="text-rose-600">Приветственные напитки и лёгкие закуски</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="bg-rose-200 rounded-full p-3">
                <Camera className="h-6 w-6 text-rose-600" />
              </div>
              <div className="h-full w-0.5 bg-rose-300 my-2"></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-rose-200 w-full">
              <div className="flex items-center mb-3">
                <Camera className="md:hidden h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-lg font-semibold text-rose-700">16:00 - Церемония</h3>
              </div>
              <p className="text-rose-600">Торжественная регистрация брака и фотосессия</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="bg-rose-200 rounded-full p-3">
                <Utensils className="h-6 w-6 text-rose-600" />
              </div>
              <div className="h-full w-0.5 bg-rose-300 my-2"></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-rose-200 w-full">
              <div className="flex items-center mb-3">
                <Utensils className="md:hidden h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-lg font-semibold text-rose-700">17:30 - Праздничный ужин</h3>
              </div>
              <p className="text-rose-600">Изысканные блюда и тосты</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="bg-rose-200 rounded-full p-3">
                <Music className="h-6 w-6 text-rose-600" />
              </div>
              <div className="h-full w-0.5 bg-rose-300 my-2"></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-rose-200 w-full">
              <div className="flex items-center mb-3">
                <Music className="md:hidden h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-lg font-semibold text-rose-700">19:00 - Танцы и развлечения</h3>
              </div>
              <p className="text-rose-600">Живая музыка, конкурсы и первый танец молодожёнов</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="bg-rose-200 rounded-full p-3">
                <Wine className="h-6 w-6 text-rose-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-rose-200 w-full">
              <div className="flex items-center mb-3">
                <Wine className="md:hidden h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-lg font-semibold text-rose-700">23:00 - Завершение вечера</h3>
              </div>
              <p className="text-rose-600">Торт, шампанское и тёплые пожелания</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

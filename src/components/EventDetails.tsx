
import { Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-rose-800 font-serif mb-12">Детали торжества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-rose-50 p-6 rounded-lg text-center transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <Calendar className="h-10 w-10 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Дата</h3>
            <p className="text-rose-900">28 июня 2025</p>
            <p className="text-rose-600 mt-2">Суббота</p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Время</h3>
            <p className="text-rose-900">Начало в 15:00</p>
            <p className="text-rose-600 mt-2">Просим не опаздывать</p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <MapPin className="h-10 w-10 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Место</h3>
            <p className="text-rose-900">Ресторан "Лесная сказка"</p>
            <p className="text-rose-600 mt-2">ул. Лесная, 123</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            className="bg-rose-600 hover:bg-rose-700 text-white"
            onClick={() => window.open("https://maps.google.com", "_blank")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Открыть карту
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

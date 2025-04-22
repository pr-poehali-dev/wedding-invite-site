
import { MapPin, Clock, CalendarDays } from "lucide-react";

const EventDetails = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
          Детали торжества
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Дата */}
          <div className="text-center p-6 border border-rose-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Дата</h3>
            <p className="text-rose-600">20 июля 2024 года</p>
            <p className="text-rose-600">Суббота</p>
          </div>
          
          {/* Время */}
          <div className="text-center p-6 border border-rose-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Время</h3>
            <p className="text-rose-600">Сбор гостей в 15:00</p>
            <p className="text-rose-600">Начало церемонии в 16:00</p>
          </div>
          
          {/* Место */}
          <div className="text-center p-6 border border-rose-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Место</h3>
            <p className="text-rose-600">Загородный клуб "Сосновый бор"</p>
            <p className="text-rose-600">ул. Лесная, 123</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-rose-700 max-w-2xl mx-auto">
            Будем рады разделить с вами наш особенный день. Пожалуйста, приходите вовремя, 
            чтобы насладиться каждым моментом нашего праздника!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

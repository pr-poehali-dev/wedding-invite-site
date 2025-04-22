
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const RsvpForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь был бы код для отправки формы
    setSubmitted(true);
  };
  
  return (
    <div id="rsvp" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-4">
          Подтвердите присутствие
        </h2>
        <p className="text-center text-rose-600 mb-12">
          Пожалуйста, сообщите нам о своем решении до 1 июля 2024 года
        </p>
        
        {submitted ? (
          <div className="text-center p-8 bg-rose-50 rounded-lg">
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Спасибо!</h3>
            <p className="text-rose-600">
              Мы получили ваш ответ и будем рады видеть вас на нашем празднике!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Ваше имя и фамилия</Label>
                <Input 
                  id="fullName" 
                  placeholder="Иван Иванов" 
                  className="border-rose-200 focus:border-rose-500"
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email для связи</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="ivan@example.com" 
                  className="border-rose-200 focus:border-rose-500"
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Вы придете на наше торжество?</Label>
              <RadioGroup defaultValue="yes" className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer">Да, с удовольствием!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer">К сожалению, не смогу</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guests">Количество гостей (включая вас)</Label>
              <Input 
                id="guests" 
                type="number" 
                min="1" 
                max="5" 
                defaultValue="1" 
                className="border-rose-200 focus:border-rose-500"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Пожелания или комментарии</Label>
              <Textarea 
                id="message" 
                placeholder="Особые пожелания по меню, аллергии и т.д." 
                className="border-rose-200 focus:border-rose-500"
              />
            </div>
            
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-2 rounded-full"
              >
                Подтвердить
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RsvpForm;

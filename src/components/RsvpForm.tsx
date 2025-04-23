
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

const RsvpForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [guests, setGuests] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ name, email, attending, guests });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-rose-800 mb-3">Спасибо за ваш ответ!</h2>
            <p className="text-rose-600 mb-6">
              Мы получили ваше подтверждение и с нетерпением ждем встречи на нашей свадьбе!
            </p>
            <Button
              className="bg-rose-600 hover:bg-rose-700 text-white"
              onClick={() => setSubmitted(false)}
            >
              Изменить ответ
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-rose-800 font-serif mb-12">Подтвердите ваше присутствие</h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-rose-50 p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-rose-700 font-medium mb-2">
              Ваше имя и фамилия
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              required
              className="w-full border-rose-200 focus:border-rose-500 focus:ring-rose-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-rose-700 font-medium mb-2">
              Email для связи
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ivan@example.com"
              required
              className="w-full border-rose-200 focus:border-rose-500 focus:ring-rose-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-rose-700 font-medium mb-2">
              Вы планируете присутствовать?
            </label>
            <div className="flex space-x-4">
              <Button
                type="button"
                className={`flex-1 ${
                  attending === "yes"
                    ? "bg-rose-600 text-white"
                    : "bg-white text-rose-600 border border-rose-300"
                }`}
                onClick={() => setAttending("yes")}
              >
                Да, буду
              </Button>
              <Button
                type="button"
                className={`flex-1 ${
                  attending === "no"
                    ? "bg-rose-600 text-white"
                    : "bg-white text-rose-600 border border-rose-300"
                }`}
                onClick={() => setAttending("no")}
              >
                К сожалению, нет
              </Button>
            </div>
          </div>
          
          {attending === "yes" && (
            <div className="mb-6">
              <label htmlFor="guests" className="block text-rose-700 font-medium mb-2">
                Количество гостей (включая вас)
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full h-10 px-3 py-2 rounded-md border border-rose-200 bg-white text-base focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="1">1 (только я)</option>
                <option value="2">2 (я + гость)</option>
                <option value="3">3 (я + 2 гостя)</option>
                <option value="4">4 (я + 3 гостя)</option>
              </select>
            </div>
          )}
          
          <div className="text-center">
            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2"
              disabled={attending === null}
            >
              Отправить ответ
            </Button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-rose-600">
            Пожалуйста, подтвердите ваше присутствие до 1 августа 2024 года
          </p>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;

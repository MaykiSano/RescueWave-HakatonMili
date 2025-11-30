import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center mb-6 text-green-800">Свяжитесь с нами</h1>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Мы всегда рады ответить на ваши вопросы и обсудить возможности сотрудничества
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="mb-6 text-green-800">Отправить сообщение</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Тема сообщения"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Ваше сообщение..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-lg p-8 mb-6">
              <h2 className="mb-6 text-white">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-green-100">Email</h4>
                    <p>info@ecotech.ru</p>
                    <p>support@ecotech.ru</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-green-100">Телефон</h4>
                    <p>+7 (XXX) XXX-XX-XX</p>
                    <p className="text-sm text-green-200">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-green-100">Адрес</h4>
                    <p>проспект Кара Караева 126</p>
                    <p className="text-sm text-green-200">Офис 456</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="mb-4 text-green-800">Часто задаваемые вопросы</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-green-700">Как можно приобрести устройство?</h4>
                  <p className="text-gray-600 text-sm">
                    Свяжитесь с нами через форму обратной связи или по телефону, 
                    и мы обсудим детали сотрудничества.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-green-700">Предоставляете ли вы техническую поддержку?</h4>
                  <p className="text-gray-600 text-sm">
                    Да, мы предоставляем полную техническую поддержку и обучение 
                    для всех наших клиентов.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-green-700">Можно ли протестировать устройство?</h4>
                  <p className="text-gray-600 text-sm">
                    Мы организуем демонстрации для заинтересованных организаций. 
                    Свяжитесь с нами для согласования деталей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-4" />
            <p>Карта местоположения</p>
            <p className="text-sm">(можно интегрировать Google Maps или Яндекс.Карты)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

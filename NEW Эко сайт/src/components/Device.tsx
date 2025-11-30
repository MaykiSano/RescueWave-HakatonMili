import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Droplets, Wind, Battery, Gauge, CheckCircle } from 'lucide-react';

export function Device() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-white">Инновационное устройство для тушения пожаров</h1>
          <p className="text-xl max-w-3xl mx-auto text-green-100">
            Революционная технология, разработанная нами для быстрого и эффективного 
            тушения городских пожаров с минимальным воздействием на окружающую среду
          </p>
        </div>
      </section>

      {/* Device Image */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618607779902-5e491bf83477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZXh0aW5ndWlzaGVyJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NDA5MzA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Противопожарное оборудование"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h2 className="mb-12 text-green-800 text-center">Ключевые особенности</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Быстрое действие</h3>
              <p className="text-gray-600">
                Устройство активируется за секунды и начинает тушение пожара 
                в критически важное первое время
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <Droplets className="text-cyan-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Эко-состав</h3>
              <p className="text-gray-600">
                Используется экологически чистое огнетушащее вещество, 
                безопасное для растений и животных
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Wind className="text-green-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Широкий охват</h3>
              <p className="text-gray-600">
                Система распыления обеспечивает покрытие большой площади 
                для эффективной борьбы с огнём
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Battery className="text-purple-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Автономность</h3>
              <p className="text-gray-600">
                Длительное время работы без подзарядки позволяет использовать 
                устройство в отдалённых районах
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Gauge className="text-orange-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Мощность</h3>
              <p className="text-gray-600">
                Высокая производительность позволяет справляться 
                даже с интенсивными возгораниями
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-red-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Надёжность</h3>
              <p className="text-gray-600">
                Прочная конструкция и проверенная технология гарантируют 
                стабильную работу в любых условиях
              </p>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 mb-12">
            <h3 className="mb-8 text-green-800 text-center">Технические характеристики</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Радиус действия:</span>
                <span>До 50 метров</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Время работы:</span>
                <span>До 8 часов</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Вес устройства:</span>
                <span>12 кг</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Температура работы:</span>
                <span>От -20°C до +50°C</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Источник питания:</span>
                <span>Аккумулятор Li-Ion</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-3">
                <span className="text-gray-600">Объём резервуара:</span>
                <span>25 литров</span>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="mb-8 text-green-800 text-center">Принцип работы</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="mb-2">Обнаружение очага возгорания</h4>
                  <p className="text-gray-600">
                    Встроенные датчики температуры и дыма мгновенно определяют наличие пожара
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="mb-2">Активация системы</h4>
                  <p className="text-gray-600">
                    Устройство автоматически или вручную запускает процесс тушения
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="mb-2">Распыление огнетушащего состава</h4>
                  <p className="text-gray-600">
                    Экологически чистое вещество распыляется на очаг возгорания под высоким давлением
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="mb-2">Контроль и мониторинг</h4>
                  <p className="text-gray-600">
                    Система продолжает мониторинг области до полного устранения угрозы повторного возгорания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Заинтересованы в нашем устройстве?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Свяжитесь с нами для получения дополнительной информации или организации демонстрации
          </p>
          <button 
            onClick={() => window.location.hash = '#contact'}
            className="px-8 py-3 bg-white text-green-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Flame, Shield, Heart } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1567790484933-44b83527e991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NjQwMzc2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Природа"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-white mb-4">Защитим природу вместе</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Инновационные технологии для тушения городских пожаров и сохранения экосистемы
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              Узнать больше
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-green-800 rounded-lg transition-colors">
              Наше устройство
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-green-800">Наши приоритеты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-green-600" size={32} />
            </div>
            <h3 className="mb-3 text-green-800">Экология</h3>
            <p className="text-gray-600">
              Сохранение природных ресурсов и биоразнообразия
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="text-red-600" size={32} />
            </div>
            <h3 className="mb-3 text-green-800">Борьба с пожарами</h3>
            <p className="text-gray-600">
              Быстрое и эффективное тушение городских возгораний
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="mb-3 text-green-800">Безопасность</h3>
            <p className="text-gray-600">
              Защита людей и окружающей среды от огня
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-pink-600" size={32} />
            </div>
            <h3 className="mb-3 text-green-800">Забота о планете</h3>
            <p className="text-gray-600">
              Ответственное отношение к будущим поколениям
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-white">Факты о городских пожарах</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">🔥</div>
              <div className="text-4xl mb-2">15 млн</div>
              <p className="text-green-200">гектаров леса сгорает ежегодно</p>
            </div>
            <div>
              <div className="text-5xl mb-2">🌍</div>
              <div className="text-4xl mb-2">18%</div>
              <p className="text-green-200">выбросов CO2 от городских пожаров</p>
            </div>
            <div>
              <div className="text-5xl mb-2">⏰</div>
              <div className="text-4xl mb-2">1 час</div>
              <p className="text-green-200">критическое время для остановки пожара</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-white">Присоединяйтесь к нам</h2>
          <p className="mb-8 text-xl max-w-2xl mx-auto">
            Вместе мы можем защитить наши леса и создать лучшее будущее для планеты
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

import { ImageWithFallback } from './figma/ImageWithFallback';
import { TreePine, Droplet, Cloud, Recycle, AlertTriangle, TrendingUp } from 'lucide-react';

export function Ecology() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-white">Экология и охрана природы</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Узнайте о важности сохранения окружающей среды и том, как каждый из нас 
            может внести свой вклад в защиту планеты
          </p>
        </div>
      </section>

      {/* Environmental Issues */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-green-800">Экологические проблемы</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760254007518-10f595f9354f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmlyZSUyMGZvcmVzdHxlbnwxfHx8fDE3NjQwOTMwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Лесной пожар"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-green-800">Городские пожары</h3>
            <p className="text-gray-700 mb-4">
              Городские пожары — одна из самых серьёзных экологических угроз. Они уничтожают 
              миллионы гектаров леса ежегодно, выбрасывают огромное количество CO2 в атмосферу 
              и разрушают среду обитания тысяч видов животных и растений.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Потеря биоразнообразия и уничтожение экосистем</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Выброс парниковых газов и изменение климата</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Загрязнение воздуха и вреда здоровью людей</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="mb-4 text-green-800">Важность переработки</h3>
            <p className="text-gray-700 mb-4">
              Переработка отходов — ключевой элемент устойчивого развития. Она помогает 
              сократить количество мусора на свалках, экономить природные ресурсы и уменьшать 
              загрязнение окружающей среды.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Recycle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Сокращение потребления сырья и энергии</span>
              </li>
              <li className="flex items-start gap-2">
                <Recycle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Уменьшение объёма отходов на свалках</span>
              </li>
              <li className="flex items-start gap-2">
                <Recycle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Снижение выбросов в атмосферу</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558583082-409143c794ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjQwOTMwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Переработка"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Environmental Topics */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-green-800">Ключевые направления</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TreePine className="text-green-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Сохранение лесов</h3>
              <p className="text-gray-600">
                Леса — это лёгкие планеты. Они производят кислород, поглощают CO2, 
                регулируют климат и являются домом для 80% наземных видов животных и растений.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-blue-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Охрана водных ресурсов</h3>
              <p className="text-gray-600">
                Чистая вода — основа жизни. Загрязнение рек, озёр и океанов угрожает 
                не только морской жизни, но и здоровью человека.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Cloud className="text-sky-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Качество воздуха</h3>
              <p className="text-gray-600">
                Загрязнение воздуха вызывает миллионы преждевременных смертей ежегодно. 
                Важно сокращать выбросы и использовать чистую энергию.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="text-purple-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Циркулярная экономика</h3>
              <p className="text-gray-600">
                Переход от модели "производство-потребление-утилизация" к замкнутому циклу, 
                где отходы становятся ресурсами.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-orange-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Изменение климата</h3>
              <p className="text-gray-600">
                Глобальное потепление ведёт к экстремальным погодным явлениям, таянию ледников 
                и повышению уровня мирового океана.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-emerald-600" size={28} />
              </div>
              <h3 className="mb-3 text-green-800">Устойчивое развитие</h3>
              <p className="text-gray-600">
                Баланс между экономическим ростом, социальным прогрессом и охраной окружающей среды 
                для будущих поколений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-green-800">Что можете сделать вы</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Сортируйте отходы</h4>
                  <p className="text-gray-600 text-sm">
                    Разделяйте пластик, стекло, бумагу и органические отходы
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Экономьте энергию</h4>
                  <p className="text-gray-600 text-sm">
                    Выключайте свет и приборы, когда они не используются
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Используйте многоразовое</h4>
                  <p className="text-gray-600 text-sm">
                    Сумки, бутылки, контейнеры вместо одноразовых
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Экономьте воду</h4>
                  <p className="text-gray-600 text-sm">
                    Закрывайте кран, устраняйте протечки, используйте душ вместо ванны
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Выбирайте эко-продукты</h4>
                  <p className="text-gray-600 text-sm">
                    Покупайте товары с минимальной упаковкой и эко-маркировкой
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="mb-2">Сажайте деревья</h4>
                  <p className="text-gray-600 text-sm">
                    Участвуйте в озеленении и лесовосстановлении
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Каждое действие имеет значение</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Вместе мы можем создать более чистую и здоровую планету для всех
          </p>
          <button className="px-8 py-3 bg-white text-green-800 rounded-lg hover:bg-gray-100 transition-colors">
            Присоединиться к нам
          </button>
        </div>
      </section>
    </div>
  );
}

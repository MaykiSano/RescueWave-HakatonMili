import { Users, Target, Award, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-8 text-green-800">О нас</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg mb-6 text-gray-700">
            Мы — команда энтузиастов и инноваторов, объединённых общей целью: защитить нашу планету 
            от разрушительных городских пожаров и сохранить природные богатства для будущих поколений.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            Наш проект начался с простой идеи — создать устройство, которое сможет быстро и эффективно 
            тушить пожары, минимизируя вред для окружающей среды. Сегодня эта идея превратилась в 
            реальное инновационное решение.
          </p>
        </div>

        <h2 className="text-center mb-12 text-green-800">Наши ценности</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-green-600" size={28} />
            </div>
            <h3 className="mb-3 text-green-800">Наша миссия</h3>
            <p className="text-gray-600">
              Разработка инновационных технологий для борьбы с городскими пожарами и защиты экосистем.
              Мы стремимся сделать мир безопаснее и чище.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-blue-600" size={28} />
            </div>
            <h3 className="mb-3 text-green-800">Инновации</h3>
            <p className="text-gray-600">
              Мы верим в силу технологий и постоянно работаем над улучшением наших решений, 
              используя последние достижения науки и техники.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-purple-600" size={28} />
            </div>
            <h3 className="mb-3 text-green-800">Команда</h3>
            <p className="text-gray-600">
              Наша команда состоит из опытных инженеров, экологов и исследователей, 
              которые разделяют общую страсть к защите природы.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-yellow-600" size={28} />
            </div>
            <h3 className="mb-3 text-green-800">Ответственность</h3>
            <p className="text-gray-600">
              Мы несём ответственность за каждое наше решение и учитываем его влияние 
              на окружающую среду и общество.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h3 className="mb-4 text-green-800 text-center">История проекта</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <div>
                <h4 className="mb-2 text-green-800">Идея</h4>
                <p className="text-gray-600">
                  Всё началось с обсуждения проблемы городских пожаров и желания найти эффективное решение
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <div>
                <h4 className="mb-2 text-green-800">Разработка</h4>
                <p className="text-gray-600">
                  Мы с приятелем начали работу над прототипом устройства для тушения пожаров
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <div>
                <h4 className="mb-2 text-green-800">Тестирование</h4>
                <p className="text-gray-600">
                  Провели серию испытаний и доработали устройство на основе полученных результатов
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                4
              </div>
              <div>
                <h4 className="mb-2 text-green-800">Реализация</h4>
                <p className="text-gray-600">
                  Готовы представить миру наше инновационное устройство для борьбы с огнём
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

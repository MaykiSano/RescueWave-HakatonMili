import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Heart, Rocket, Sparkles } from 'lucide-react';
import { OrganicFlowBackground } from './OrganicFlowBackground';
import { FloatingIslands } from './FloatingIslands';
import { ParallaxLayers } from './ParallaxLayers';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  mousePosition?: { x: number; y: number };
}

export function AboutPage({ onNavigate, mousePosition = { x: 50, y: 50 } }: AboutPageProps) {
  return (
    <div className="relative py-24">
      {/* Многослойные 3D фоны */}
      <OrganicFlowBackground />
      <FloatingIslands mousePosition={mousePosition} />
      <ParallaxLayers mousePosition={mousePosition} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-emerald-500/20 border border-emerald-500/30">
            <Sparkles className="text-emerald-400" size={20} />
            <span className="text-emerald-300 tracking-wide">О ПРОЕКТЕ</span>
          </div>

          <h1 className="mb-8 text-white">Наша миссия</h1>
          
          <div className="p-8 bg-emerald-900/10 border border-emerald-500/20 rounded-xl">
            <p className="text-xl text-emerald-200/80 leading-relaxed mb-4">
              Мы создаём будущее, где технологии и природа существуют в гармонии.
            </p>
            <p className="text-emerald-300/70 leading-relaxed">
              Наша команда разработала революционное устройство для борьбы с городскими пожарами,
              объединив искусственный интеллект, биотехнологии и любовь к планете Земля.
            </p>
          </div>
        </motion.div>

        {/* Ценности */}
        <div className="mb-24">
          <h2 className="text-center mb-16 text-white">Наши ценности</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Цель',
                desc: 'Защитить 10 миллионов гектаров леса к 2030 году с помощью наших технологий',
              },
              {
                icon: Lightbulb,
                title: 'Инновации',
                desc: 'Постоянное совершенствование через исследования, тестирование и внедрение передовых решений',
              },
              {
                icon: Users,
                title: 'Команда',
                desc: 'Группа Хахатоншиков 😊',
              },
              {
                icon: Heart,
                title: 'Ответственность',
                desc: 'Каждое решение принимается с заботой о будущих поколениях и экосистеме планеты',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <value.icon className="text-white" size={32} />
                </div>

                <h3 className="mb-3 text-emerald-100">{value.title}</h3>
                <p className="text-emerald-300/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* История создания */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-center mb-16 text-white">История создания</h2>

          <div className="space-y-8">
            {[
              {
                phase: 'Идея',
                year: '3 октября 2025 год',
                desc: 'Всё началось с обсуждения полуфинала Хакатона. Мы поняли: нужно действовать.',
                icon: '💡',
              },
              {
                phase: 'Разработка',
                year: '10 ноября 2025 год',
                desc: 'Мы с приятелем начали работу над прототипом. Ночи напролёт, сотни итераций, десятки провалов и небольшие победы.',
                icon: '⚙️',
              },
              {
                phase: 'Тестирование',
                year: '22 ноября 2025 год',
                desc: 'Первые испытания показали потрясающие результаты. Эффективность превзошла все ожидания.',
                icon: '🔬',
              },
              {
                phase: 'Будущее',
                year: '29 ноября 2025 год',
                desc: 'Готовы представить миру Phoenix. Это только начало пути к глобальной защите лесов.',
                icon: '🚀',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-emerald-100">{item.phase}</h3>
                    <span className="text-emerald-400/60 text-sm">{item.year}</span>
                  </div>
                  <p className="text-emerald-300/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          className="p-12 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Rocket className="text-emerald-400 mx-auto mb-6" size={48} />
          <h2 className="mb-4 text-white">Присоединяйтесь к революции</h2>
          <p className="text-xl text-emerald-300/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            Мы ищем талантливых людей, которые разделяют нашу страсть к инновациям
            и защите окружающей среды. Вместе мы изменим мир.
          </p>
          <motion.button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg shadow-lg shadow-emerald-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            СВЯЗАТЬСЯ С НАМИ
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

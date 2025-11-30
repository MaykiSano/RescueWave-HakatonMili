import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ThermometerSun, Zap, Sun, Lightbulb } from 'lucide-react';

export function InitiativesPage() {
  const initiatives = [
    {
      title: 'Определение температуры',
      desc: 'Заранее предсказывать возможные места пожаров через систему термодатчиков и анализа данных',
      icon: ThermometerSun,
      stats: 'AI-прогнозирование',
      image: 'https://images.unsplash.com/photo-1620361421509-eeb389b3fd0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwc2Vuc29yJTIwdGVtcGVyYXR1cmV8ZW58MXx8fHwxNzY0NDE2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Улучшение скорости передвижения',
      desc: 'Улучшенная поворотность, более удобное беспилотное управление и повышенная маневренность на сложной местности',
      icon: Zap,
      stats: 'Высокая мобильность',
      image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHNwZWVkJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzY0NDE2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Полностью Экологическая энергия',
      desc: 'Наш робот работает и заряжается благодаря солнцу — 100% возобновляемая энергия без вредных выбросов',
      icon: Sun,
      stats: 'Солнечная энергия',
      image: 'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZW5lcmd5fGVufDF8fHx8MTc2NDI5NjgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-emerald-500/20 border border-emerald-500/30">
            <Lightbulb className="text-emerald-400" size={20} />
            <span className="text-emerald-300 tracking-wide">ЭКОЛОГИЧЕСКИЕ ИНИЦИАТИВЫ</span>
          </div>

          <h1 className="mb-6 text-white">Возможные улучшения</h1>
          <p className="text-xl text-emerald-300/70">
            Комплексный подход к защите планеты через инновационные технологии
          </p>
        </motion.div>

        {/* Карточки инициатив */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Изображение */}
              <div className="relative h-64">
                <ImageWithFallback
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Контент */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                  <initiative.icon className="text-white" size={28} />
                </div>

                <h3 className="mb-2 text-emerald-100">{initiative.title}</h3>
                <p className="text-emerald-300/70 mb-4">{initiative.desc}</p>

                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full w-fit">
                  <span className="text-emerald-300 text-sm">{initiative.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Статистика влияния */}
        <motion.div
          className="p-12 bg-emerald-900/10 border border-emerald-500/20 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16 text-white">Наши ожидания</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '3M+', label: 'Защитим гектаров', icon: '🌲' },
              { number: '25%', label: '1/4 от всех пожаров предотвратим', icon: '🔥' },
              { number: '90%', label: 'Эффективность системы', icon: '✅' },
              { number: '24/7', label: 'Мониторинг', icon: '👁️' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="mb-2 text-white">{stat.number}</div>
                <p className="text-emerald-300/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

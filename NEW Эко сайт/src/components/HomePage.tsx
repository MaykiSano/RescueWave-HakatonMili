import { motion } from 'motion/react';
import { Leaf, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedMapBackground } from './AnimatedMapBackground';
import { Interactive3DParticles } from './Interactive3DParticles';
import { FloatingIslands } from './FloatingIslands';
import { Interactive3DCard } from './Interactive3DCard';

interface HomePageProps {
  mousePosition: { x: number; y: number };
  onNavigate: (page: string) => void;
}

export function HomePage({ mousePosition, onNavigate }: HomePageProps) {
  return (
    <div className="relative">
      {/* Hero секция */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Оптимизированные 3D фоны */}
        <AnimatedMapBackground />
        <Interactive3DParticles mousePosition={mousePosition} />
        <FloatingIslands mousePosition={mousePosition} />

        {/* Контент героя */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-emerald-500/20 border border-emerald-500/30">
              <Sparkles className="text-emerald-400" size={20} />
              <span className="text-emerald-300 tracking-wide">ТЕХНОЛОГИИ БУДУЩЕГО</span>
            </div>

            {/* Заголовок */}
            <h1 className="mb-6 text-white max-w-5xl mx-auto">
              Защита планеты
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl md:text-2xl text-emerald-200/80 mb-12 max-w-3xl mx-auto">
              Революционные технологии для борьбы с городскими пожарами
              <br />
              <span className="text-emerald-400">Smart • Fire • Safety</span>
            </p>

            {/* Кнопки CTA */}
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                onClick={() => onNavigate('device')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg shadow-lg shadow-emerald-500/30 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tracking-wide">НАШЕ УСТРОЙСТВО</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                УЗНАТЬ БОЛЬШЕ
              </motion.button>
            </div>
          </motion.div>

          {/* Индикатор прокрутки */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-emerald-400 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-white">Инновации нового уровня</h2>
            <p className="text-emerald-200/70 text-xl max-w-2xl mx-auto">
              Технологии, которые меняют будущее защиты окружающей среды
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: 'Эко-Система',
                desc: 'Полностью экологичные компоненты и материалы',
              },
              {
                icon: Zap,
                title: 'Мгновенная реакция',
                desc: 'AI-анализ и активация за доли секунды',
              },
              {
                icon: Shield,
                title: 'Защита 360°',
                desc: 'Полное покрытие и контроль территории',
              },
              {
                icon: Sparkles,
                title: 'Умная адаптация',
                desc: 'Самообучающиеся алгоритмы для любых условий',
              },
            ].map((feature, index) => (
              <Interactive3DCard key={index}>
                <motion.div
                  className="p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    <feature.icon className="text-white" size={28} />
                  </div>

                  <h3 className="mb-3 text-emerald-100">{feature.title}</h3>
                  <p className="text-emerald-300/70">{feature.desc}</p>
                </motion.div>
              </Interactive3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-24 bg-gradient-to-b from-black to-emerald-950/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '90%', label: 'Эффективность тушения', icon: '🔥' },
              { value: '<30s', label: 'Время активации', icon: '⚡' },
              { value: '100%', label: 'Эко-безопасность', icon: '🌿' },
            ].map((stat, index) => (
              <Interactive3DCard key={index}>
                <motion.div
                  className="text-center p-8 bg-emerald-900/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className="mb-3 text-white">{stat.value}</div>
                  <p className="text-emerald-300/70">{stat.label}</p>
                </motion.div>
              </Interactive3DCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
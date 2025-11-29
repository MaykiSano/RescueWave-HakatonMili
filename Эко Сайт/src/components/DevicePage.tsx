import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Cpu,
  Droplets,
  Eye,
  Zap,
  Wind,
  ThermometerSun,
  Radio,
  Battery,
} from "lucide-react";
import { EnergyParticlesBackground } from "./EnergyParticlesBackground";
import { NeuralNetwork } from "./NeuralNetwork";
import { Interactive3DParticles } from "./Interactive3DParticles";
import { Interactive3DCard } from "./Interactive3DCard";

interface DevicePageProps {
  mousePosition: { x: number; y: number };
  onNavigate: (page: string) => void;
}

export function DevicePage({ mousePosition, onNavigate }: DevicePageProps) {
  return (
    <div className="relative py-24">
      {/* Многослойные 3D фоны */}
      <EnergyParticlesBackground />
      <NeuralNetwork mousePosition={mousePosition} />
      <Interactive3DParticles mousePosition={mousePosition} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-orange-500/20 border border-orange-500/30">
            <Zap className="text-orange-400" size={20} />
            <span className="text-orange-300 tracking-wide">
              РЕВОЛЮЦИОННАЯ ТЕХНОЛОГИЯ
            </span>
          </div>

          <h1 className="mb-6 text-white">PHOENIX</h1>
          <p className="text-xl text-emerald-300/70 mb-2">
            Устройство автономного пожаротушения нового
            поколения
          </p>
          <p className="text-emerald-400/50 tracking-wide">
            DEVELOPED BY RescueWave
          </p>
        </motion.div>

        {/* Изображение устройства */}
        <motion.div
          className="max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative rounded-xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            <ImageWithFallback
              src="https://i.postimg.cc/1z6gtkyG/812b2ad4-0922-4aa3-8937-fc644d116b63.jpg"
              alt="Phoenix"
              className="w-full h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Характеристики */}
        <div className="mb-24">
          <h2 className="text-center mb-16 text-white">
            Технические характеристики
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Cpu,
                title: "Мозг системы",
                desc: "Arduino – улучшенный контроллер нового поколения, который анализирует окружающую среду в реальном времени.",
              },
              {
                icon: Eye,
                title: "Датчик огня",
                desc: "Постоянно отслеживает окружающую среду, мгновенно обнаруживает пламя или повышение температуры и передаёт сигнал для реагирования машины",
              },


              {
                icon: Radio,
                title: "Сенсор Bluetooth: HC-05",
                desc: "Дистанционное управление машиной и приём команд с пульта или смартфона"
              },

            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <feature.icon
                    className="text-white"
                    size={28}
                  />
                </div>

                <h3 className="mb-3 text-emerald-100">
                  {feature.title}
                </h3>
                <p className="text-emerald-300/70">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Принцип работы */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-white">
            Принцип работы
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Сканирование территории",
                desc: "Датчики огня постоянно сканируют окружающую среду и отслеживают признаки пламени или повышения температуры",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Обнаружение очага",
                desc: "Датчик передаёт сигнал на Arduino о наличии огня для мгновенной реакции",
                icon: "🎯",
              },
               {
               step: "03",
               title: "Анализ и решение",
               desc: "Arduino обрабатывает сигнал и определяет, действительно ли это пожар",
               icon: "🧠",
              },
              {
              step: "04",
              title: "Активация системы тушения",
              desc: "Arduino запускает реле, которое активирует распылители и тушит огонь",
              icon: "💨",
              },
              {
              step: "05",
              title: "Контроль и передача данных",
              desc: "Все данные �� месте пожара и ходе тушения отправляются в приложение для мониторинга и безопасности",
              icon: "✅",
            },
            ].map((item, index) => (
              <Interactive3DCard key={index}>
                <motion.div
                  className="flex gap-6 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all backdrop-blur-sm"
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
                      <span className="text-emerald-400/60">
                        {item.step}
                      </span>
                      <h3 className="text-emerald-100">
                      {item.title}
                    </h3>
                  </div>
                    <p className="text-emerald-300/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Interactive3DCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
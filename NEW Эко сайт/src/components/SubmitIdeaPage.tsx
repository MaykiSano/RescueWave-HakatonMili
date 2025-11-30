import { motion } from 'motion/react';
import { Lightbulb, Send, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SubmitIdeaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    ideaDescription: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="relative py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-emerald-900/30 border border-emerald-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Lightbulb className="text-emerald-400" size={20} />
            <span className="text-emerald-300 tracking-wide">ПОДЕЛИТЕСЬ СВОЕЙ ИДЕЕЙ</span>
          </motion.div>

          <h1 className="mb-6 text-white">
            Предложи свой стартап или экологическую идею
          </h1>
          
          <p className="text-xl text-emerald-200/70 max-w-3xl mx-auto leading-relaxed">
            Эта платформа создана, чтобы помогать проектам расти. Поделись своей идеей — и она может стать следующим успешным стартапом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Форма */}
          <motion.div
            className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-8 text-white">Форма отправки</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя */}
              <div>
                <label htmlFor="name" className="block mb-2 text-emerald-300">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-emerald-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              {/* Название идеи */}
              <div>
                <label htmlFor="ideaTitle" className="block mb-2 text-emerald-300">
                  Название идеи *
                </label>
                <input
                  type="text"
                  id="ideaTitle"
                  value={formData.ideaTitle}
                  onChange={(e) => setFormData({ ...formData, ideaTitle: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Название вашего проекта"
                  required
                />
              </div>

              {/* Описание идеи */}
              <div>
                <label htmlFor="ideaDescription" className="block mb-2 text-emerald-300">
                  Описание идеи *
                </label>
                <textarea
                  id="ideaDescription"
                  value={formData.ideaDescription}
                  onChange={(e) => setFormData({ ...formData, ideaDescription: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 resize-none focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Расскажите подробнее о вашей идее, как она поможет экологии, какую проблему решает..."
                  required
                />
              </div>

              {/* Кнопка отправки */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span className="tracking-wide">Отправить идею</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Преимущества */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-8 text-white">Почему стоит поделиться идеей?</h3>

            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  title: 'Мы читаем каждую идею',
                  desc: 'Наша команда внимательно изучает все предложения и даёт обратную связь',
                },
                {
                  icon: Users,
                  title: 'Помогаем развивать проекты',
                  desc: 'Предоставляем менторство, консультации и поддержку на ранних этапах',
                },
                {
                  icon: TrendingUp,
                  title: 'Возможность попасть в список стартапов',
                  desc: 'Лучшие идеи получают финансирование и становятся частью нашей платформы',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-900/20 hover:border-emerald-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-emerald-100">{benefit.title}</h4>
                    <p className="text-emerald-300/70">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Пример успешного стартапа */}
        <motion.div
          className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Изображение */}
            <div className="relative h-64 md:h-auto">
              <ImageWithFallback
                src="https://i.postimg.cc/1z6gtkyG/812b2ad4-0922-4aa3-8937-fc644d116b63.jpg"
                alt="Phoenix"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Award size={16} />
                <span className="tracking-wide">Успешный стартап</span>
              </div>
            </div>

            {/* Контент */}
            <div className="p-8 md:p-12">
              <h2 className="mb-4 text-white">Phoenix</h2>
              <h3 className="mb-6 text-emerald-300">Автономный робот для тушения огня</h3>
              
              <p className="text-emerald-200/70 leading-relaxed mb-6">
                Инновационное устройство для борьбы с городскими пожарами, оснащённое искусственным интеллектом, системой компьютерного зрения и экологичными огнетушащими составами. 
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-emerald-300/70">Начинался как идея команды студентов</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-emerald-300/70">Получил поддержку платформы и менторство</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-emerald-300/70">Сможет защищать более 2 млн гектаров</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-500/20">
                <p className="text-emerald-400/50 italic">
                  "Всё началось с простой формы на этом сайте. Сегодня мы меняем мир к лучшему."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { DataStreamBackground } from './DataStreamBackground';
import { HolographicGrid } from './HolographicGrid';
import { Interactive3DParticles } from './Interactive3DParticles';

interface ContactPageProps {
  mousePosition?: { x: number; y: number };
}

export function ContactPage({ mousePosition = { x: 50, y: 50 } }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Показываем уведомление об успехе
    setIsSubmitted(true);
    
    // Очищаем форму
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Скрываем уведомление через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="relative py-24">
      {/* Многослойные 3D фоны */}
      <DataStreamBackground />
      <HolographicGrid mousePosition={mousePosition} />
      <Interactive3DParticles mousePosition={mousePosition} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-emerald-500/20 border border-emerald-500/30">
            <MessageCircle className="text-emerald-400" size={20} />
            <span className="text-emerald-300 tracking-wide">СВЯЖИТЕСЬ С НАМИ</span>
          </div>

          <h1 className="mb-6 text-white">Начните диалог</h1>
          <p className="text-xl text-emerald-300/70">
            Мы всегда открыты для обсуждения инновационных проектов и партнёрства
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
          {/* Форма */}
          <motion.div
            className="p-8 bg-emerald-900/10 border border-emerald-500/20 rounded-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-8 text-white">Отправить сообщение</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя */}
              <div>
                <label htmlFor="name" className="block mb-2 text-emerald-300">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Ваше имя"
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
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Тема */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-emerald-300">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Тема сообщения"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block mb-2 text-emerald-300">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-emerald-900/10 border border-emerald-500/20 rounded-lg text-white placeholder-emerald-400/40 resize-none focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Расскажите о вашем проекте или вопросе..."
                  required
                />
              </div>

              {/* Кнопка отправки */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span className="tracking-wide">ОТПРАВИТЬ</span>
              </motion.button>

              {/* Уведомление об успехе */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-lg"
                >
                  <CheckCircle className="text-emerald-400" size={24} />
                  <div>
                    <p className="text-emerald-300">Сообщение успешно отправлено!</p>
                    <p className="text-emerald-400/60 text-sm">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Контактные карточки */}
            {[
              {
                icon: Mail,
                title: 'Email',
                lines: ['RescueWave888@gmail.com'],
              },
              {
                icon: Phone,
                title: 'Телефон',
                lines: ['+994 (055) 709-26-00'],
              },
              {
                icon: MapPin,
                title: 'Адрес',
                lines: ['проспект Гара Гараева 126', 'Инновационный центр, офис 161'],
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <contact.icon className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="mb-2 text-emerald-100">{contact.title}</h3>
                  {contact.lines.map((line, i) => (
                    <p
                      key={i}
                      className={i === 0 ? 'text-emerald-300' : 'text-emerald-400/60 text-sm'}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

           
           
          </motion.div>
        </div>

        {/* Карта */}
        <motion.div
          className="p-12 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin className="text-emerald-400 mx-auto mb-6" size={48} />
          <h2 className="mb-4 text-white">Наше местоположение</h2>
          <p className="text-xl text-emerald-300/70 mb-4">
            Баку, Азербайджан • Инновационный центр
          </p>
          <p className="text-emerald-400/50 text-sm">
            (Интеграция с картами доступна для полной версии)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

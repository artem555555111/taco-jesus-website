import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
  
  const events = [
    {
      id: 1,
      title: 'TACOWEEN',
      subtitle: 'Хэллоуин с мексиканским акцентом',
      date: '31 октября',
      time: '18:00 - 23:00',
      description: 'Специальное меню с "жуткими" тако, конкурсы костюмов и мексиканская музыка. Скидка 20% на все блюда для тех, кто придет в костюме!',
      image: '🎃',
      featured: true,
      price: 'Бесплатно',
      highlights: ['Специальное меню', 'Конкурс костюмов', 'Скидка 20%', 'Живая музыка']
    },
    {
      id: 2,
      title: 'Día de los Muertos',
      subtitle: 'День мертвых по-мексикански',
      date: '1-2 ноября',
      time: '12:00 - 23:00',
      description: 'Традиционный мексиканский праздник с аутентичными блюдами, украшениями в стиле калавера и специальными коктейлями.',
      image: '💀',
      featured: true,
      price: 'Бесплатно',
      highlights: ['Аутентичные блюда', 'Украшения калавера', 'Специальные коктейли', 'Традиционная музыка']
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="font-lobster text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-mexican-red mb-3">
            {t('events.title')}
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0.8, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden card-hover ${
                event.featured ? 'ring-4 ring-mexican-yellow' : ''
              }`}
            >
              {/* Featured badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 bg-mexican-yellow text-mexican-red px-4 py-2 rounded-full text-sm font-bold z-10">
                  {t('events.popular')}
                </div>
              )}

              {/* Event image/icon */}
              <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-mexican-orange to-mexican-red flex items-center justify-center">
                <div className="text-4xl sm:text-6xl lg:text-8xl opacity-80">{event.image}</div>
              </div>

              {/* Event content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-3 sm:mb-4">
                  <h3 className="font-lobster text-xl sm:text-2xl lg:text-3xl text-mexican-red mb-1 sm:mb-2">
                    {event.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600">
                    {event.subtitle}
                  </p>
                </div>

                {/* Event details */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-mexican-orange" />
                    <span className="font-inter font-semibold text-sm sm:text-base">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-mexican-orange" />
                    <span className="font-inter text-sm sm:text-base">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-mexican-orange" />
                    <span className="font-inter font-semibold text-mexican-red text-sm sm:text-base">{event.price}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-gray-800 mb-3">{t('events.what_awaits')}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-mexican-green rounded-full"></div>
                        <span className="font-inter text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-mexican-orange hover:bg-mexican-red text-white py-3 rounded-full font-inter font-semibold transition-colors duration-200"
                >
                  {t('events.learn_more')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-r from-mexican-red via-mexican-orange to-mexican-yellow rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="font-lobster text-4xl mb-4">
              {t('events.follow_promotions')}
            </h3>
            <p className="font-inter text-xl mb-6">
              {t('events.follow_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.facebook.com/TACOJESUSLOVESYOU"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-mexican-red px-8 py-3 rounded-full font-inter font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                {t('events.follow_facebook')}
              </motion.a>
              <motion.a
                href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mexican-green text-white px-8 py-3 rounded-full font-inter font-bold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                {t('events.order_now')}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0.8, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center items-center gap-8 mt-16"
        >
          <div className="text-4xl animate-bounce-slow">🎊</div>
          <div className="text-4xl animate-pulse-slow">🎵</div>
          <div className="text-4xl animate-wiggle">🎭</div>
          <div className="text-4xl animate-bounce-slow">🎪</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;

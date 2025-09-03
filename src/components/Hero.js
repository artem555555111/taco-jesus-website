import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock, MapPin, Phone, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-[80vh] bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-4xl opacity-15 animate-bounce">🌮</div>
      <div className="absolute top-40 right-32 text-3xl opacity-10 animate-pulse">🌶️</div>
      <div className="absolute bottom-32 left-32 text-3xl opacity-15 animate-bounce">🌵</div>
      <div className="absolute bottom-20 right-20 text-4xl opacity-10 animate-pulse">☀️</div>

      <div className="relative z-10 min-h-[80vh] flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-lobster">
                TACO JESUS
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl text-white/90 font-inter font-light">
                {t('hero.subtitle')}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
            >
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                🍽️ {t('hero.cta.menu')}
              </motion.a>
              <motion.a
                href="https://glovoapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-base hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                🚚 {t('hero.cta.order')}
              </motion.a>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {/* Rating */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold text-white">4.8</span>
                </div>
                <p className="text-white/80 text-xs">{t('hero.stats.rating')}</p>
              </div>

              {/* Customers */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-2xl font-bold text-white">1000+</span>
                </div>
                <p className="text-white/80 text-xs">{t('hero.stats.customers')}</p>
              </div>

              {/* Delivery */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold text-white">15 мин</span>
                </div>
                <p className="text-white/80 text-xs">{t('hero.stats.delivery')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-black/20 backdrop-blur-md border-t border-white/20 py-6"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {/* Location */}
              <div className="flex items-center justify-center text-white">
                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                <div>
                  <div className="font-semibold text-sm">Żydowska 27/1</div>
                  <div className="text-xs text-white/70">Poznań, Polska</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center text-white">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                <div>
                  <div className="font-semibold text-sm">+48 123 456 789</div>
                  <div className="text-xs text-white/70">Zamówienia</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center justify-center text-white">
                <Calendar className="w-5 h-5 mr-2 text-orange-400" />
                <div>
                  <div className="font-semibold text-sm">11:00 - 23:00</div>
                  <div className="text-xs text-white/70">Codziennie</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

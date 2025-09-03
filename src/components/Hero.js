import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock, MapPin, Phone, Calendar, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E53E3E' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🌮</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 font-lobster">
                Taco Jesus
              </h1>
              <div className="text-xl md:text-2xl text-red-600 font-inter font-medium">
                {t('hero.subtitle')}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
              >
                View Menu
              </motion.a>
              <motion.a
                href="https://glovoapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
              >
                Order via Glovo
              </motion.a>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {/* Rating */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-8 h-8 text-yellow-500 mr-3" />
                  <span className="text-3xl font-bold text-gray-800">4.8</span>
                </div>
                <p className="text-gray-600 text-sm">{t('hero.stats.rating')}</p>
              </div>

              {/* Customers */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-green-500 mr-3" />
                  <span className="text-3xl font-bold text-gray-800">1000+</span>
                </div>
                <p className="text-gray-600 text-sm">{t('hero.stats.customers')}</p>
              </div>

              {/* Delivery */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-8 h-8 text-orange-500 mr-3" />
                  <span className="text-3xl font-bold text-gray-800">15 мин</span>
                </div>
                <p className="text-gray-600 text-sm">{t('hero.stats.delivery')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gray-800 text-white py-12"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Location */}
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-400 mb-3" />
                <div>
                  <div className="font-semibold text-lg">Żydowska 27/1</div>
                  <div className="text-gray-300">Poznań, Polska</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-3" />
                <div>
                  <div className="font-semibold text-lg">+48 123 456 789</div>
                  <div className="text-gray-300">Zamówienia</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-orange-400 mb-3" />
                <div>
                  <div className="font-semibold text-lg">11:00 - 23:00</div>
                  <div className="text-gray-300">Codziennie</div>
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
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

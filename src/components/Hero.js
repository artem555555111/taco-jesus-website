import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-orange-50 to-red-50">
      {/* Modern Background with enhanced Mexican pattern */}
      <div className="absolute inset-0 mexican-pattern opacity-8"></div>
      
      {/* Modern gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-mexican-red/5 via-mexican-orange/8 to-mexican-yellow/5"></div>
      
      {/* Modern floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-mexican-red/10 to-mexican-orange/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-mexican-green/10 to-mexican-yellow/10 rounded-full blur-lg animate-bounce-slow"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-mexican-orange/10 to-mexican-red/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-mexican-yellow/10 to-mexican-green/10 rounded-full blur-lg animate-bounce-slow"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 text-5xl opacity-15 animate-float">🌵</div>
      <div className="absolute top-32 right-16 text-4xl opacity-12 animate-pulse-slow">☀️</div>
      <div className="absolute bottom-20 left-20 text-3xl opacity-10 animate-wiggle">🎩</div>
      <div className="absolute bottom-32 right-10 text-4xl opacity-15 animate-bounce-slow">🌶️</div>
      
      {/* Additional floating elements */}
      <div className="absolute top-16 left-1/4 text-3xl opacity-8 animate-pulse">🌮</div>
      <div className="absolute top-40 right-1/3 text-4xl opacity-10 animate-bounce">🎭</div>
      <div className="absolute top-1/2 left-8 text-2xl opacity-8 animate-spin-slow">💃</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-8 animate-bounce-slow">🕺</div>
      <div className="absolute top-2/3 left-1/3 text-3xl opacity-6 animate-pulse-slow">🎪</div>
      <div className="absolute top-3/4 right-1/4 text-4xl opacity-8 animate-wiggle">🎨</div>
      <div className="absolute bottom-40 left-1/2 text-3xl opacity-6 animate-bounce">🎊</div>
      <div className="absolute bottom-16 right-1/3 text-2xl opacity-8 animate-pulse">🎉</div>
      <div className="absolute top-1/4 left-1/2 text-3xl opacity-5 animate-float">✨</div>
      <div className="absolute bottom-1/4 right-1/2 text-2xl opacity-6 animate-bounce-slow">🌟</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative space-y-8 text-center"
        >
          {/* Modern Logo with subtle effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 sm:mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mexican-red/20 to-mexican-orange/20 rounded-full blur-lg"></div>
            <img 
              src="/assets/logo/logo.jpg" 
              alt="Taco Jesus Logo"
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/30"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-mexican-red to-mexican-orange rounded-full flex items-center justify-center hidden">
              <div className="text-3xl md:text-4xl font-bold text-white">👨</div>
            </div>
          </motion.div>

          {/* Modern Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-lobster text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-mexican-red mb-3 sm:mb-4 relative px-4"
          >
            <span className="relative z-10">{t('hero.title')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mexican-red/10 to-mexican-orange/10 blur-3xl transform scale-110"></div>
          </motion.h1>
          
          {/* Modern Subtitle with text effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-3xl mx-auto mb-4 sm:mb-6 px-4"
          >
            <p className="font-inter text-base sm:text-lg md:text-xl text-mexican-red font-bold relative leading-tight">
              <span className="relative z-10">{t('hero.subtitle')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mexican-red/5 to-mexican-orange/5 blur-xl transform scale-105"></div>
            </p>
          </motion.div>
          
          {/* Modern Description with subtle effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-6 sm:mb-8 px-4"
          >
            <p className="font-inter text-sm sm:text-base md:text-lg text-gray-700 font-medium relative leading-relaxed">
              <span className="relative z-10">{t('hero.description')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mexican-green/5 to-mexican-yellow/5 blur-xl transform scale-105"></div>
            </p>
          </motion.div>

          {/* Modern Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto px-4"
          >
            {/* Rating Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-red/10 to-mexican-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-mexican-red/20 to-mexican-orange/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:from-mexican-red/30 group-hover:to-mexican-orange/30 transition-all duration-300">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-mexican-red" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-mexican-red mb-1">4.8/5</div>
                <div className="text-xs sm:text-sm text-gray-600 font-inter font-medium">{t('hero.stats.rating')}</div>
              </div>
            </motion.div>
            
            {/* Customers Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-green/10 to-mexican-yellow/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-mexican-green/20 to-mexican-yellow/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:from-mexican-green/30 group-hover:to-mexican-yellow/30 transition-all duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-mexican-green" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-mexican-green mb-1">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-inter font-medium">{t('hero.stats.customers')}</div>
              </div>
            </motion.div>
            
            {/* Delivery Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-orange/10 to-mexican-yellow/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-mexican-orange/20 to-mexican-yellow/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:from-mexican-orange/30 group-hover:to-mexican-yellow/30 transition-all duration-300">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-mexican-orange" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-mexican-orange mb-1">15 мин</div>
                <div className="text-xs sm:text-sm text-gray-600 font-inter font-medium">{t('hero.stats.delivery')}</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 sm:w-8 sm:h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex justify-center shadow-xl"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 sm:w-2 sm:h-4 bg-mexican-red rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
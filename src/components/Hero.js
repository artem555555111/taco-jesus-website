import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Beautiful gradient background with enhanced visuals */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Enhanced Mexican Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Additional geometric patterns */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Floating food illustrations */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl animate-bounce">🌮</div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl animate-pulse">🌶️</div>
        <div className="absolute bottom-20 left-16 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-xl animate-bounce">🌯</div>
        <div className="absolute bottom-32 right-16 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg animate-pulse">🧀</div>
        <div className="absolute top-1/3 left-8 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm animate-float">🌽</div>
        <div className="absolute top-2/3 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg animate-bounce">🥤</div>
      </div>

      {/* Modern floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-mexican-red/10 to-mexican-orange/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-mexican-green/10 to-mexican-yellow/10 rounded-full blur-lg animate-bounce-slow"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-mexican-orange/10 to-mexican-red/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-mexican-yellow/10 to-mexican-green/10 rounded-full blur-lg animate-bounce-slow"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌵</div>
      <div className="absolute top-32 right-16 text-5xl opacity-15 animate-pulse-slow">☀️</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-12 animate-wiggle">🎩</div>
      <div className="absolute bottom-32 right-10 text-5xl opacity-18 animate-bounce-slow">🌶️</div>
      
      {/* Additional floating elements */}
      <div className="absolute top-16 left-1/4 text-4xl opacity-10 animate-pulse">🌮</div>
      <div className="absolute top-40 right-1/3 text-5xl opacity-12 animate-bounce">🎭</div>
      <div className="absolute top-1/2 left-8 text-3xl opacity-10 animate-spin-slow">💃</div>
      <div className="absolute top-1/2 right-8 text-3xl opacity-10 animate-bounce-slow">🕺</div>
      <div className="absolute top-2/3 left-1/3 text-4xl opacity-8 animate-pulse-slow">🎪</div>
      <div className="absolute top-3/4 right-1/4 text-5xl opacity-10 animate-wiggle">🎨</div>
      <div className="absolute bottom-40 left-1/2 text-4xl opacity-8 animate-bounce">🎊</div>
      <div className="absolute bottom-16 right-1/3 text-3xl opacity-10 animate-pulse">🎉</div>
      <div className="absolute top-1/4 left-1/2 text-4xl opacity-7 animate-float">✨</div>
      <div className="absolute bottom-1/4 right-1/2 text-3xl opacity-8 animate-bounce-slow">🌟</div>
      
      {/* New decorative elements */}
      <div className="absolute top-1/4 left-1/4 text-3xl opacity-6 animate-pulse">🔥</div>
      <div className="absolute top-3/4 left-1/2 text-4xl opacity-8 animate-bounce">🎸</div>
      <div className="absolute bottom-1/3 left-1/4 text-3xl opacity-7 animate-float">🎺</div>
      <div className="absolute top-1/2 right-1/4 text-3xl opacity-6 animate-wiggle">🥁</div>
      <div className="absolute bottom-1/2 right-1/3 text-4xl opacity-9 animate-pulse">🎪</div>
      
      {/* Sparkle effects */}
      <div className="absolute top-10 right-1/3 text-2xl opacity-5 animate-pulse">✨</div>
      <div className="absolute bottom-10 left-1/3 text-2xl opacity-6 animate-bounce">⭐</div>
      <div className="absolute top-1/2 left-1/6 text-2xl opacity-4 animate-float">💫</div>
      <div className="absolute bottom-1/3 right-1/6 text-2xl opacity-5 animate-pulse">🌟</div>

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

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-lobster text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-3 sm:mb-4 relative px-4"
          >
            <span className="relative z-10 drop-shadow-2xl">{t('hero.title')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 blur-3xl transform scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-2xl transform scale-105"></div>
          </motion.h1>
          
          {/* Enhanced Subtitle with text effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-4 sm:mb-6 px-4"
          >
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-white font-bold relative leading-tight drop-shadow-lg">
              <span className="relative z-10">{t('hero.subtitle')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10 blur-xl transform scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 blur-lg transform scale-110"></div>
            </p>
          </motion.div>
          
          {/* Enhanced Description with subtle effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative max-w-5xl mx-auto mb-6 sm:mb-8 px-4"
          >
            <p className="font-inter text-base sm:text-lg md:text-xl text-white/95 font-medium relative leading-relaxed drop-shadow-md">
              <span className="relative z-10">{t('hero.description')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/8 to-white/8 blur-xl transform scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 blur-lg transform scale-110"></div>
            </p>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4"
          >
            {/* Enhanced Rating Card */}
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/60 shadow-2xl text-center group hover:shadow-3xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-red/15 to-mexican-orange/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mexican-red/25 to-mexican-orange/25 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-mexican-red/35 group-hover:to-mexican-orange/35 transition-all duration-300 shadow-lg">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-mexican-red" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mexican-red mb-2 drop-shadow-sm">4.8/5</div>
                <div className="text-sm sm:text-base text-gray-700 font-inter font-semibold">{t('hero.stats.rating')}</div>
              </div>
            </motion.div>
            
            {/* Enhanced Customers Card */}
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/60 shadow-2xl text-center group hover:shadow-3xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-green/15 to-mexican-yellow/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-yellow-400/10 rounded-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mexican-green/25 to-mexican-yellow/25 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-mexican-green/35 group-hover:to-mexican-yellow/35 transition-all duration-300 shadow-lg">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-mexican-green" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mexican-green mb-2 drop-shadow-sm">1000+</div>
                <div className="text-sm sm:text-base text-gray-700 font-inter font-semibold">{t('hero.stats.customers')}</div>
              </div>
            </motion.div>
            
            {/* Enhanced Delivery Card */}
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/60 shadow-2xl text-center group hover:shadow-3xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mexican-orange/15 to-mexican-yellow/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mexican-orange/25 to-mexican-yellow/25 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-mexican-orange/35 group-hover:to-mexican-yellow/35 transition-all duration-300 shadow-lg">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-mexican-orange" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mexican-orange mb-2 drop-shadow-sm">15 мин</div>
                <div className="text-sm sm:text-base text-gray-700 font-inter font-semibold">{t('hero.stats.delivery')}</div>
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
            className="w-1.5 h-3 sm:w-2 sm:h-4 bg-white rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
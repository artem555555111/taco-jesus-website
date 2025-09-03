import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Mexican Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Mexican Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Mexican Elements */}
      <div className="absolute top-20 left-20 text-6xl opacity-30 animate-bounce">🌮</div>
      <div className="absolute top-40 right-32 text-5xl opacity-25 animate-pulse">🌶️</div>
      <div className="absolute bottom-32 left-32 text-4xl opacity-30 animate-bounce">🌵</div>
      <div className="absolute bottom-20 right-20 text-5xl opacity-25 animate-pulse">☀️</div>
      <div className="absolute top-1/2 left-10 text-3xl opacity-20 animate-wiggle">🎩</div>
      <div className="absolute top-1/3 right-16 text-4xl opacity-25 animate-float">💃</div>
      <div className="absolute top-2/3 left-1/3 text-3xl opacity-20 animate-bounce">🎪</div>
      <div className="absolute bottom-1/3 right-1/3 text-4xl opacity-25 animate-pulse">🎊</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
              <span className="text-6xl">🌮</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-lobster"
          >
            Taco Jesus
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¡Sabor Auténtico Mexicano! 🇲🇽
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Descubre el verdadero sabor de México en el corazón de Poznań. 
              Tacos, burritos y quesadillas preparados con ingredientes frescos y recetas tradicionales.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-gray-100 transition-all duration-300"
            >
              🍽️ Ver Menú Completo
            </motion.a>
            <motion.a
              href="https://glovoapp.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              🚚 Pedir Ahora
            </motion.a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Rating */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            >
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-lg text-white/80">Calificación Excelente</div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            >
              <div className="text-5xl mb-4">📍</div>
              <div className="text-2xl font-bold mb-2">Centro</div>
              <div className="text-lg text-white/80">Żydowska 27/1, Poznań</div>
            </motion.div>

            {/* Speed */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            >
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-4xl font-bold mb-2">15 min</div>
              <div className="text-lg text-white/80">Entrega Rápida</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Desplázate hacia abajo</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
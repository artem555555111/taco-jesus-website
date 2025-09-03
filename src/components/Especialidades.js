import React from 'react';
import { motion } from 'framer-motion';

const Especialidades = () => {
  const specialties = [
    {
      icon: '🌮',
      title: 'Tacos Auténticos',
      description: 'Tortillas de maíz hechas a mano, rellenas con carne marinada, cebolla, cilantro y salsa picante',
      highlight: 'Nuestra especialidad'
    },
    {
      icon: '🌯',
      title: 'Burritos Gigantes',
      description: 'Tortillas de harina rellenas con arroz, frijoles, carne y verduras frescas',
      highlight: 'Porción abundante'
    },
    {
      icon: '🧀',
      title: 'Quesadillas',
      description: 'Tortillas con queso derretido y ingredientes frescos, servidas con guacamole',
      highlight: 'Perfecto para compartir'
    },
    {
      icon: '🌽',
      title: 'Nachos Especiales',
      description: 'Totopos crujientes cubiertos con queso, jalapeños, frijoles y carne',
      highlight: 'Ideal para empezar'
    },
    {
      icon: '🥤',
      title: 'Bebidas Mexicanas',
      description: 'Horchata, agua de jamaica, limonada y margaritas auténticas',
      highlight: 'Refrescante'
    },
    {
      icon: '🌶️',
      title: 'Salsas Caseras',
      description: 'Salsas picantes preparadas diariamente con ingredientes frescos',
      highlight: 'Nivel de picante personalizable'
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-lobster">
            Nuestras Especialidades 🌟
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Descubre los sabores únicos que nos han convertido en el lugar favorito 
            para la comida mexicana en Poznań
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-6">{specialty.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{specialty.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{specialty.description}</p>
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {specialty.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6 font-lobster">
              ¿Listo para una Experiencia Mexicana? 🇲🇽
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Ven y descubre por qué somos el lugar favorito para la comida mexicana en Poznań
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                🍽️ Ver Menú Completo
              </motion.a>
              <motion.a
                href="https://glovoapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                🚚 Pedir Ahora
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Especialidades;

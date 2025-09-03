import React from 'react';
import { motion } from 'framer-motion';

const NuestraHistoria = () => {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
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
            Nuestra Historia 🌮
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Una tradición familiar que comenzó en las calles de México y llegó hasta Poznań
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-red-600 mb-6 font-lobster">
                🇲🇽 Orígenes Mexicanos
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestra historia comenzó en las vibrantes calles de Ciudad de México, donde 
                el abuelo Carlos aprendió los secretos de la cocina tradicional mexicana. 
                Cada receta fue transmitida de generación en generación, conservando 
                la autenticidad y el sabor original.
              </p>
              <div className="flex items-center gap-4 text-orange-600">
                <span className="text-2xl">👨‍🍳</span>
                <span className="font-semibold">Recetas familiares desde 1952</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-orange-600 mb-6 font-lobster">
                🌍 El Viaje a Poznań
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En 2018, decidimos compartir nuestra pasión por la comida mexicana 
                con los habitantes de Poznań. Trajimos no solo nuestras recetas, 
                sino también la calidez y hospitalidad que caracteriza a México.
              </p>
              <div className="flex items-center gap-4 text-red-600">
                <span className="text-2xl">✈️</span>
                <span className="font-semibold">Llegamos a Poznań en 2018</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
              <div className="text-8xl mb-6">🌮</div>
              <h4 className="text-2xl font-bold mb-4">¡Autenticidad Garantizada!</h4>
              <p className="text-lg opacity-90">
                Cada taco, burrito y quesadilla se prepara siguiendo las técnicas 
                tradicionales mexicanas que hemos perfeccionado durante décadas.
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🌶️</div>
            <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse">🌵</div>
            <div className="absolute top-1/2 -left-8 text-3xl animate-wiggle">🎩</div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12 font-lobster">
            Nuestros Valores 🎯
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50"
            >
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Ingredientes Frescos</h4>
              <p className="text-gray-600">
                Solo utilizamos ingredientes frescos y de la más alta calidad, 
                importados directamente de México cuando es posible.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50"
            >
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Técnicas Tradicionales</h4>
              <p className="text-gray-600">
                Nuestros chefs han sido entrenados en las técnicas tradicionales 
                mexicanas, garantizando el sabor auténtico en cada plato.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-red-50"
            >
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Pasión y Amor</h4>
              <p className="text-gray-600">
                Cada plato se prepara con amor y pasión, creando una experiencia 
                culinaria que transporta a nuestros clientes a México.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NuestraHistoria;

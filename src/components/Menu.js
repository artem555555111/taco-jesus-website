import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { menuItems, getMenuImage, categories } from '../data/menuData';

const Menu = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  // Используем данные из отдельного файла
  const menuCategories = categories.map(category => ({
    ...category,
    name: t(category.name)
  }));

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
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
            {t('menu.title')}
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 px-4"
        >
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-inter font-semibold transition-all duration-200 flex items-center gap-1 text-xs sm:text-sm ${
                activeCategory === category.id
                  ? 'bg-mexican-red text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-mexican-orange hover:text-white'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 px-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.8, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group menu-card"
            >
              {/* Food Image */}
              <div className="relative h-24 sm:h-28 w-full overflow-hidden">
                {/* Всегда пытаемся показать изображение */}
                <img
                  src={getMenuImage(item.id)}
                       alt={item.name}
                       className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                       style={{ 
                         objectFit: 'cover', 
                         objectPosition: 'center',
                         width: '100%',
                         height: '100%',
                         minWidth: '100%',
                         minHeight: '100%'
                       }}
                       onError={(e) => {
                         console.log('Image failed to load:', e.target.src);
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                {/* Fallback placeholder if image fails */}
                    <div className="w-full h-full bg-gradient-to-br from-mexican-orange/10 via-mexican-yellow/20 to-mexican-red/10 flex items-center justify-center relative hidden">
                  <div className="text-5xl mb-2 opacity-80">
                      {item.category === 'burrito' ? '🌯' : 
                       item.category === 'quesadilla' ? '🧀' : 
                       item.category === 'salsy' ? '🥑' : 
                       item.category === 'napoje' ? '🥤' : '🌮'}
                    </div>
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                      <p className="text-xs text-gray-600 font-medium bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        {item.name.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>
                  </div>
                
                {/* Popular Badge */}
                {item.isPopular && (
                  <div className="absolute top-2 left-2 bg-mexican-red text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    🔥 {t('menu.popular')}!
                  </div>
                )}
                
                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  ⭐ {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 menu-card-content">
                <div className="flex justify-between items-start mb-1.5 min-h-[2rem] sm:min-h-[2.5rem]">
                  <h3 className="font-inter font-bold text-sm sm:text-base text-gray-800 group-hover:text-mexican-red transition-colors duration-200 leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-lobster text-base sm:text-lg text-mexican-red flex-shrink-0 ml-1">
                    {item.price}
                  </span>
                </div>

                <p className="font-inter text-gray-600 mb-2 line-clamp-2 text-xs menu-card-description">
                  {item.description}
                </p>

                {/* Prep Time */}
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2 h-3 sm:h-4">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span>{item.prepTime}</span>
                </div>

                {/* Order Button */}
                <motion.a
                  href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-mexican-orange to-mexican-red text-white py-1.5 px-2 sm:px-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1 group-hover:from-mexican-red group-hover:to-mexican-orange text-xs h-7 sm:h-8 flex-shrink-0"
                >
                  <ShoppingCart className="w-3 h-3" />
                  {t('menu.order_btn')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-mexican-green to-mexican-yellow rounded-3xl p-8 text-white">
            <h3 className="font-lobster text-3xl mb-4">
              {t('menu.cta_title')}
            </h3>
            <p className="font-inter text-lg mb-6">
              {t('menu.cta_description')}
            </p>
            <motion.a
              href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-mexican-red px-8 py-4 rounded-full font-inter font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto w-fit"
            >
              <ExternalLink className="w-5 h-5" />
              {t('menu.cta_button')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

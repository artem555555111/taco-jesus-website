import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: '/assets/gallery/468728300_18252534832283507_884668673722418997_n.jpg',
      alt: 'Интерьер ресторана Taco Jesus',
      title: t('gallery.images.image1.title'),
      description: t('gallery.images.image1.description')
    },
    {
      id: 2,
      src: '/assets/gallery/468737891_18252533623283507_3131229477034098169_n.jpg',
      alt: 'Мексиканский декор',
      title: t('gallery.images.image2.title'),
      description: t('gallery.images.image2.description')
    },
    {
      id: 3,
      src: '/assets/gallery/468995969_18252528415283507_1307922446538666603_n.jpg',
      alt: 'Красивая подача блюд',
      title: t('gallery.images.image3.title'),
      description: t('gallery.images.image3.description')
    },
    {
      id: 4,
      src: '/assets/gallery/470569866_18255082828283507_5717080829017101668_n.jpg',
      alt: 'Мексиканская еда',
      title: t('gallery.images.image4.title'),
      description: t('gallery.images.image4.description')
    },
    {
      id: 5,
      src: '/assets/gallery/470800295_18255082708283507_1766542335221529329_n.jpg',
      alt: 'Веселая атмосфера',
      title: t('gallery.images.image5.title'),
      description: t('gallery.images.image5.description')
    },
    {
      id: 6,
      src: '/assets/gallery/464516853_18248094199283507_5051964185044193542_n.jpg',
      alt: 'Новое фото ресторана',
      title: t('gallery.images.image6.title'),
      description: t('gallery.images.image6.description')
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="font-lobster text-5xl md:text-6xl text-mexican-red mb-4">
            {t('gallery.title')}
          </h2>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0.8, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              style={{ willChange: 'opacity, transform', transform: 'translate3d(0,0,0)' }}
              onClick={() => openModal(image, index)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="aspect-square bg-gradient-to-br from-mexican-orange to-mexican-red flex items-center justify-center hidden">
                <div className="text-6xl opacity-50">
                  {index % 3 === 0 ? '🏠' : index % 3 === 1 ? '🍽️' : '😊'}
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-inter font-bold text-xl mb-2">{image.title}</h3>
                  <p className="font-inter text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0.8, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center items-center gap-8 mt-16"
        >
          <div className="text-4xl animate-bounce-slow">🌵</div>
          <div className="text-4xl animate-pulse-slow">🌶️</div>
          <div className="text-4xl animate-wiggle">🎉</div>
          <div className="text-4xl animate-bounce-slow">☀️</div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-mexican-yellow transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mexican-yellow transition-colors duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mexican-yellow transition-colors duration-200"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="bg-gradient-to-br from-mexican-orange to-mexican-red rounded-2xl p-8">
                <div className="aspect-video bg-white/20 rounded-xl overflow-hidden">
                  <img 
                    src={galleryImages[currentIndex].src} 
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full flex items-center justify-center hidden">
                    <div className="text-8xl opacity-50">
                      {currentIndex % 3 === 0 ? '🏠' : currentIndex % 3 === 1 ? '🍽️' : '😊'}
                    </div>
                  </div>
                </div>
                
                {/* Image info */}
                <div className="mt-6 text-center text-white">
                  <h3 className="font-inter font-bold text-2xl mb-2">
                    {galleryImages[currentIndex].title}
                  </h3>
                  <p className="font-inter text-lg">
                    {galleryImages[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="font-inter">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;



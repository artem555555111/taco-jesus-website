import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Image, Plus, CheckCircle } from 'lucide-react';
import { getAllMenuImages, checkImageExists } from '../utils/menuImageScanner';

const MenuImageManager = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastScan, setLastScan] = useState(null);

  // Функция для сканирования изображений
  const scanImages = async () => {
    setLoading(true);
    try {
      const allImages = getAllMenuImages();
      const validImages = [];
      
      // Проверяем каждое изображение
      for (const image of allImages) {
        const exists = await checkImageExists(image.path);
        if (exists) {
          validImages.push(image);
        }
      }
      
      setImages(validImages);
      setLastScan(new Date());
    } catch (error) {
      console.error('Error scanning images:', error);
    } finally {
      setLoading(false);
    }
  };

  // Автоматическое сканирование при загрузке
  useEffect(() => {
    scanImages();
  }, []);

  // Автоматическое сканирование каждые 30 секунд
  useEffect(() => {
    const interval = setInterval(scanImages, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-inter font-semibold text-lg text-gray-800 flex items-center gap-2">
          <Image className="w-5 h-5" />
          Менеджер изображений меню
        </h3>
        <motion.button
          onClick={scanImages}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 bg-mexican-orange text-white rounded-lg hover:bg-mexican-red transition-colors duration-200 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Сканирование...' : 'Обновить'}
        </motion.button>
      </div>

      {lastScan && (
        <p className="text-sm text-gray-500 mb-4">
          Последнее сканирование: {lastScan.toLocaleTimeString()}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={image.path}
                alt={image.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-xs text-gray-600 mt-2 truncate" title={image.name}>
              {image.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Как добавить новое изображение:</strong>
        </p>
        <ol className="text-sm text-blue-700 mt-2 space-y-1">
          <li>1. Поместите изображение в папку <code>public/assets/menu/</code></li>
          <li>2. Нажмите кнопку "Обновить" или подождите 30 секунд</li>
          <li>3. Изображение автоматически появится в меню</li>
        </ol>
      </div>
    </div>
  );
};

export default MenuImageManager;

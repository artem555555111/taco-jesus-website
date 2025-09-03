import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { getAllMenuImages, checkImageExists } from '../utils/menuImageScanner';

const ImageStatus = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const checkImages = async () => {
    setLoading(true);
    try {
      const allImages = getAllMenuImages();
      const imageStatuses = await Promise.all(
        allImages.map(async (image) => ({
          ...image,
          exists: await checkImageExists(image.path)
        }))
      );
      setImages(imageStatuses);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error checking images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkImages();
  }, []);

  const validImages = images.filter(img => img.exists);
  const invalidImages = images.filter(img => !img.exists);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-inter font-semibold text-lg text-gray-800 flex items-center gap-2">
          <Image className="w-5 h-5" />
          Статус изображений меню
        </h3>
        <motion.button
          onClick={checkImages}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Проверить
        </motion.button>
      </div>

      {lastUpdate && (
        <p className="text-sm text-gray-500 mb-4">
          Последняя проверка: {lastUpdate.toLocaleTimeString()}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Валидные изображения */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h4 className="font-inter font-semibold text-green-800">
              Работающие изображения ({validImages.length})
            </h4>
          </div>
          <div className="space-y-2">
            {validImages.map((image) => (
              <div key={image.id} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 truncate">{image.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Невалидные изображения */}
        {invalidImages.length > 0 && (
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h4 className="font-inter font-semibold text-red-800">
                Проблемные изображения ({invalidImages.length})
              </h4>
            </div>
            <div className="space-y-2">
              {invalidImages.map((image) => (
                <div key={image.id} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700 truncate">{image.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Совет:</strong> Добавьте новые изображения в папку <code>public/assets/menu/</code> и запустите <code>npm run update-menu-images</code> для обновления списка.
        </p>
      </div>
    </div>
  );
};

export default ImageStatus;

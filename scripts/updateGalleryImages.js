#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Путь к папке с изображениями галереи
const galleryImagesPath = path.join(__dirname, '../public/assets/gallery');
const scannerPath = path.join(__dirname, '../src/utils/galleryImageScanner.js');

// Функция для получения всех изображений из папки
function getImageFiles() {
  try {
    const files = fs.readdirSync(galleryImagesPath);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });
  } catch (error) {
    console.error('Error reading gallery images directory:', error);
    return [];
  }
}

// Функция для обновления файла scanner
function updateScannerFile(imageFiles) {
  const imageList = imageFiles.map(file => `"${file}"`).join(',\n  ');
  
  const newContent = `// Утилита для автоматического сканирования изображений галереи
// В реальном приложении это можно заменить на API вызов

// Список всех доступных изображений в папке gallery
const availableImages = [
  ${imageList}
];

// Функция для получения изображения для галереи
export const getGalleryImage = (imageId) => {
  const imageIndex = (imageId - 1) % availableImages.length;
  return \`/assets/gallery/\${availableImages[imageIndex]}\`;
};

// Функция для получения всех доступных изображений
export const getAllGalleryImages = () => {
  return availableImages.map((image, index) => ({
    id: index + 1,
    path: \`/assets/gallery/\${image}\`,
    name: image
  }));
};

// Функция для проверки существования изображения
export const checkGalleryImageExists = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Функция для автоматического назначения изображений галерее
export const assignImagesToGallery = (galleryItems) => {
  return galleryItems.map((item, index) => ({
    ...item,
    imagePath: getGalleryImage(item.id)
  }));
};

// Функция для добавления нового изображения в список
export const addNewGalleryImage = (imageName) => {
  if (!availableImages.includes(imageName)) {
    availableImages.push(imageName);
  }
};

// Функция для получения изображения по ID
export const getImageForGalleryItem = (itemId) => {
  return getGalleryImage(itemId);
};
`;

  try {
    fs.writeFileSync(scannerPath, newContent);
    console.log('✅ Gallery image scanner updated successfully!');
    console.log(`📸 Found ${imageFiles.length} images:`);
    imageFiles.forEach((file, index) => {
      console.log(`   ${index + 1}. ${file}`);
    });
  } catch (error) {
    console.error('Error updating gallery scanner file:', error);
  }
}

// Основная функция
function main() {
  console.log('🔍 Scanning gallery images...');
  const imageFiles = getImageFiles();
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found in gallery directory');
    return;
  }
  
  updateScannerFile(imageFiles);
}

// Запуск скрипта
if (require.main === module) {
  main();
}

module.exports = { getImageFiles, updateScannerFile };

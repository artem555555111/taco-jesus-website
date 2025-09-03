#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Путь к папке с изображениями меню
const menuImagesPath = path.join(__dirname, '../public/assets/menu');
const scannerPath = path.join(__dirname, '../src/utils/menuImageScanner.js');

// Функция для получения всех изображений из папки
function getImageFiles() {
  try {
    const files = fs.readdirSync(menuImagesPath);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });
  } catch (error) {
    console.error('Error reading menu images directory:', error);
    return [];
  }
}

// Функция для обновления файла scanner
function updateScannerFile(imageFiles) {
  const imageList = imageFiles.map(file => `"${file}"`).join(',\n  ');
  
  const newContent = `// Утилита для автоматического сканирования изображений меню
// В реальном приложении это можно заменить на API вызов

// Список всех доступных изображений в папке menu
const availableImages = [
  ${imageList}
];

// Функция для получения случайного изображения для блюда
export const getRandomMenuImage = (itemId) => {
  const imageIndex = (itemId - 1) % availableImages.length;
  return \`/assets/menu/\${availableImages[imageIndex]}\`;
};

// Функция для получения всех доступных изображений
export const getAllMenuImages = () => {
  return availableImages.map((image, index) => ({
    id: index + 1,
    path: \`/assets/menu/\${image}\`,
    name: image
  }));
};

// Функция для проверки существования изображения
export const checkImageExists = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Функция для автоматического назначения изображений блюдам
export const assignImagesToMenuItems = (menuItems) => {
  return menuItems.map((item, index) => ({
    ...item,
    imagePath: getRandomMenuImage(item.id)
  }));
};

// Функция для добавления нового изображения в список
export const addNewImage = (imageName) => {
  if (!availableImages.includes(imageName)) {
    availableImages.push(imageName);
  }
};

// Функция для получения изображения по ID блюда
export const getImageForMenuItem = (itemId) => {
  return getRandomMenuImage(itemId);
};
`;

  try {
    fs.writeFileSync(scannerPath, newContent);
    console.log('✅ Menu image scanner updated successfully!');
    console.log(`📸 Found ${imageFiles.length} images:`);
    imageFiles.forEach((file, index) => {
      console.log(`   ${index + 1}. ${file}`);
    });
  } catch (error) {
    console.error('Error updating scanner file:', error);
  }
}

// Основная функция
function main() {
  console.log('🔍 Scanning menu images...');
  const imageFiles = getImageFiles();
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found in menu directory');
    return;
  }
  
  updateScannerFile(imageFiles);
}

// Запуск скрипта
if (require.main === module) {
  main();
}

module.exports = { getImageFiles, updateScannerFile };

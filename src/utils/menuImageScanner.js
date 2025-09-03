// Утилита для автоматического сканирования изображений меню
// В реальном приложении это можно заменить на API вызов

// Список всех доступных изображений в папке menu
const availableImages = [
  "455283620_18238653589283507_442673956514542553_n.jpg",
  "469647848_18253894195283507_4671005416641307858_n.jpg",
  "488074721_1532467818094781_9117035626252376881_n.jpg",
  "490334212_1540808430594053_7115669186177991281_n.jpg"
];

// Функция для получения случайного изображения для блюда
export const getRandomMenuImage = (itemId) => {
  const imageIndex = (itemId - 1) % availableImages.length;
  return `/assets/menu/${availableImages[imageIndex]}`;
};

// Функция для получения всех доступных изображений
export const getAllMenuImages = () => {
  return availableImages.map((image, index) => ({
    id: index + 1,
    path: `/assets/menu/${image}`,
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

// Утилита для автоматического сканирования изображений галереи
// В реальном приложении это можно заменить на API вызов

// Список всех доступных изображений в папке gallery
const availableImages = [
  "464516853_18248094199283507_5051964185044193542_n.jpg",
  "468728300_18252534832283507_884668673722418997_n.jpg",
  "468737891_18252533623283507_3131229477034098169_n.jpg",
  "468995969_18252528415283507_1307922446538666603_n.jpg",
  "470569866_18255082828283507_5717080829017101668_n.jpg",
  "470800295_18255082708283507_1766542335221529329_n.jpg"
];

// Функция для получения изображения для галереи
export const getGalleryImage = (imageId) => {
  const imageIndex = (imageId - 1) % availableImages.length;
  return `/assets/gallery/${availableImages[imageIndex]}`;
};

// Функция для получения всех доступных изображений
export const getAllGalleryImages = () => {
  return availableImages.map((image, index) => ({
    id: index + 1,
    path: `/assets/gallery/${image}`,
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

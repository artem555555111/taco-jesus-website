// Данные меню Taco Jesus
import { getImageForMenuItem } from '../utils/menuImageScanner';

export const menuItems = [
  // Burrito категория
  {
    id: 1,
    name: "Burrito z Mieloną Wołowiną",
    description: "Fasola, ryż, guacamole, dymka, pomidory, kolendra, marynowana kapusta, papryka, mielona wołowina. Dodatek do wyboru.",
    price: "42,00 zł",
    category: "burrito",
    prepTime: "15-20 мин",
    isPopular: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Burrito z Kurczakiem",
    description: "Fasola, ryż, guacamole, zielona cebulka, pomidory, kolendra, marynowana kapusta, papryka, kurczak.",
    price: "40,00 zł",
    category: "burrito",
    prepTime: "15-20 мин",
    isPopular: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Burrito ze Słodkimi Ziemniakami",
    description: "Fasola, ryż, guacamole, zielona cebulka, pomidory, kolendra, marynowana kapusta, papryka.",
    price: "40,00 zł",
    category: "burrito",
    prepTime: "15-20 мин",
    rating: 4.6
  },
  {
    id: 4,
    name: "Burrito z Cochinitą",
    description: "Wieprzowina, fasola, ryż, guacamole, zielona cebulka, pomidory, kolendra, marynowana kapusta, papryka.",
    price: "40,00 zł",
    category: "burrito",
    prepTime: "15-20 мин",
    rating: 4.8
  },
  {
    id: 5,
    name: "Burrito Bataty i Kurczak",
    description: "Mix świeżych składników, zawiniętych w tortillę. Min. 550g. Ryż, fasola, ser, marynowana kapusta, szczypiorek, pomidory, papryka, kolendra, salsa do wyboru.",
    price: "41,00 zł",
    category: "burrito",
    prepTime: "15-20 мин",
    rating: 4.7
  },

  // Quesadilla категория
  {
    id: 6,
    name: "Quesadilla z Mieloną Wołowiną",
    description: "Pomidory, zielona cebulka, papryka, mielona wołowina w chrupiącej tortilli.",
    price: "42,00 zł",
    category: "quesadilla",
    prepTime: "12-15 мин",
    isPopular: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Quesadilla z Kurczakiem",
    description: "Pomidory, zielona cebulka, papryka, kurczak w chrupiącej tortilli.",
    price: "40,00 zł",
    category: "quesadilla",
    prepTime: "12-15 мин",
    rating: 4.7
  },
  {
    id: 8,
    name: "Quesadilla z Cochinitą",
    description: "Ser, wieprzowina, pomidory, zielona cebulka, papryka w chrupiącej tortilli.",
    price: "40,00 zł",
    category: "quesadilla",
    prepTime: "12-15 мин",
    rating: 4.6
  },
  {
    id: 9,
    name: "Quesadilla z Serem",
    description: "Pomidory, zielona cebulka, papryka, dużo roztopionego sera.",
    price: "35,00 zł",
    category: "quesadilla",
    prepTime: "10-12 мин",
    rating: 4.5
  },
  {
    id: 10,
    name: "Quesadilla Bataty",
    description: "Z roztopionym serem, świeżymi warzywami, serwowane w chrupiącej tortilli. Ser, papryka, pomidory, szczypiorek.",
    price: "40,00 zł",
    category: "quesadilla",
    prepTime: "12-15 мин",
    rating: 4.6
  },
  {
    id: 11,
    name: "Quesadilla z Grzybami i Szpinakiem",
    description: "Pomidory, zielona cebulka, papryka, grzyby, szpinak w chrupiącej tortilli.",
    price: "40,00 zł",
    category: "quesadilla",
    prepTime: "12-15 мин",
    rating: 4.5
  },

  // Salsy категория
  {
    id: 12,
    name: "Salsa Verde",
    description: "Tradycyjna zielona salsa z tomatillos i jalapeños.",
    price: "5,00 zł",
    category: "salsy",
    prepTime: "5 мин",
    rating: 4.6
  },
  {
    id: 13,
    name: "Salsa Roja",
    description: "Czerwona salsa z pomidorów i chili.",
    price: "5,00 zł",
    category: "salsy",
    prepTime: "5 мин",
    rating: 4.7
  },
  {
    id: 14,
    name: "Salsa Chipotle",
    description: "Salsa z wędzonych jalapeños chipotle.",
    price: "5,00 zł",
    category: "salsy",
    prepTime: "5 мин",
    rating: 4.8
  },
  {
    id: 15,
    name: "Salsa Mango Habanero",
    description: "Słodko-ostra salsa z mango i habanero.",
    price: "5,00 zł",
    category: "salsy",
    prepTime: "5 мин",
    rating: 4.9
  },
  {
    id: 16,
    name: "Śmietana",
    description: "Świeża śmietana do burrito i quesadilla.",
    price: "5,00 zł",
    category: "salsy",
    prepTime: "2 мин",
    rating: 4.5
  },

  // Napoje категория
  {
    id: 17,
    name: "On Lemon Kola",
    description: "Naturalna lemoniada cola.",
    price: "15,00 zł",
    category: "napoje",
    prepTime: "2 мин",
    rating: 4.6
  },
  {
    id: 18,
    name: "On Lemon Orange",
    description: "Naturalna lemoniada pomarańczowa.",
    price: "15,00 zł",
    category: "napoje",
    prepTime: "2 мин",
    rating: 4.7
  },
  {
    id: 19,
    name: "Almdudler",
    description: "Tradycyjny austriacki napój ziołowy.",
    price: "15,00 zł",
    category: "napoje",
    prepTime: "2 мин",
    rating: 4.5
  },
  {
    id: 20,
    name: "Woda w Butelce",
    description: "Woda gazowana lub niegazowana.",
    price: "6,00 zł",
    category: "napoje",
    prepTime: "1 мин",
    rating: 4.4
  }
];

// Автоматическое назначение изображений меню

// Функция для получения изображения блюда
export const getMenuImage = (itemId) => {
  return getImageForMenuItem(itemId);
};

// Создаем объект изображений динамически
export const menuImages = {};
for (let i = 1; i <= 20; i++) {
  menuImages[i] = getMenuImage(i);
}

// Категории меню
export const categories = [
  { id: 'all', name: 'menu.categories.all', icon: '🌮' },
  { id: 'burrito', name: 'menu.categories.burritos', icon: '🌯' },
  { id: 'quesadilla', name: 'menu.categories.quesadillas', icon: '🧀' },
  { id: 'salsy', name: 'menu.categories.appetizers', icon: '🥑' },
  { id: 'napoje', name: 'menu.categories.appetizers', icon: '🥤' }
];

// Функция для добавления нового блюда
export const addMenuItem = (newItem) => {
  const maxId = Math.max(...menuItems.map(item => item.id));
  return {
    id: maxId + 1,
    ...newItem
  };
};

// Функция для добавления нового изображения
export const addMenuImage = (itemId, imagePath) => {
  menuImages[itemId] = imagePath;
};

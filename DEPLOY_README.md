# 🚀 Деплой сайта Taco Jesus на Vercel

## Подготовка к деплою

### 1. Создание GitHub репозитория
```bash
# Инициализация git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Taco Jesus website"

# Создание репозитория на GitHub и подключение
git remote add origin https://github.com/YOUR_USERNAME/taco-jesus-website.git
git branch -M main
git push -u origin main
```

### 2. Деплой на Vercel

#### Вариант A: Через веб-интерфейс Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите ваш репозиторий `taco-jesus-website`
5. Vercel автоматически определит настройки:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Нажмите "Deploy"

#### Вариант B: Через Vercel CLI
```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel

# Следуйте инструкциям в терминале
```

### 3. Настройки окружения (если нужны)
В Vercel Dashboard → Settings → Environment Variables:
- `NODE_ENV=production`
- `REACT_APP_API_URL=https://your-api.com` (если есть API)

### 4. Автоматические обновления
После настройки каждый push в main ветку будет автоматически деплоить сайт.

## Структура проекта
```
taco-jesus-website/
├── public/           # Статические файлы
│   ├── assets/      # Изображения
│   └── index.html   # Главный HTML
├── src/             # Исходный код
│   ├── components/  # React компоненты
│   ├── locales/     # Переводы
│   └── utils/       # Утилиты
├── vercel.json      # Конфигурация Vercel
└── package.json     # Зависимости
```

## Команды для разработки
```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Обновление изображений меню
npm run update-menu-images
```

## Особенности проекта
- ✅ **Многоязычность**: Польский, Английский, Украинский
- ✅ **Адаптивный дизайн**: Работает на всех устройствах
- ✅ **Автоматическое обновление меню**: Добавьте фото в `public/assets/menu/`
- ✅ **Современный дизайн**: Glassmorphism, анимации, градиенты
- ✅ **SEO оптимизация**: Мета-теги, структурированные данные

## Поддержка
После деплоя сайт будет доступен по адресу:
`https://taco-jesus-website.vercel.app`

Или по кастомному домену, если настроите в Vercel Dashboard.

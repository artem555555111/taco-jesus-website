# 🚀 Быстрый деплой на Vercel

## Вариант 1: Через веб-интерфейс (Рекомендуется)

### 1. Создайте GitHub репозиторий
1. Перейдите на [github.com](https://github.com)
2. Нажмите "New repository"
3. Название: `taco-jesus-website`
4. Сделайте репозиторий **публичным**
5. Нажмите "Create repository"

### 2. Загрузите код на GitHub
```bash
# Подключите удаленный репозиторий (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/taco-jesus-website.git

# Загрузите код
git branch -M main
git push -u origin main
```

### 3. Деплой на Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите `taco-jesus-website`
5. Нажмите "Deploy" (настройки уже готовы!)

## Вариант 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel

# Следуйте инструкциям в терминале
```

## ✅ Готово!

После деплоя ваш сайт будет доступен по адресу:
`https://taco-jesus-website.vercel.app`

## 🔄 Автоматические обновления

Каждый раз, когда вы делаете `git push`, сайт автоматически обновляется!

## 📱 Особенности сайта

- ✅ **Многоязычность**: Польский, Английский, Украинский
- ✅ **Адаптивный дизайн**: Работает на всех устройствах
- ✅ **Автоматическое обновление меню**: Добавьте фото в `public/assets/menu/`
- ✅ **Современный дизайн**: Glassmorphism, анимации, градиенты
- ✅ **SEO оптимизация**: Мета-теги, структурированные данные

## 🛠 Команды для разработки

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Обновление изображений меню
npm run update-menu-images
```

// Утилиты для PWA функциональности

// Регистрация Service Worker
export const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Запрос разрешения на уведомления
export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
};

// Отправка тестового уведомления
export const sendTestNotification = () => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Taco Jesus', {
      body: 'Добро пожаловать в Taco Jesus! 🌮',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png'
    });
  }
};

// Проверка поддержки PWA
export const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
};

// Установка PWA
export const installPWA = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    });
  }
};

// Получение информации о PWA
export const getPWAInfo = () => {
  return {
    isPWA: isPWA(),
    hasServiceWorker: 'serviceWorker' in navigator,
    hasNotifications: 'Notification' in window,
    notificationPermission: 'Notification' in window ? Notification.permission : 'denied'
  };
};

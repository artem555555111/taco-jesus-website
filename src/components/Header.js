import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('header.nav.home'), href: '#home' },
    { name: t('header.nav.menu'), href: '#menu' },
    { name: t('header.nav.gallery'), href: '#gallery' },
    { name: t('header.nav.reviews'), href: '#reviews' },
    { name: t('header.nav.events'), href: '#events' },
    { name: t('header.nav.contacts'), href: '#contacts' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}
    >
      {/* Top info bar */}
      <div className="bg-mexican-red text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{t('header.address')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{t('header.hours')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{t('header.order')}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="text-4xl">🌮</div>
            <div>
              <h1 className="font-lobster text-3xl md:text-4xl text-mexican-red">
                Taco Jesus
              </h1>
              <p className="text-xs text-gray-600 font-inter">
                {t('hero.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={`font-inter font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-black hover:text-mexican-red' 
                    : 'text-black hover:text-mexican-red'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher />
            <motion.a
              href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mexican-orange hover:bg-mexican-red text-white px-6 py-2 rounded-full font-inter font-semibold transition-colors duration-200"
            >
              {t('header.order')}
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-800 hover:text-mexican-red font-inter font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-3">
              <LanguageSwitcher />
              <a
                href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-mexican-orange text-white px-6 py-2 rounded-full text-center font-inter font-semibold"
              >
                {t('header.order')}
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

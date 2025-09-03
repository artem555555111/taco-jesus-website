import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-b from-mexican-red to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🌮</div>
                <div>
                  <h3 className="font-lobster text-3xl">Taco Jesus</h3>
                  <p className="font-inter text-sm opacity-80">
                    {t('hero.subtitle')}
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-200 leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-inter font-bold text-lg mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#home" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.home')}
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.menu')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.reviews')}
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.events')}
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-200 hover:text-mexican-yellow transition-colors duration-200">
                  {t('header.nav.contacts')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-inter font-bold text-lg mb-4">{t('footer.contact_info')}</h4>
            <div className="space-y-3 font-inter text-gray-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-mexican-yellow" />
                <span className="text-sm">{t('header.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-mexican-yellow" />
                <span className="text-sm">{t('header.hours')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-mexican-yellow" />
                <span className="text-sm">{t('header.order')}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-inter font-semibold mb-3">{t('footer.social')}</h5>
              <motion.a
                href="https://www.facebook.com/TACOJESUSLOVESYOU"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-inter font-semibold transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-white/20 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-gray-200 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-2 font-inter text-gray-200 text-sm">
              <span>{t('footer.made_with')}</span>
              <Heart className="w-4 h-4 text-mexican-yellow fill-current" />
              <span>{t('footer.in_poznan')}</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center items-center gap-6 mt-8 opacity-30"
        >
          <div className="text-3xl animate-bounce-slow">🌮</div>
          <div className="text-3xl animate-pulse-slow">🌶️</div>
          <div className="text-3xl animate-wiggle">🌵</div>
          <div className="text-3xl animate-bounce-slow">☀️</div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



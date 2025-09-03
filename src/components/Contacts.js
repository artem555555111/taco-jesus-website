import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Facebook, ExternalLink, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="font-lobster text-5xl md:text-6xl text-mexican-red mb-4">
            {t('contacts.title')}
          </h2>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto">
            {t('contacts.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0.8, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-mexican-red p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-xl text-gray-800 mb-2">
                    {t('contacts.address.title')}
                  </h3>
                  <p className="font-inter text-gray-600 mb-4">
                    {t('contacts.address.street')}<br />
                    {t('contacts.address.city')}
                  </p>
                  <motion.a
                    href="https://maps.google.com/?q=Żydowska+27/1,+Poznań"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-mexican-orange text-white px-4 py-2 rounded-full font-inter font-semibold transition-colors duration-200 hover:bg-mexican-red"
                  >
                    <Navigation className="w-4 h-4" />
                    {t('contacts.address.route')}
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-mexican-yellow p-3 rounded-full">
                  <Clock className="w-6 h-6 text-mexican-red" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-xl text-gray-800 mb-2">
                    {t('contacts.hours.title')}
                  </h3>
                  <div className="space-y-2 font-inter text-gray-600">
                    <div className="flex justify-between">
                      <span>{t('contacts.hours.schedule')}</span>
                      <span className="font-semibold">{t('contacts.hours.time')}</span>
                    </div>
                    <p className="text-sm text-mexican-red font-semibold mt-3">
                      {t('contacts.hours.note')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-mexican-green p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-xl text-gray-800 mb-4">
                    {t('contacts.order.title')}
                  </h3>
                  <div className="space-y-4">
                    <motion.a
                      href="https://glovoapp.com/pl/pl/poznan/taco-jesus-poz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-mexican-orange to-mexican-red text-white rounded-xl hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <div>
                        <div className="font-inter font-semibold">{t('contacts.order.glovo.title')}</div>
                        <div className="font-inter text-sm opacity-90">{t('contacts.order.glovo.description')}</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.facebook.com/TACOJESUSLOVESYOU"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
                    >
                      <Facebook className="w-5 h-5" />
                      <div>
                        <div className="font-inter font-semibold">{t('contacts.order.facebook.title')}</div>
                        <div className="font-inter text-sm opacity-90">{t('contacts.order.facebook.description')}</div>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0.8, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
  <h3 className="font-inter font-bold text-xl text-gray-800 mb-4">
    {t('contacts.map.title')}
  </h3>
  <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.7428932773719!2d16.93509310315183!3d52.410267867204354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045babc7fcf1cd%3A0x617cbe5ad41c5f8c!2sTaco%20Jesus%20Mexican%20Restaurant!5e1!3m2!1sru!2spl!4v1756766296552!5m2!1sru!2spl"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Żydowska 27/1, Poznań"
      className="w-full h-full"
    ></iframe>
  </div>

  <motion.a
    href="https://maps.google.com/?q=Żydowska+27/1,+Poznań"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 bg-mexican-red text-white px-6 py-3 rounded-full font-inter font-semibold mt-4 transition-colors duration-200 hover:bg-red-700"
  >
    <ExternalLink className="w-4 h-4" />
    {t('contacts.map.open_maps')}
  </motion.a>
</div>


            {/* Quick Info */}
            <div className="bg-gradient-to-br from-mexican-red to-mexican-orange rounded-2xl p-8 text-white">
              <h3 className="font-lobster text-2xl mb-4">
                {t('contacts.quick_info.title')}
              </h3>
              <div className="space-y-3 font-inter">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mexican-yellow rounded-full"></div>
                  <span>{t('contacts.quick_info.parking')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mexican-yellow rounded-full"></div>
                  <span>{t('contacts.quick_info.accessibility')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mexican-yellow rounded-full"></div>
                  <span>{t('contacts.quick_info.wifi')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mexican-yellow rounded-full"></div>
                  <span>{t('contacts.quick_info.groups')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Contacts;

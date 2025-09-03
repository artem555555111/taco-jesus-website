import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const { t } = useTranslation();
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = t('reviews.reviews', { returnObjects: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
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
            {t('reviews.title')}
          </h2>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-mexican-orange" />
            </div>

            {/* Review text */}
            <blockquote className="font-inter text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              "{reviews[currentReview].text}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-mexican-yellow fill-current" />
              ))}
            </div>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-4xl">{reviews[currentReview].avatar}</div>
              <div>
                <h4 className="font-inter font-bold text-xl text-gray-800">
                  {reviews[currentReview].name}
                </h4>
                <p className="font-inter text-gray-500">
                  {reviews[currentReview].date}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-mexican-red" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-mexican-red" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview 
                    ? 'bg-mexican-red scale-125' 
                    : 'bg-gray-300 hover:bg-mexican-orange'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0.8, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`bg-white rounded-2xl p-6 shadow-lg card-hover ${
                index === currentReview ? 'ring-2 ring-mexican-red' : ''
              }`}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-mexican-yellow fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-inter text-gray-700 text-sm mb-4 line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-2xl">{review.avatar}</div>
                <div>
                  <h5 className="font-inter font-semibold text-gray-800">
                    {review.name}
                  </h5>
                  <p className="font-inter text-xs text-gray-500">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 bg-gradient-to-r from-mexican-red to-mexican-orange rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="font-inter">{t('reviews.stats.average_rating')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="font-inter">{t('reviews.stats.facebook_reviews')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="font-inter">{t('reviews.stats.satisfied_customers')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;



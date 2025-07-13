import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiCalendar, FiUsers } = FiIcons;

const WeddingInfo = () => {
  const { weddingData } = useData();
  const { wedding } = weddingData;

  const infoCards = [
    {
      icon: FiCalendar,
      title: 'Sacred Date',
      content: new Date(wedding.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      subtitle: 'A day blessed by divine providence'
    },
    {
      icon: FiClock,
      title: 'Holy Hour',
      content: wedding.time,
      subtitle: 'When two hearts become one'
    },
    {
      icon: FiMapPin,
      title: 'Sacred Venue',
      content: wedding.venue,
      subtitle: wedding.address
    },
    {
      icon: FiUsers,
      title: 'Ceremony Type',
      content: wedding.ceremonyType,
      subtitle: 'In the presence of the divine'
    }
  ];

  return (
    <section id="wedding" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 dark:from-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Wedding Details
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join us in celebrating this sacred union blessed by heaven
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center"
              >
                <SafeIcon icon={card.icon} className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                {card.content}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reception Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Reception Celebration
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {wedding.reception}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Following the ceremony, join us for a joyful celebration of love and unity
          </p>
          
          {/* Special Accommodations */}
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <h4 className="font-playfair font-bold text-gray-800 dark:text-white mb-2">
              Special Accommodations
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Prayer time will be observed • Vegetarian and halal options available • 
              Quiet space for meditation and reflection
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;
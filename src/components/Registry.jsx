import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiHeart, FiHome, FiBook, FiGlobe } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      icon: FiHome,
      title: 'Our New Home',
      description: 'Help us create a sacred space for our family',
      link: '#',
      color: 'from-amber-400 to-orange-400'
    },
    {
      icon: FiBook,
      title: 'Spiritual Journey',
      description: 'Books and resources for our faith journey together',
      link: '#',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      icon: FiHeart,
      title: 'Charity Donations',
      description: 'Bless others in need in honor of our union',
      link: '#',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: FiGlobe,
      title: 'Mission Trip Fund',
      description: 'Support our calling to serve communities in need',
      link: '#',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Our Shared Future
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your generous gifts will help us build a life of service and love
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {registryItems.map((item, index) => (
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
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center`}
              >
                <SafeIcon icon={item.icon} className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <motion.a
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-6 py-2 bg-gradient-to-r ${item.color} text-white rounded-full font-medium hover:shadow-lg transition-all duration-200`}
              >
                Give a Gift
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Traditional Registry */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
          >
            <SafeIcon icon={FiGift} className="w-10 h-10 text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Traditional Registry
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For those who prefer traditional gifts, we've also created registries at our favorite stores
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Amazon', 'Target', 'Bed Bath & Beyond', 'Williams Sonoma'].map((store, index) => (
              <motion.a
                key={store}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                {store}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;
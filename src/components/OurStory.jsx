import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar } = FiIcons;

const OurStory = () => {
  const { weddingData } = useData();
  const { story } = weddingData;

  return (
    <section id="story" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Our Divine Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            How faith guided our hearts together in perfect harmony
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-6" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-200 via-rose-300 to-amber-200 dark:from-amber-800 dark:via-rose-800 dark:to-amber-800" />

          {story.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center"
              >
                <SafeIcon icon={FiHeart} className="w-3 h-3 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-12' : 'pl-12'
                } ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <div className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3 text-amber-600 dark:text-amber-400">
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
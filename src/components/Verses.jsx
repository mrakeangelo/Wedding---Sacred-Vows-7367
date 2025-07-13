import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiPlay, FiPause, FiChevronLeft, FiChevronRight } = FiIcons;

const Verses = () => {
  const { weddingData } = useData();
  const { verses } = weddingData;
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + verses.length) % verses.length);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Audio functionality would be implemented here
  };

  return (
    <section id="verses" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Verses That Guide Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sacred words that illuminate our path together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 stained-glass-pattern opacity-10" />
            
            {/* Verse Content */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center"
              >
                <SafeIcon icon={FiBook} className="w-10 h-10 text-white" />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVerse}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <blockquote className="text-2xl md:text-3xl font-playfair text-gray-800 dark:text-white italic mb-6 leading-relaxed">
                    "{verses[currentVerse]?.text}"
                  </blockquote>
                  <cite className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                    - {verses[currentVerse]?.reference}
                  </cite>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.button
                  onClick={prevVerse}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
                  aria-label="Previous verse"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </motion.button>

                <motion.button
                  onClick={toggleAudio}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg"
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-6 h-6" />
                </motion.button>

                <motion.button
                  onClick={nextVerse}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
                  aria-label="Next verse"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Verse Indicators */}
              <div className="flex justify-center space-x-2">
                {verses.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentVerse(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentVerse
                        ? 'bg-indigo-600 dark:bg-indigo-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to verse ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Verses;
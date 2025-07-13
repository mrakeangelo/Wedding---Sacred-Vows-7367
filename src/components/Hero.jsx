import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';

const Hero = () => {
  const { weddingData } = useData();
  const { couple } = weddingData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 stained-glass-pattern opacity-30" />
      
      {/* Light Ray Effect */}
      <div className="absolute inset-0 light-ray opacity-20" />

      {/* Floating Ring Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 ring-glow"
      >
        <div className="w-full h-full rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-200 to-amber-400 opacity-60" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-dancing text-gray-800 dark:text-white mb-4">
            {couple.bride} & {couple.groom}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12"
        >
          <blockquote className="text-xl md:text-2xl font-playfair text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
            "{couple.quote}"
          </blockquote>
          <cite className="text-lg text-amber-600 dark:text-amber-400 font-medium">
            - {couple.verse}
          </cite>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <div className="text-center">
            <p className="text-lg font-playfair text-gray-600 dark:text-gray-400 mb-2">
              Wedding Date
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {new Date(weddingData.wedding.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
          
          <div className="text-center">
            <p className="text-lg font-playfair text-gray-600 dark:text-gray-400 mb-2">
              Sacred Union
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {weddingData.wedding.ceremonyType}
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
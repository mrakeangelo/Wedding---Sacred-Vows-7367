import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - in a real app, these would come from props or context
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      alt: 'Sacred ceremony preparations',
      title: 'Preparation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      alt: 'Wedding rings on scripture',
      title: 'Sacred Vows'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      alt: 'Church interior with beautiful lighting',
      title: 'Holy Sanctuary'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1594736797933-d0d3a6ba3d40?w=800&h=600&fit=crop',
      alt: 'Couple praying together',
      title: 'United in Prayer'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      alt: 'Wedding flowers and candles',
      title: 'Divine Decoration'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop',
      alt: 'Stained glass window',
      title: 'Sacred Light'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
      alt: 'Wedding ceremony moment',
      title: 'Blessed Union'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      alt: 'Reception celebration',
      title: 'Joyful Celebration'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Sacred Memories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Moments of grace captured in time, a devotional album of our journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-playfair font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </motion.button>

                {/* Navigation Buttons */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </motion.button>

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-xl font-playfair font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
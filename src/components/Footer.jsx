import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const { weddingData } = useData();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-playfair font-bold mb-4">
              {weddingData.couple.bride} & {weddingData.couple.groom}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-2 text-amber-400" />
                <span>contact@sacredvows.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2 text-amber-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2 text-amber-400" />
                <span>{weddingData.wedding.venue}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-playfair font-bold mb-4">Sacred Links</h3>
            <div className="space-y-2">
              <a href="#story" className="block hover:text-amber-400 transition-colors">Our Story</a>
              <a href="#wedding" className="block hover:text-amber-400 transition-colors">Wedding Details</a>
              <a href="#verses" className="block hover:text-amber-400 transition-colors">Sacred Verses</a>
              <a href="#rsvp" className="block hover:text-amber-400 transition-colors">RSVP</a>
              <a href="#guestbook" className="block hover:text-amber-400 transition-colors">Guestbook</a>
            </div>
          </motion.div>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-playfair font-bold mb-4">Sacred Date</h3>
            <p className="text-2xl font-dancing text-amber-400 mb-2">
              {new Date(weddingData.wedding.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
            <p className="text-lg">{weddingData.wedding.time}</p>
            <p className="text-sm text-gray-400 mt-2">
              {weddingData.wedding.ceremonyType}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center mb-4 md:mb-0"
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-sm">Made with love and devotion</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-sm text-gray-400">
                Sacred Vows – A Spiritual Wedding Template by{' '}
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Mrake Agency
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blessing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <blockquote className="text-lg font-playfair italic text-gray-300 max-w-2xl mx-auto">
            "May the Lord bless you and keep you; may the Lord make his face shine on you and be gracious to you."
          </blockquote>
          <cite className="text-sm text-amber-400 mt-2 block">- Numbers 6:24-25</cite>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
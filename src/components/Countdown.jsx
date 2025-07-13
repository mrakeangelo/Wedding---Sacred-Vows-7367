import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';

const Countdown = () => {
  const { weddingData } = useData();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(weddingData.wedding.date);
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingData.wedding.date]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900 dark:via-orange-900 dark:to-red-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Until Our Sacred Day
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every moment brings us closer to our eternal promise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center relative overflow-hidden"
            >
              {/* Candle Glow Effect */}
              <div className="absolute inset-0 candle-glow opacity-20" />
              
              <div className="relative z-10">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-2"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {unit.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blessing Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-xl font-playfair italic text-gray-700 dark:text-gray-300 mb-4">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
            </p>
            <cite className="text-lg text-amber-600 dark:text-amber-400 font-medium">
              - Jeremiah 29:11
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
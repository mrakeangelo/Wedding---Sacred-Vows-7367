import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 6 + Math.random() * 4,
    x: Math.random() * 100,
    size: 20 + Math.random() * 20
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            y: -50, 
            x: `${petal.x}vw`, 
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: '100vh', 
            opacity: [0, 0.6, 0.4, 0],
            rotate: 360
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-30 blur-sm" />
        </motion.div>
      ))}
      
      {/* Light rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-200 via-transparent to-transparent transform rotate-12"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-rose-200 via-transparent to-transparent transform -rotate-12"
      />
    </div>
  );
};

export default FloatingElements;
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Verses from './components/Verses';
import Countdown from './components/Countdown';
import Registry from './components/Registry';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import FloatingElements from './components/FloatingElements';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <div className="App">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingScreen key="loading" />
              ) : (
                <Routes>
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/" element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Header />
                      <main>
                        <Hero />
                        <OurStory />
                        <WeddingInfo />
                        <Verses />
                        <Countdown />
                        <Gallery />
                        <RSVP />
                        <Guestbook />
                        <Registry />
                      </main>
                      <Footer />
                      <FloatingElements />
                    </motion.div>
                  } />
                </Routes>
              )}
            </AnimatePresence>
          </div>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50 flex items-center justify-center z-50"
  >
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 mx-auto mb-6 border-4 border-amber-200 border-t-amber-600 rounded-full"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-playfair text-gray-700"
      >
        Sacred Vows
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-500 mt-2"
      >
        Where love meets eternity
      </motion.p>
    </div>
  </motion.div>
);

export default App;
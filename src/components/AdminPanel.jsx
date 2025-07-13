import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSave, FiEye, FiEdit, FiArrowLeft } = FiIcons;

const AdminPanel = () => {
  const { weddingData, updateWeddingData, isPreview, setIsPreview } = useData();
  const [formData, setFormData] = useState(weddingData);
  const [activeTab, setActiveTab] = useState('couple');

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    updateWeddingData(formData);
    alert('Changes saved successfully!');
  };

  const tabs = [
    { id: 'couple', label: 'Couple Info' },
    { id: 'wedding', label: 'Wedding Details' },
    { id: 'story', label: 'Our Story' },
    { id: 'verses', label: 'Sacred Verses' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-800 dark:text-white">
            Sacred Vows Admin
          </h1>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsPreview(!isPreview)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <SafeIcon icon={FiEye} className="w-5 h-5 mr-2" />
              {isPreview ? 'Exit Preview' : 'Preview'}
            </motion.button>
            <motion.button
              onClick={handleSave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <SafeIcon icon={FiSave} className="w-5 h-5 mr-2" />
              Save Changes
            </motion.button>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
              Back to Site
            </motion.a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'couple' && (
              <div className="space-y-6">
                <h2 className="text-xl font-playfair font-bold text-gray-800 dark:text-white">
                  Couple Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bride's Name
                    </label>
                    <input
                      type="text"
                      value={formData.couple.bride}
                      onChange={(e) => handleChange('couple', 'bride', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Groom's Name
                    </label>
                    <input
                      type="text"
                      value={formData.couple.groom}
                      onChange={(e) => handleChange('couple', 'groom', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sacred Quote
                  </label>
                  <textarea
                    value={formData.couple.quote}
                    onChange={(e) => handleChange('couple', 'quote', e.target.value)}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Verse Reference
                  </label>
                  <input
                    type="text"
                    value={formData.couple.verse}
                    onChange={(e) => handleChange('couple', 'verse', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            )}

            {activeTab === 'wedding' && (
              <div className="space-y-6">
                <h2 className="text-xl font-playfair font-bold text-gray-800 dark:text-white">
                  Wedding Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.wedding.date}
                      onChange={(e) => handleChange('wedding', 'date', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Wedding Time
                    </label>
                    <input
                      type="time"
                      value={formData.wedding.time}
                      onChange={(e) => handleChange('wedding', 'time', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    value={formData.wedding.venue}
                    onChange={(e) => handleChange('wedding', 'venue', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Venue Address
                  </label>
                  <input
                    type="text"
                    value={formData.wedding.address}
                    onChange={(e) => handleChange('wedding', 'address', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ceremony Type
                  </label>
                  <input
                    type="text"
                    value={formData.wedding.ceremonyType}
                    onChange={(e) => handleChange('wedding', 'ceremonyType', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Reception Venue
                  </label>
                  <input
                    type="text"
                    value={formData.wedding.reception}
                    onChange={(e) => handleChange('wedding', 'reception', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            )}

            {/* Additional tabs would be implemented similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
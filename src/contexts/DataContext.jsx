import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [weddingData, setWeddingData] = useState({
    couple: {
      bride: 'Sarah',
      groom: 'Michael',
      quote: 'Love is patient, love is kind. It does not envy, it does not boast.',
      verse: '1 Corinthians 13:4'
    },
    wedding: {
      date: '2024-06-15',
      time: '4:00 PM',
      venue: 'St. Mary\'s Cathedral',
      address: '123 Faith Street, Sacred City, SC 12345',
      ceremonyType: 'Holy Matrimony',
      reception: 'Garden of Grace Reception Hall'
    },
    story: [
      {
        date: '2020-09-15',
        title: 'Divine Meeting',
        description: 'Our paths crossed during Sunday service, a moment orchestrated by divine providence.'
      },
      {
        date: '2021-12-24',
        title: 'First Christmas',
        description: 'We celebrated our first Christmas together, sharing the joy of Christ\'s birth.'
      },
      {
        date: '2023-02-14',
        title: 'Sacred Proposal',
        description: 'Under the chapel bells, our hearts united in a promise of eternal love.'
      }
    ],
    verses: [
      {
        text: 'Love is patient, love is kind. It does not envy, it does not boast.',
        reference: '1 Corinthians 13:4',
        audio: null
      },
      {
        text: 'Two are better than one, because they have a good return for their labor.',
        reference: 'Ecclesiastes 4:9',
        audio: null
      },
      {
        text: 'Above all, love each other deeply, because love covers over a multitude of sins.',
        reference: '1 Peter 4:8',
        audio: null
      }
    ]
  });

  const [rsvpData, setRsvpData] = useState([]);
  const [guestbookData, setGuestbookData] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  const updateWeddingData = (newData) => {
    setWeddingData(prev => ({ ...prev, ...newData }));
  };

  const addRSVP = (rsvp) => {
    setRsvpData(prev => [...prev, { ...rsvp, id: Date.now() }]);
  };

  const addGuestbookEntry = (entry) => {
    setGuestbookData(prev => [...prev, { ...entry, id: Date.now(), timestamp: new Date() }]);
  };

  return (
    <DataContext.Provider value={{
      weddingData,
      updateWeddingData,
      rsvpData,
      addRSVP,
      guestbookData,
      addGuestbookEntry,
      isPreview,
      setIsPreview
    }}>
      {children}
    </DataContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setEmailContext = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <EmailContext.Provider value={{ email, setEmailContext }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};

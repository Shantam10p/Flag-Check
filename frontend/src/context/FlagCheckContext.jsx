import { createContext, useContext, useState } from 'react';

const FlagCheckContext = createContext();

export const FlagCheckProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('landing');

  return (
    <FlagCheckContext.Provider value={{ currentScreen, setCurrentScreen }}>
      {children}
    </FlagCheckContext.Provider>
  );
};

export const useFlagCheck = () => {
  const context = useContext(FlagCheckContext);
  if (!context) {
    throw new Error('useFlagCheck must be used within FlagCheckProvider');
  }
  return context;
};
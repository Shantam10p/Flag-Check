import { createContext, useContext, useState } from 'react';

const FlagCheckContext = createContext();

export const FlagCheckProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedType, setSelectedType] = useState(null);

  return (
    <FlagCheckContext.Provider value={{ currentScreen, setCurrentScreen, selectedType, setSelectedType }}>
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
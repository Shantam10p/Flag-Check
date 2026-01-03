import { createContext, useContext, useState } from 'react';

const FlagCheckContext = createContext();

export const FlagCheckProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedType, setSelectedType] = useState(null);
  const [inputData, setInputData] = useState({
    description: '',
    screenshots: [],
    additionalContext: ''
  });

  return (
    <FlagCheckContext.Provider value={{ currentScreen, setCurrentScreen, selectedType, setSelectedType, inputData, setInputData }}>
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
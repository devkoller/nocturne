import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from "@/hooks/useLocalStorage";

type LanguageContextProps = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'en',
  changeLanguage: () => { },
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  const [localStorage, setLocalStorage] = useLocalStorage({
    key: "LanguageStore",
    defaultValue: 'en',
  })

  const [currentLanguage, setCurrentLanguage] = useState<string>(localStorage);

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setLocalStorage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage])


  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para acceder fácilmente al contexto
export const useLanguage = () => useContext(LanguageContext);

"use client";

import React, { createContext, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

// Define o tipo para o valor do contexto
type LanguageContextType = {
  language?: string;
  switchLanguage?: () => void;
};

// Cria um novo contexto com o tipo definido e valor padrão null
export const LanguageContext = createContext<LanguageContextType | null>(null);

// Cria um componente provedor
export const LanguageProvider = ({ children }: { children: React.ReactNode}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const switchLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
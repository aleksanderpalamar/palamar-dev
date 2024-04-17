"use client";

import React, { FC, Reducer, createContext, useReducer, useState } from 'react';

type Texts = {
  title: string;
  description: string;
}

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  changeLanguage: (language: string) => void;
  texts: Texts;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  changeLanguage: () => {},
  texts: {
    title: "",
    description: ""
  }
});

function languageReducer(
  state: Texts,
  action: { type: string; payload: string | Texts }
): Texts {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.payload as Texts;
    default:
      return state;
  }
}

const enTexts: Texts = {
  title: "",
  description: ""
};

const ptTexts: Texts = {
  title: "",
  description: ""
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<Texts, { type: string; payload: Texts }>
  >(languageReducer, enTexts);

  const [language, setLanguage] = useState<string>("en");

  const changeLanguage = (selectedLanguage?: string) => {
    setLanguage(selectedLanguage || "en");
    if (selectedLanguage === "en") {
      dispatch({ type: "CHANGE_LANGUAGE", payload: enTexts });
    } else {
      dispatch({ type: "CHANGE_LANGUAGE", payload: ptTexts });
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        changeLanguage,
        texts: state,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };



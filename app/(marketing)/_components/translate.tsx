"use client";

import { Button } from "@/components/ui/button";
import i18n from "i18next";
import { useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        projects: "Projetos",
        description:
          "Esses projetos foram desenvolvidos com o intuito de aprender novas tecnologias e aprimorar as que já conheço, pois como não posso colocar em prática e divulgar os códigos dos projetos que desenvolvo no meu trabalho, então decidi criar esses projetos pessoais.",
      },
    },
    en: {
      translation: {
        projects: "Projects",
        description:
          "These projects were developed with the aim of learning new technologies and improving the ones I already know, as I cannot put into practice and publish the codes of the projects I develop in my work, so I decided to create these personal projects.",
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export const Translate = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  function switchLanguage() {
    const newLanguage = language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <div className="flex items-center mt-4">
      <h1 className="text-2xl flex flex-col font-bold text-zinc-900 dark:text-zinc-50 text-center mt-40">
        {t('projects')}
        <span className="text-sm text-zinc-500 font-normal">
          {t('description')}
        </span>
      </h1>
      <Button
        className="ml-4 text-xs font-light p-1 w-8 h-8 bg-transparent"
        onClick={switchLanguage}
        variant="outline"       
      >
        {language === "pt" ? "PT" : "EN"}
      </Button>
    </div>
  );
};

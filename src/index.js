import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { BrowserRouter as Router } from 'react-router-dom'


import translationEN from './assets/locales/en/translationEN.json'
import translationFR from './assets/locales/fr/translationFR.json'
import ScrollToTop from './addons/ScrollToTop';


const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
};


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    resources,
    fallbackLng: "fr",
    debug: true,
    // backend: {
    //   loadPath: '/assets/locales/{{lng}}/translation.json',
    // },
    react: { useSuspense: false },
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_ch from './utils/translate/chinese/global.json';
import global_en from './utils/translate/english/global.json';
import global_es from './utils/translate/spanish/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    ch: {
      global: global_ch,
    },
  },
});

ReactDOM.createRoot(document.querySelector('#root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);

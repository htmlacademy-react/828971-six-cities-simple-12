import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  AmountOffers: 132
} as const;


root.render(
  <React.StrictMode>
    <App amountOffers={Settings.AmountOffers} />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  AmountOffers: 132
} as const;


root.render(
  <React.StrictMode>
    <App
      amountOffers={Settings.AmountOffers}
      offers={offers}
    />
  </React.StrictMode>,
);
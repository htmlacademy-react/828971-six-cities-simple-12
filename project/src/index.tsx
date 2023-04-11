import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {feedbacks} from './mocks/feedbacks';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchEmail, fetchOffers, fetchProperty} from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());
store.dispatch(fetchEmail());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        feedbacks={feedbacks}
      />
    </Provider>
  </React.StrictMode>
);

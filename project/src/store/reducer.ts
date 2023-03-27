import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, fillOffersAction} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state) => {
      state.offers = offers.slice().filter((offer) => offer.city.name === state.city);
    });
});

export { reducer };

import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, fillOffersAction} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY} from '../constants';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY)
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

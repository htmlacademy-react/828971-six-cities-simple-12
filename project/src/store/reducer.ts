import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, fillOffersAction, setSortTypeAction, setActiveOfferAction} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY, DEFAULT_OPTION} from '../constants';
import {Offer} from '../types/offer';

const initialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  offers: offers.slice().filter((offer) => offer.city.name === DEFAULT_CITY),
  activeOffer: null as null | Offer,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state) => {
      state.offers = offers
        .slice()
        .filter((offer) => offer.city.name === state.city);
    })
    .addCase(setSortTypeAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOfferAction, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { reducer };

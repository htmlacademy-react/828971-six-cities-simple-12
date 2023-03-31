import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, setSortTypeAction, setActiveOfferAction, loadOffersAction} from './action';
import {DEFAULT_CITY, DEFAULT_OPTION} from '../constants';
import {Offer} from '../types/offer';

type InitialState = {
  city: string,
  sortType: string,
  offers: null | Offer[],
  activeOffer: null | Offer,
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  offers: [],
  activeOffer: null as null | Offer,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortTypeAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOfferAction, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { reducer };

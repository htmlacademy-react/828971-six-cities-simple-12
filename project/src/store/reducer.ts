import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, setSortTypeAction, setActiveOfferAction, loadOffersAction, setAuthStatusAction, setError} from './actions';
import {DEFAULT_CITY, DEFAULT_OPTION} from '../constants';
import {Offer} from '../types/offer';
import {AuthorizationStatus} from '../seervices/auth-data';


type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  activeOffer: null | Offer;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  offers: [],
  activeOffer: null as null | Offer,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
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

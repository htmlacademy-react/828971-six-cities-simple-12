import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, setSortTypeAction, setActiveOfferAction, loadOffersAction, setAuthStatusAction, setError, setOffersDataLoadingStatus} from './actions';
import {DEFAULT_CITY, DEFAULT_OPTION} from '../constants';
import {Offer} from '../types/offer';
import {AuthorizationStatus} from '../services/auth-data';


type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  activeOffer: null | Offer;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  offers: [],
  activeOffer: null as null | Offer,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setActiveOfferAction, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { reducer };

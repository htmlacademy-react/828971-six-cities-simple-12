import {createReducer} from '@reduxjs/toolkit';
import {setMail} from './actions';
import {DEFAULT_CITY, DEFAULT_OPTION} from '../constants';
import {Offer} from '../types/offer';
import {AuthorizationStatus} from '../constants';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  offers: [],
  property: null,
  nearby: [],
  feedback: [],
  activeOffer: null as null | Offer,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null,
  email: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMail, (state, action) => {
      state.email = action.payload;
    });
});

export { reducer };

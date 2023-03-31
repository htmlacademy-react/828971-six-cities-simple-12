import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offer} from '../types/offer';
import {loadOffersAction} from './action';
import {APIRoute} from '../constants';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    // debugger;
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffersAction(data));
  },
);

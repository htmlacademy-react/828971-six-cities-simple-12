import {LoadingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffers} from '../api-actions';
import {NameSpace} from '../../constants';

const initialState: LoadingData = {
  offers: [],
  isOffersDataLoading: false,
  error: null,
};

export const loadingData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        // state.error = 'There is some error there';
      });
  }
});


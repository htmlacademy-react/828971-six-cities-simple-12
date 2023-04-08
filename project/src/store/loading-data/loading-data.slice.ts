import {LoadingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchEmail, fetchOffers} from '../api-actions';
import {NameSpace} from '../../constants';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialState: LoadingData = {
  offers: [],
  isOffersDataLoading: false,
  error: null,
  email: '',
};

export const loadingData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmail.fulfilled, (state, action) => {
        state.email = action.payload;
      })
      .addCase(fetchEmail.rejected, (state) => {
        state.email = '';
      })
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
        state.error = 'We can\'t connect with the server, whats for my sake going on? Check connection please!';
      });
  }
});

export const { setError } = loadingData.actions;

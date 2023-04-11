import {LoadingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchEmail, fetchOffers, fetchProperty} from '../api-actions';
import {NameSpace} from '../../constants';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialState: LoadingData = {
  offers: [],
  property: null,
  isDataLoading: false,
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
      .addCase(fetchProperty.pending, (state) => {
        // state.isDataLoading = true;
        state.error = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.property = action.payload;
        // state.isDataLoading = false;
        state.error = null;
      })
      .addCase(fetchProperty.rejected, (state) => {
        state.error = 'We can\'t get property info';
        // state.isDataLoading = false;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isDataLoading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isDataLoading = false;
        state.error = 'We can\'t connect with the server, whats for my sake going on? Check connection please!';
      });
  }
});

export const { setError } = loadingData.actions;

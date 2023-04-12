import {LoadingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchEmail, fetchOffers, fetchProperty, fetchNearby, fetchFeedback} from '../api-actions';
import {NameSpace} from '../../constants';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialState: LoadingData = {
  offers: [],
  property: null,
  nearby: [],
  feedback: [],
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
      })
      .addCase(fetchProperty.pending, (state) => {
        // state.isDataLoading = true;
        state.error = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isDataLoading = false;
        state.error = null;
      })
      .addCase(fetchProperty.rejected, (state) => {
        state.error = 'We can\'t get property info';
        state.isDataLoading = false;
      })
      .addCase(fetchNearby.pending, (state) => {
        // state.isDataLoading = true;
        state.error = null;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isDataLoading = false;
        state.error = null;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.error = 'There is no nearby properties';
        state.isDataLoading = false;
      })
      .addCase(fetchFeedback.pending, (state) => {
        // state.isDataLoading = true;
        state.error = null;
      })
      .addCase(fetchFeedback.fulfilled, (state, action) => {
        state.feedback = action.payload;
        state.isDataLoading = false;
        state.error = null;
      })
      .addCase(fetchFeedback.rejected, (state) => {
        state.error = 'There is no comments about this building';
        state.isDataLoading = false;
      });
  }
});

export const { setError } = loadingData.actions;

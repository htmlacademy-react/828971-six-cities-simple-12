import {LoadingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchFeedback, fetchNearby, fetchOffers, fetchProperty} from '../api-actions';
import {IsDataLoading, NameSpace} from '../../constants';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialState: LoadingData = {
  offers: [],
  property: null,
  nearby: [],
  feedback: [],
  isDataLoading: IsDataLoading.NoLoading,
  error: null,
};

export const loadingData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setWhatsLoading: (state, action: PayloadAction<IsDataLoading>) => {
      state.isDataLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isDataLoading = IsDataLoading.Offers;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = IsDataLoading.NoLoading;
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isDataLoading = IsDataLoading.NoLoading;
        state.error = 'We can\'t connect with the server, whats for my sake going on? Check connection please!';
      })
      .addCase(fetchProperty.pending, (state) => {
        state.isDataLoading = IsDataLoading.SingleOffer;
        state.error = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isDataLoading = IsDataLoading.NoLoading;
        state.error = null;
      })
      .addCase(fetchProperty.rejected, (state) => {
        state.error = 'We can\'t get property info';
        state.isDataLoading = IsDataLoading.NoLoading;
      })
      .addCase(fetchNearby.pending, (state) => {
        state.isDataLoading = IsDataLoading.SingleOffer;
        state.error = null;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isDataLoading = IsDataLoading.NoLoading;
        state.error = null;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.error = 'There is no nearby properties';
        state.isDataLoading = IsDataLoading.NoLoading;
      })
      .addCase(fetchFeedback.pending, (state) => {
        state.isDataLoading = IsDataLoading.SingleOffer;
        state.error = null;
      })
      .addCase(fetchFeedback.fulfilled, (state, action) => {
        state.feedback = action.payload;
        state.isDataLoading = IsDataLoading.NoLoading;
        state.error = null;
      })
      .addCase(fetchFeedback.rejected, (state) => {
        state.error = 'There is no comments about this building';
        state.isDataLoading = IsDataLoading.NoLoading;
      });
  }
});

export const { setError, setWhatsLoading } = loadingData.actions;

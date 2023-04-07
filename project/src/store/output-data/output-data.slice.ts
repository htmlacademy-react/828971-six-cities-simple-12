import {DEFAULT_CITY, DEFAULT_OPTION, NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {OutputData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: OutputData = {
  error: null,
  currentMail: '',
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  activeOffer: null as null | Offer,
};

export const outputData = createSlice({
  name: NameSpace.OutputData,
  initialState,
  reducers: {
    setCurrentMail: (state, action) => {
      state.currentMail = action.payload;
    },
    setCityAction: (state, action) => {
      state.city = action.payload;
    },
    setSortTypeAction: (state, action) => {
      state.sortType = action.payload;
    },
    setActiveOfferAction: (state, action) => {
      state.activeOffer = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCityAction, setSortTypeAction, setActiveOfferAction, setCurrentMail } = outputData.actions;

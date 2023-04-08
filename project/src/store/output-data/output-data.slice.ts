import {DEFAULT_CITY, DEFAULT_OPTION, NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {OutputData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialState: OutputData = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_OPTION.sortType,
  activeOffer: null as null | Offer,
};

export const outputData = createSlice({
  name: NameSpace.OutputData,
  initialState,
  reducers: {
    setCityAction: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSortTypeAction: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setActiveOfferAction: (state, action: PayloadAction<null | Offer>) => {
      state.activeOffer = action.payload;
    },
  },
});

export const { setCityAction, setSortTypeAction, setActiveOfferAction } = outputData.actions;

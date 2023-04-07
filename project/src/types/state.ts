import { store } from '../store';
import {Offer} from './offer';
import {AuthorizationStatus} from '../services/auth-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  activeOffer: null | Offer;
  authorizationStatus: AuthorizationStatus;
  email: string;
  isOffersDataLoading: boolean;
  error: string | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type LoadingData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  error: string | null;
}

export type OutputData = {
  error: string | null;
  currentMail: string;
  city: string;
  sortType: string;
  activeOffer: null | Offer;
}

import { store } from '../store';
import {Offer} from './offer';
import {AuthorizationStatus} from '../services/auth-data';
import {Feedback} from './feedback';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  property: null | Offer;
  nearby: Offer[];
  feedback: Feedback[];
  activeOffer: null | Offer;
  authorizationStatus: AuthorizationStatus;
  email: string;
  isDataLoading: boolean;
  error: string | null;
};

export type UserProcess = Pick<InitialState, 'authorizationStatus'>;

export type OutputData = Pick<InitialState, 'city' | 'sortType' | 'activeOffer'>;

export type LoadingData = Omit<InitialState, keyof UserProcess | keyof OutputData>;

import { store } from '../store';
import {Offer} from './offer';
import {AuthorizationStatus, IsDataLoading} from '../constants';
import {Feedback} from './feedback';
import {UserData} from './user-data';

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
  email: UserData['email'];
  isDataLoading: IsDataLoading;
  isSending: boolean;
  error: string | null;
};

export type UserProcess = Pick<InitialState, 'authorizationStatus' | 'isSending' | 'email'>;

export type OutputData = Pick<InitialState, 'city' | 'sortType' | 'activeOffer'>;

export type LoadingData = Omit<InitialState, keyof UserProcess | keyof OutputData>;

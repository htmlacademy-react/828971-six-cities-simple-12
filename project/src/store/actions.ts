import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AuthorizationStatus} from '../services/auth-data';

export const setCityAction = createAction<string>('city/setCity');
export const setAuthStatusAction = createAction<AuthorizationStatus>('app/setAuthorisation');
export const setSortTypeAction = createAction<string>('sort-offers/setSortType');
export const setError = createAction<string|null>('data/setError');
export const setActiveOfferAction = createAction<Offer|null>('offers-card/setActiveOffer');
export const loadOffersAction = createAction<Offer[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/isLoading');
//со слешом - это не ссылка, а правило именования. Слева написано, в каком компоненте применяется, а справа - собсна название экшна

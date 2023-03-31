import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setCityAction = createAction<string>('city/setCity');
// export const fillOffersAction = createAction('mainpage/fillOffers');
export const setSortTypeAction = createAction<string>('sort-offers/setSortType');
export const setActiveOfferAction = createAction<Offer|null>('offers-card/setActiveOffer');
export const loadOffersAction = createAction<Offer[] | null>('data/loadOffers');
//со слешом - это не ссылка, а правило именования. Слева написано, в каком компоненте применяется, а справа - собсна название экшна

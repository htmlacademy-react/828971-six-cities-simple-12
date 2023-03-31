import {createAction} from '@reduxjs/toolkit';

export const setCityAction = createAction<string>('city/setCity');
export const fillOffersAction = createAction('mainpage/fillOffers');
export const setSortTypeAction = createAction<string>('sort-offers/setSortType');
//со слешом - это не ссылка, а правило именования. Слева написано, в каком компоненте применяется, а справа - собсна название экшна

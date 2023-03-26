import {createAction} from '@reduxjs/toolkit';

export const changeCityAction = createAction<string>('city/changeCity');
export const fillOffersAction = createAction('offers/fillOffers');

//со слешом - это не ссылка, а правило именования. Слева написано, в каком компоненте применяется, а справа - собсна название экшна

import {createAction} from '@reduxjs/toolkit';

export const setMail = createAction<string>('login/setMail');
//со слешом - это не ссылка, а правило именования. Слева написано, в каком компоненте применяется, а справа - собсна название экшна

import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants';
import {NameSpace} from '../../constants';
import {checkAuthAction, loginAction, logoutAction, sendFeedbackAction} from '../api-actions';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isSending: false,
  email: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.email = '';
      })
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isSending = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isSending = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isSending = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(sendFeedbackAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendFeedbackAction.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(sendFeedbackAction.rejected, (state) => {
        state.isSending = false;
      });
  }
});

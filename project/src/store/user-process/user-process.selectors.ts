import {State} from '../../types/state';
import {NameSpace, AuthorizationStatus} from '../../constants';
import {UserData} from '../../types/user-data';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getMail = (state: State): UserData['email'] => state[NameSpace.User].email;
export const getIsSending = (state: State): boolean => state[NameSpace.User].isSending;

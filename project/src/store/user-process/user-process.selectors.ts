import {State} from '../../types/state';
import {NameSpace, AuthorizationStatus} from '../../constants';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

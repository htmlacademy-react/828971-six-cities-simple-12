import {State} from '../../types/state';
import {NameSpace} from '../../constants';
import {AuthorizationStatus} from '../../services/auth-data';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

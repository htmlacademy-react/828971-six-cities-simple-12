import {State} from '../../types/state';
import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';

export const getMail = (state: State): string => state[NameSpace.Data].email;
export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getError = (state: State): string | null => state[NameSpace.Data].error;

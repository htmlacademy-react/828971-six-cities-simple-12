import {State} from '../../types/state';
import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {Feedback} from '../../types/feedback';

export const getMail = (state: State): string => state[NameSpace.Data].email;
export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getProperty = (state: State): Offer | null => state[NameSpace.Data].property;
export const getNearby = (state: State): Offer[] => state[NameSpace.Data].nearby;
export const getFeedback = (state: State): Feedback[] => state[NameSpace.Data].feedback;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getError = (state: State): string | null => state[NameSpace.Data].error;

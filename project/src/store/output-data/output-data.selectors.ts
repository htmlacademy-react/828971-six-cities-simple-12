import {State} from '../../types/state';
import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';

export const getMail = (state: State): string => state[NameSpace.OutputData].currentMail;
export const getCity = (state: State): string => state[NameSpace.OutputData].city;
export const getSortType = (state: State): string => state[NameSpace.OutputData].sortType;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.OutputData].activeOffer;

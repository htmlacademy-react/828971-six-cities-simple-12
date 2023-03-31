import {SORTING_OPTIONS} from './constants';
import {Option} from './types/option';
import {Offer} from './types/offer';

export function getCallback(sortType: string):(offer1: Offer, offer2: Offer) => number {
  const currentOption = SORTING_OPTIONS.find((elem: Option) => elem.sortType === sortType);
  if(currentOption && currentOption.cb) {
    return(currentOption.cb);
  }
  return () => 0;
}

export function getSortedOffers(offers: Offer[], sortType: string): Offer[] {
  return offers.slice().sort(getCallback(sortType));
}

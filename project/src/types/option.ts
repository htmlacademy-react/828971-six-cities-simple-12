import {Offer} from './offer';

export type Option = {
  name: string;
  sortType: string;
  cb?: ((offer1: Offer, offer2: Offer) => number);
};

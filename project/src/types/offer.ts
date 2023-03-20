import {User} from './user';
import {Location} from './location';

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: User;
  description: string;
  location: Location;
  id: number;
};

import L, {Icon} from 'leaflet';
import {Offer} from './types/offer';
import {Option} from './types/option';
import {RatingLegend} from './types/rating-legend';

export const URL_API = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Offers = '/hotels',
  Feedback = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const AUTH_TOKEN_KEY_NAME = '6-cities-token';

export const TIMEOUT_SHOW_ERROR = 2000;

export const CITIES: readonly string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  OutputData = 'OUTPUT_SETTINGS'
}

export const DEFAULT_CITY: string = CITIES[0];

export const SORTING_OPTIONS: Option[] = [
  {
    name: 'Popular',
    sortType: 'popular',
  },
  {
    name: 'Price: low to high',
    sortType: 'fromcheap',
    cb: (offer1: Offer, offer2: Offer): number => offer1.price - offer2.price,
  },
  {
    name: 'Price: high to low',
    sortType: 'fromexp',
    cb: (offer1: Offer, offer2: Offer): number => offer2.price - offer1.price,
  },
  {
    name: 'Top rated first',
    sortType: 'fromhighrated',
    cb: (offer1: Offer, offer2: Offer): number => offer2.rating - offer1.rating,
  },
];

export const DEFAULT_OPTION: Option = SORTING_OPTIONS[0];

export const MAP_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_ATRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const DEFAULT_ICON: Icon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

export const ACTIVE_ICON: Icon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

export const RATING_LEGEND: RatingLegend[] = [
  {
    title: 'perfect',
    rating: 5
  },
  {
    title: 'good',
    rating: 4
  },
  {
    title: 'not bad',
    rating: 3
  },
  {
    title: 'badly',
    rating: 2
  },
  {
    title: 'terribly',
    rating: 1
  }
];


export const MAP_HEIGHT = '500px';

export const COMMENT_LENGTH = 50;

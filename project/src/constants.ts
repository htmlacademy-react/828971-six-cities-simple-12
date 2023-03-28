import L, {Icon} from 'leaflet';
import {Offer} from './types/offer';
import {Option} from './types/option';

export const CITIES: readonly string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY: string = CITIES[0];

export const FILTER_OPTIONS: Option[] = [
  {
    'name': 'Popular',
  },
  {
    'name': 'Price: low to high',
    'cb': (offer1: Offer, offer2: Offer) => {if (offer1.price > offer2.price) {return 1;} if (offer1.price < offer2.price) {return -1;} else {return 0;}}
  },
  {
    'name': 'Price: high to low',
    'cb': (offer1: Offer, offer2: Offer) => {if (offer1.price < offer2.price) {return 1;} if (offer1.price > offer2.price) {return -1;} else {return 0;}},
  },
  {
    'name': 'Top rated first',
    'cb': (offer1: Offer, offer2: Offer) => {if (offer1.rating < offer2.rating) {return 1;} if (offer1.rating > offer2.rating) {return -1;} else {return 0;}},
  },
];

export const DEFAULT_OPTION: Option = FILTER_OPTIONS[0];

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

export const MAP_HEIGHT = '500px';

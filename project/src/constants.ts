import L, {Icon} from 'leaflet';

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY: string = CITIES[0];

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

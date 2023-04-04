import {ACTIVE_ICON, DEFAULT_ICON, SORTING_OPTIONS} from './constants';
import {Option} from './types/option';
import {Offer} from './types/offer';
import L, {Marker} from 'leaflet';

export function getCallback(sortType: string):(offer1: Offer, offer2: Offer) => number {
  const currentOption = SORTING_OPTIONS.find((elem: Option) => elem.sortType === sortType);
  if(currentOption && currentOption.cb) {
    return(currentOption.cb);
  }
  return () => 0;
}

export function getFilteredOffers(offers: Offer[], city: string): Offer[] {
  return offers.filter((offer: Offer) => offer.city.name === city);
}

export function getSortedOffers(offers: Offer[], city: string, sortType: string): Offer[] {
  return getFilteredOffers(offers, city).slice().sort(getCallback(sortType));
}

export function createMarkers(offers: Offer[], activeOffer: null | Offer): Marker[] {
  const markers: Marker[] = [];
  offers.forEach((offer) => {
    const marker = new L.Marker([offer.location.latitude, offer.location.longitude]);
    if (activeOffer && offer === activeOffer) {
      marker.setIcon(ACTIVE_ICON);
    } else {
      marker.setIcon(DEFAULT_ICON);
    }
    markers.push(marker);
  });
  return markers;
}


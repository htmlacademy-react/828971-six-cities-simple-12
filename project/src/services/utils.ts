import {
  ACTIVE_ICON, DATE_YMD_ORDER,
  DEFAULT_ICON, MAX_COMMENT_LENGTH,
  MAX_FEEDBACKS_QUANTITY, MIN_COMMENT_LENGTH,
  MONTH_LEGEND,
  MONTH_ORDER,
  SORTING_OPTIONS,
  YEAR_ORDER
} from '../constants';
import {Option} from '../types/option';
import {Offer} from '../types/offer';
import L, {Marker} from 'leaflet';
import {Feedback} from '../types/feedback';

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

export function validateFeedback(rating: number, comment: string): boolean {
  return (rating > 0 && comment.length > MIN_COMMENT_LENGTH && comment.length < MAX_COMMENT_LENGTH);
}

function getDateForSorting(date: string): Date {
  return new Date(date);
}

export function getDateForData(date: string): string {
  return date.split('T')[DATE_YMD_ORDER].toString();
}

export function getDateForDescription(date: string): string {
  const dateComponents = date.split('-');
  const currentMonth = +dateComponents[MONTH_ORDER];
  const currentMonthName = MONTH_LEGEND[currentMonth - 1];
  const currentYear = dateComponents[YEAR_ORDER];
  return `${currentMonthName} ${currentYear}`;
}

export function getSortedFeedbacks(feedbacks: Feedback[]): Feedback[] {
  return feedbacks.slice().sort((a, b): number => {
    const firstDate = getDateForSorting(a.date);
    const secondDate = getDateForSorting(b.date);
    if (firstDate < secondDate) {
      return 1;
    } else if (firstDate > secondDate) {
      return -1;
    } else {
      return 0;
    }
  }).slice(0, MAX_FEEDBACKS_QUANTITY);
}


import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../../types/offer';
import useMap from '../../../hooks/use-map/use-map';

type mapProps = {
  offers: Offer[];
}
const myIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

function Map( {offers} : mapProps): JSX.Element {
  const City = offers[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, City);

  useEffect( () => {
    if(map !== null) {
      offers.map((offer: Offer) => {

        L.marker([offer.location.latitude, offer.location.longitude], {icon: myIcon})
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section
      className="property__map map"
      style={{height: '500px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

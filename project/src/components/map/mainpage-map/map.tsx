import {useEffect, useRef} from 'react';
import L, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/use-map/use-map';
import {useAppSelector} from '../../../hooks/use-global-state';
import {Location} from '../../../types/location';
import {State} from '../../../types/state';

type MapProps = {
  city: Location;
};

const myIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

function Map( {city} : MapProps): JSX.Element {
  const currentOffers = useAppSelector((state: State) => state.offers);
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      currentOffers.forEach((offer) => {
        const marker = new L.Marker([offer.location.latitude, offer.location.longitude], {icon: myIcon});
        markers.push(marker);
        marker.addTo(map);
      });

      return () => {
        map && (
          markers.forEach((marker) => {
            marker.removeFrom(map);
          })
        );
      };
    }
  }, [map, currentOffers]);

  useEffect(() => {
    if (map) {
      map.panTo(L.latLng(city.latitude, city.longitude));
      if(city.zoom !== map.getZoom()) {
        map.setZoom(city.zoom);
      }
    }
  }, [currentOffers]);

  return (
    <section
      className="cities__map map"
      style={{height: '500px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

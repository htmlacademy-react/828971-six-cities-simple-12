import React, {useEffect, useRef} from 'react';
import L, {Marker} from 'leaflet';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {DEFAULT_ICON, MAP_HEIGHT} from '../../constants';
import {Location} from '../../types/location';
import {useAppSelector} from '../../hooks/use-global-state';
import {State} from '../../types/state';

type mapProps = {
  mapClassName: string;
}

function Map({mapClassName} : mapProps): JSX.Element {
  const currentOffers = useAppSelector((state: State) => state.offers);
  const mapCenter: Location = currentOffers[0].city.location;
  const mapRef = useRef(null);

  const map = useMap(mapRef, mapCenter);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      currentOffers.forEach((offer) => {
        const marker = new L.Marker([offer.location.latitude, offer.location.longitude], {icon: DEFAULT_ICON});
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
      map.setView([mapCenter.latitude, mapCenter.longitude]);
      if(mapCenter.zoom !== map.getZoom()) {
        map.setZoom(mapCenter.zoom);
      }
    }
  }, [currentOffers]);

  return (
    <section
      className={ cn('map', mapClassName) }
      style={{height: MAP_HEIGHT}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

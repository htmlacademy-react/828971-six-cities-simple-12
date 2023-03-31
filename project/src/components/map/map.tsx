import React, {FC, useEffect, useRef} from 'react';
import L, {Marker} from 'leaflet';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {DEFAULT_ICON, MAP_HEIGHT} from '../../constants';
import {Location} from '../../types/location';
import {Offer} from '../../types/offer';

type MapProps = {
  mapClassName: string;
  offers: Offer[];
}

//колыбель функционального компонента - учимся пользоваться FC
export const Map: FC<MapProps> = ({mapClassName, offers}) => {
  const mapCenter: Location = offers[0].city.location;
  const mapRef = useRef(null);

  const map = useMap(mapRef, mapCenter);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      offers.forEach((offer) => {
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
  }, [map, offers]);

  useEffect(() => {
    if (map) {
      map.setView([mapCenter.latitude, mapCenter.longitude], mapCenter.zoom);
    }
  }, [offers]);

  return (
    <section
      className={ cn('map', mapClassName) }
      style={{height: MAP_HEIGHT}}
      ref={mapRef}
    >
    </section>
  );
};

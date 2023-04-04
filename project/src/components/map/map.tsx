import React, {FC, useEffect, useRef} from 'react';
import {Marker} from 'leaflet';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
// import {ACTIVE_ICON, DEFAULT_ICON, MAP_HEIGHT} from '../../constants';
import {MAP_HEIGHT} from '../../constants';
import {Location} from '../../types/location';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks/use-global-state';
import {createMarkers} from '../../utils';

type MapProps = {
  mapClassName: string;
  offers: Offer[];
}

//колыбель функционального компонента - учимся пользоваться FC
export const Map: FC<MapProps> = ({mapClassName, offers}) => {
  const activeOffer: Offer | null = useAppSelector((state) => state.activeOffer);
  const mapCenter: Location = offers[0].city.location;
  const mapRef = useRef(null);

  const map = useMap(mapRef, mapCenter);

  //toDo - ну и объект в activeOffer нафиг не нужен. Можно бы сущность и поменьше.
  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      markers.push(...createMarkers(offers, activeOffer));
      markers.forEach((marker) => {
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
  }, [map, offers, activeOffer]);

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

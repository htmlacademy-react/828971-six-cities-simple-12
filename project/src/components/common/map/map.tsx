import {FC, useEffect, useRef} from 'react';
import {Marker} from 'leaflet';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/use-map/use-map';
import {MAP_HEIGHT} from '../../../constants';
import {Location} from '../../../types/location';
import {Offer} from '../../../types/offer';
import {useAppSelector} from '../../../hooks/use-global-state/use-global-state';
import {createMarkers} from '../../../services/utils';
import {getActiveOffer} from '../../../store/output-data/output-data.selectors';

type MapProps = {
  mapClassName: string;
  offers: Offer[];
}

//колыбель функционального компонента - учимся пользоваться FC
export const Map: FC<MapProps> = ({mapClassName, offers}) => {
  const activeOffer: Offer | null = useAppSelector(getActiveOffer);
  const mapCenter: Location = offers[0].city.location;
  const mapRef = useRef(null);

  const map = useMap(mapRef, mapCenter);

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

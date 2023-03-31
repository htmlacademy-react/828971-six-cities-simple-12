import {useEffect, useRef, useState, MutableRefObject} from 'react';
import L, {Map} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Location} from '../../types/location';
import {MAP_URL_TEMPLATE, MAP_ATRIBUTION} from '../../constants';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  centralPoint: Location
): Map | null {
  const [map, setMap] = useState< Map | null >(null);
  const isRenderedRef = useRef(false);

  useEffect( () => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: centralPoint.latitude,
          lng: centralPoint.longitude,
        },
        zoom: centralPoint.zoom,
      });

      L.tileLayer(
        MAP_URL_TEMPLATE,
        {
          attribution: MAP_ATRIBUTION,
        },
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, centralPoint]);

  return map;
}

export default useMap;

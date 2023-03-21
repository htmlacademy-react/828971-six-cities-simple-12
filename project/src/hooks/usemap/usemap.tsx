import {useEffect, useRef, useState, MutableRefObject} from 'react';
import L, {Map} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Location} from '../../types/location';

// type mapHookProps = {
//   mapRef: MutableRefObject<HTMLElement | null>;
//   centralPoint: Location;
// }

function useMap(mapRef: MutableRefObject<HTMLElement | null>, centralPoint: Location): Map | null {
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
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, centralPoint]);

  return map;
}

export default useMap;

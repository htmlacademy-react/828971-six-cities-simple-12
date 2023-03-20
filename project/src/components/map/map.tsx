import {useEffect, useRef, useState} from 'react';
import L, {Map} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';

type mapProps = {
  offers: Offer[];
}

function DrawMap( {offers} : mapProps): JSX.Element {
  const [myMap, setMyMap] = useState< Map | null >(null);
  const mapRef = useRef(null);
  const isRenderedRef = useRef(false);

  useEffect( () => {

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: 52.3909553943508,
          lng: 4.85309666406198,
        },
        zoom: 11,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(instance);

      setMyMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  useEffect( () => {
    if(myMap !== null) {
      offers.map((offer: Offer) => {
        const myIcon = L.icon({
          iconUrl: '/img/pin.svg',
          iconSize: [30, 40],
          iconAnchor: [15, 40],
        });
        L.marker([offer.city.location.latitude, offer.city.location.longitude], {icon: myIcon})
          .addTo(myMap);
      });
    }
  }, [myMap, offers]);

  return (
    <section
      className="cities__map map"
      style={{height: '500px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default DrawMap;

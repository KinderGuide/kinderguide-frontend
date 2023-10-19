import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './YandexMap.scss';

export const YandexMap = (
  {
    // address
  }
) => {
  // Ю. Убрать хардкод адреса при получении данных с бека
  const address = 'Москва, ул. Льва Толстого, 16';
  const [coordinates, setCoordinates] = useState([55.751999, 37.617734]);

  function geocode(ymaps) {
    ymaps.geocode(address).then((result) => {
      setCoordinates(result.geoObjects.get(0).geometry.getCoordinates());
    });
  }

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '030fd2ff-4ac3-4840-96a1-534808cedc6b',
      }}
    >
      <Map
        onLoad={(ymaps) => geocode(ymaps)}
        className='direction'
        defaultState={{
          center: coordinates,
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={[
          'control.ZoomControl',
          'control.FullscreenControl',
          'geocode',
          'geolocation',
        ]}
      >
        {(coordinates[0] !== 55.751999 || coordinates[1] !== 37.617734) && (
          <Placemark geometry={coordinates} />
        )}
      </Map>
    </YMaps>
  );
};

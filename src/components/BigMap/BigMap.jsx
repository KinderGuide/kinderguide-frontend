import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import './BigMap.module.scss.css';

export const BigMap = ({ cardData }) => {
  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '030fd2ff-4ac3-4840-96a1-534808cedc6b',
      }}
    >
      <Map
        className='direction'
        defaultState={{
          center: [55.751999, 37.617734],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        {cardData.map((card) => (
          <Placemark geometry={card.coordinates} />
        ))}
      </Map>
    </YMaps>
  );
};
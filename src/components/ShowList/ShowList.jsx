import './ShowList.scss';
import { Card } from '../common/Card';
import img1 from '../../images/NewsCard/img1.jpg';
import img2 from '../../images/NewsCard/img2.jpg';
import img3 from '../../images/NewsCard/img3.jpg';
import Preloader from '../Preloader/Preloader';

const cardData = [
  {
    id: 0,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    album: [img1],
    price: 1000,
    rating: 3.7,
  },
  {
    id: 1,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    album: [img2],
    price: 2000,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    album: [img3],
    price: 3000,
    rating: 4.9,
  },
];

const schoolName = ['школа', 'школы', 'школ'];
const gardenName = ['детский сад', 'детксих сада', 'детских садов'];

function getName(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

export const ShowList = ({
  data = cardData,
  selected,
  category,
  isLoading,
}) => (
  <section className='show-list'>
    {isLoading ? (
      <Preloader />
    ) : (
      <>
        <p className='show-list__info'>
          Найдено {data.length}{' '}
          {category === 'schools'
            ? getName(data.length, schoolName)
            : getName(data.length, gardenName)}
        </p>
        <div className='show-list__items'>
          {data.map((card) => {
            return <Card key={card.id} cardData={card} selected={selected} />;
          })}
        </div>
      </>
    )}
  </section>
);

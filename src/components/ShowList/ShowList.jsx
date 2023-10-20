import './ShowList.scss';
import { Card } from '../common/Card';
import img1 from '../../images/NewsCard/img1.jpg';
import img2 from '../../images/NewsCard/img2.jpg';
import img3 from '../../images/NewsCard/img3.jpg';

const cardData = [
  {
    id: 0,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    image: img1,
    price: 1000,
    rating: 3.7,
  },
  {
    id: 1,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    image: img2,
    price: 2000,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    image: img3,
    price: 3000,
    rating: 4.9,
  },
];

export const ShowList = ({ data = cardData, selected }) => (
  <section className='show-list'>
    {data.map((card) => {
      return <Card key={card.id} cardData={card} selected={selected} />;
    })}
  </section>
);

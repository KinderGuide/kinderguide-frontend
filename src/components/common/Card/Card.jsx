import { useState } from 'react';

import img from '../../../images/NewsCard/img1.jpg';
import { Stars } from '../../Stars';
import './Card.scss';

export const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const cardData = {
    id: 0,
    name: 'Название школы',
    description:
      'Краткая информация о школе Краткая информация о школеКраткая информация о школеКраткая информация о школеКраткая информация о школе',
    image: img,
    price: 1000,
    rating: 3.7,
  };

  const cardLikeToggleClass = isLiked ? 'card__like-btn_active' : '';
  // Добавление лайка
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='card'>
      <img className='card__img' src={cardData.image} alt='Фото школы' />
      <div className='card__container'>
        <div className='card__title-block'>
          <h3 className='card__title'>{cardData.name}</h3>
          <div className='card__like-block'>
            <button
              className={`card__like-btn ${cardLikeToggleClass}`}
              aria-label='Поставить лайк'
              onClick={handleLike}
            />
          </div>
        </div>

        <p className='card__text'>{cardData.description}</p>

        <div className='card__price-block'>
          <p className='card__price'>{`от ${cardData.price} ₽/мес.`}</p>
          <Stars rating={cardData.rating} />
        </div>
      </div>
    </div>
  );
};

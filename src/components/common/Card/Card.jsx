import { useState } from 'react';

import { Stars } from '../../Stars';
import './Card.scss';
import { LikeButton } from '../../LikeButton/LikeButton';
import { Link } from 'react-router-dom';

export const Card = ({ cardData, selected }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='card'>
      <img className='card__img' src={cardData.image} alt='Фото школы' />
      <div className='card__container'>
        <div className='card__title-block'>
          <Link to={`/${selected}/${cardData.id}`} className='card__title'>
            {cardData.name}
          </Link>
          <LikeButton isLiked={isLiked} onLike={handleLike} />
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

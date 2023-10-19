import './Stars.scss';
import filled from '../../images/Stars/Star-filled.svg';
import half from '../../images/Stars/Star-half.svg';
import empty from '../../images/Stars/Star-empty.svg';

export const Stars = ({ rating }) => {
  const starFilled = Math.floor(rating);
  const starEmpty = Math.floor(5 - rating);
  const starHalf = 5 - starFilled - starEmpty;
  // Ю. Костыль для мапа звездочек
  const stars = [0, 0, 0, 0, 0];
  return (
    <div className='stars'>
      {stars.slice(0, starFilled).map(() => (
        <img className='stars__star' src={filled} alt='Заполненная звезда' />
      ))}
      {starHalf !== 0 && (
        <img
          className='stars__star'
          src={half}
          alt='Частично заполненная звезда'
        />
      )}
      {stars.slice(0, starEmpty).map(() => (
        <img className='stars__star' src={empty} alt='Пустая звезда' />
      ))}
      <p className='stars__rating'>({rating})</p>
    </div>
  );
};

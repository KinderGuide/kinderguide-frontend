import './Stars.scss';
import filled from '../../images/Stars/Star-filled.svg';
import half from '../../images/Stars/Star-half.svg';
import empty from '../../images/Stars/Star-empty.svg';

export const Stars = ({ rating, children }) => {
  const starFilled = Math.floor(rating);
  const starEmpty = Math.floor(5 - rating);
  const starHalf = 5 - starFilled - starEmpty;
  // Ю. Костыль для мапа звездочек
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='stars'>
      {stars.slice(0, starFilled).map((i) => (
        <img
          key={`sf+${i}`}
          className='stars__star'
          src={filled}
          alt='Заполненная звезда'
        />
      ))}
      {starHalf !== 0 && (
        <img
          className='stars__star'
          src={half}
          alt='Частично заполненная звезда'
        />
      )}
      {stars.slice(0, starEmpty).map((i) => (
        <img
          key={`se+${i}`}
          className='stars__star'
          src={empty}
          alt='Пустая звезда'
        />
      ))}
      {children}
    </div>
  );
};

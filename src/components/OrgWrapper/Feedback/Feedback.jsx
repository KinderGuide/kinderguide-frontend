import './Feedback.scss';
import { Stars } from '../../Stars';
import { Button } from '../../common/Button';

export const Feedback = () => {
  return (
    <div className='feedback'>
      <div className='feedback__titleWrapper'>
        <h3 className='feedback__title'>Test</h3>
        <Stars rating={5} />
      </div>
      <p className='feedback__text'>
        Мы перевели нашего сына Марка в этом году. Ранее мы учились в другой
        школе, но нам там не понравилось ни мне, ни сыну из-за отсутствия
        индивидуального подхода к детям test test test test test test test test
        test
      </p>
      <Button variant='link'>Подробнее></Button>
    </div>
  );
};

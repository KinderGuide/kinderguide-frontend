import './Feedback.scss';
import { Stars } from '../../Stars';
import { Button } from '../../common/Button';

export const Feedback = ({ feedback }) => {
  return (
    <div className='feedback'>
      {feedback?.map((fb) => (
        <div key={fb.id} className='feedback__item'>
          <div className='feedback__titleWrapper'>
            <h3 className='feedback__title'>{fb.author}</h3>
            <Stars rating={fb.grade} />
          </div>
          <p className='feedback__text'>{fb.content}</p>
        </div>
      ))}
    </div>
  );
};

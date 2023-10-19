import './Promo.scss';
import { Button } from '../../../../components/common/Button';
import star from '../../../../images/Promo/star.svg';
import glass from '../../../../images/Promo/magnifying_glass.svg';
import question from '../../../../images/Promo/question.svg';
import { Link } from 'react-router-dom';

export function Promo() {
  return (
    <section className='promo'>
      <div className='wrapper'>
        <div className='promo__description-area'>
          <h2 className='promo__title'>
            Помогаем найти лучший образовательный центр для вашего ребёнка
          </h2>

          <Button width='408px' size='large'>
            <Link to='catalog'>Перейти в каталог</Link>
          </Button>
        </div>
        <div className='promo__image-container'>
          <img src={star} alt='Звездочка' />
          <img src={glass} alt='Увеличительное стекло' />
          <img src={question} alt='Вопросительный знак' />
          <span>Как найти хорошую школу?</span>
          <span>Где искать репетитора?</span>
          <span>Как выбрать курсы?</span>
        </div>
      </div>
    </section>
  );
}

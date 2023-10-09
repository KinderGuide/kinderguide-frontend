import { Button } from '../../../../components/common/Button';
import arrow from '../../../../images/NewsCard/Arrow.svg';
import { NewsCard } from '../NewsCard';
import './Resources.scss';

export function Resources() {
  return (
    <section className='resources' aria-label='Ресурсы'>
      <div className='wrapper'>
        <div className='resources__container'>
          <ul className='resources__list'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </ul>
          <Button variant='link'>
            <img
              className='resources__button-img'
              src={arrow}
              alt='Кнопка, ведущая на страницу Ресурсы'
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

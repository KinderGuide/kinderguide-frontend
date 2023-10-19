import './OrgWrapper.scss';
import { Button } from '../common/Button';
import like from '../../images/OrgWrapper/heart.svg';
import { Stars } from '../Stars';
import { YandexMap } from './YandexMap';
import { Feedback } from './Feedback';
import { ImageSlider } from '../ImageSlider';
import { album } from '../../utils/exampleData';

export const OrgWrapper = ({
  children,
  name,
  description,
  telephone,
  address,
  email,
  price,
  price_of_year,
  underground,
  area,
  // reviews,
  feedback,
  org,
}) => {
  // Ю. Убрать хардкод, когда прийдут данные
  const reviews = 4.5;
  return (
    <div className='orgWrapper'>
      <nav className='orgWrapper__nav'>
        <Button variant='link' type='button'>
          Образование /
        </Button>
        <Button variant='link' type='button'>
          {org}
        </Button>
      </nav>
      <div className='orgWrapper__headerWrapper'>
        <div>
          <h1 className='orgWrapper__header'>{name}Test</h1>
          <div className='orgWrapper__ratingWrapper'>
            <Stars rating={reviews}></Stars>
          </div>
        </div>
        <Button variant='link' type='button'>
          <img
            className='orgWrapper__like'
            src={like}
            alt='добавить в избранное'
          />
        </Button>
      </div>
      <div className='orgWrapper__content'>
        <section className='orgWrapper__info' aria-label='Карточка организации'>
          <div className='orgWrapper__imgContainer'>
            <ImageSlider images={album} width='738px' />
          </div>
          <div className='orgWrapper__description'>
            <h2 className='orgWrapper__descHeader'>Описание</h2>
            <p className='orgWrapper__descText'>
              {description}Brookes School Moscow- международная частная IB
              школа, расположенная в Москве в районе Ботанического сада города
              Москвы. Является частью сети Brookes Education Group, имеющей
              отделения по всему миру и ставящей своей целью создание уникальной
              атмосферы для успешного развития потенциала каждого ученика.
              Учебные программы предназначены для детей{' '}
            </p>
            <Button variant='link' type='button'>
              Подробнее>
            </Button>
            {children}
          </div>
        </section>
        <aside className='orgWrapper__aside'>
          <div className='orgWrapper__contactInfo'>
            <p className='orgWrapper__title'>Стоимость обучения</p>
            <p className='orgWrapper__perYear'>{price_of_year} в год</p>
            <p className='orgWrapper__perMonth'>{price} в месяц</p>
            <p className='orgWrapper__title'>Контакты</p>
            <p className='orgWrapper__contacts'>Телефон: {telephone}</p>
            <p className='orgWrapper__contacts'>Почта: {email}</p>
            <p className='orgWrapper__contacts'>
              Адрес {underground} {area} {address}
            </p>
            <Button variant='primary' type='submit'>
              Подать заявление
            </Button>
          </div>
          <div className='orgWrapper__map'>
            <YandexMap address={address} />
          </div>
        </aside>
      </div>
      <section className='orgWrapper__feedback' aria-label='Отзывы'>
        <h2 className='orgWrapper__feedbackHeader'>Отзывы</h2>
        <div className='orgWrapper__feedbackCards'>
          {/* //Слайдер с отзывами */}
          <Feedback feedback={feedback} />
        </div>
      </section>
    </div>
  );
};

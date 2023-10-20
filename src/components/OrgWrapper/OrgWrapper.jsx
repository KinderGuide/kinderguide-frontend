import './OrgWrapper.scss';
import { Button } from '../common/Button';
import { Stars } from '../Stars';
import { YandexMap } from './YandexMap';
import { Feedback } from './Feedback';
import { ImageSlider } from '../ImageSlider';
import { Link } from 'react-router-dom';
import { Activity } from './Activity';
import { LikeButton } from '../LikeButton';
import { Reviews } from '../ShowList/Reviews';
import React from 'react';

export const OrgWrapper = ({ data, feedback, org, link, activities }) => {
  return (
    <div className='orgWrapper'>
      <nav className='orgWrapper__nav'>
        <Link to='/' className='orgWrapper__nav-item'>
          Образование
        </Link>
        <p className='orgWrapper__nav-item'>&nbsp;/&nbsp;</p>
        <Link to={`/${link}`} className='orgWrapper__nav-item'>
          {org}
        </Link>
      </nav>
      <div className='orgWrapper__headerWrapper'>
        <h1 className='orgWrapper__header'>{data.name}</h1>
        <div className='orgWrapper__favourite'>
          <LikeButton isLike={false} onLike={() => console.log('likeTest')} />
        </div>
      </div>
      <div className='orgWrapper__ratingWrapper'>
        <Stars rating={data.rating} reviews={data.reviews}>
          {<Reviews reviews={data.reviews} />}
        </Stars>
      </div>
      <div className='orgWrapper__content'>
        <section className='orgWrapper__info' aria-label='Карточка организации'>
          <div className='orgWrapper__imgContainer'>
            <ImageSlider images={data.album} width='738px' />
          </div>
          <div className='orgWrapper__section'>
            <h2 className='orgWrapper__sectionHeader'>Описание</h2>
            <p className='orgWrapper__descText'>{data.description}</p>
          </div>
          <div className='orgWrapper__section'>
            <h2 className='orgWrapper__sectionHeader'>Информация</h2>
            <div>
              {activities.map((activity) => (
                <Activity
                  key={`${org}+${activity.type}`}
                  text={activity.text}
                  type={activity.type}
                />
              ))}
            </div>
          </div>
        </section>
        <aside className='orgWrapper__aside'>
          <div className='orgWrapper__contactInfo'>
            <p className='orgWrapper__title'>Стоимость обучения</p>
            <p className='orgWrapper__perYear'>
              {data.price_of_year} &#8381; в год
            </p>
            <p className='orgWrapper__perMonth'>{data.price} &#8381; в месяц</p>
            <p className='orgWrapper__title'>Контакты</p>
            <p className='orgWrapper__contacts'>Телефон: {data.telephone}</p>
            <p className='orgWrapper__contacts'>Почта: {data.email}</p>
            <p className='orgWrapper__contacts'>Адрес: {data.address}</p>
            <div className='orgWrapper__buttonWrapper'>
              <Button
                className='orgWrapper__button'
                variant='primary'
                type='submit'
                size='large'
                width='408px'
              >
                Подать заявление
              </Button>
            </div>
          </div>
          <div className='orgWrapper__map'>
            <YandexMap address={data.address} />
          </div>
        </aside>
      </div>
      <section className='orgWrapper__feedback' aria-label='Отзывы'>
        <h2 className='orgWrapper__sectionHeader'>Отзывы</h2>
        {!feedback && <h1>Отзывов еще нет. Будьте первыми</h1>}
        <Feedback feedback={feedback} />
      </section>
    </div>
  );
};

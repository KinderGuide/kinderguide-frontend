import './NewsCard.scss';

export const NewsCard = ({ dataCard }) => {
  return (
    <li className='news-card'>
      <img
        className='news-card__image'
        src={dataCard.image}
        alt='тут будет картинка'
      />
      <div className='news-card__info'>
        <p className='news-card__date'>{dataCard.date_posted}</p>
        <h3 className='news-card__title'>{dataCard.title}</h3>
        <p className='news-card__description'>{dataCard.content}</p>
      </div>
    </li>
  );
};

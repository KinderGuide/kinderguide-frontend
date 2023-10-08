import './AboutCard.scss';

export function AboutCard({ dataCard }) {
  return (
    <li className='about-card'>
      <div
        className={`about-card__icon-wrapper about-card__icon-wrapper_type_${dataCard.color}`}
      >
        <img
          className='about-card__icon'
          src={dataCard.image}
          alt={dataCard.alt}
        />
      </div>
      <div className='about-card__info'>
        <h3 className='about-card__title'>{dataCard.title}</h3>
        <p className='about-card__description'>{dataCard.description}</p>
      </div>
    </li>
  );
}

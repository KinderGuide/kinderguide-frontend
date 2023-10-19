import { ServiceWorkCard } from '../ServiceWorkCard';
import './ServiceWork.scss';

export function ServiceWork() {
  const cards = [
    {
      id: '1',
      title: 'Выбирайте школу или детский сад',
      description:
        'Используя фильтры, выберите лучшую школу или детский сад, для своего ребенка.',
    },
    {
      id: '2',
      title: 'Находите необходимы курсы и секции',
      description: 'На сайте вы найдете  более 80 направлений курсов и секций.',
    },
    {
      id: '3',
      title: 'Ищите  репетитора по компетенциям',
      description:
        'На сайте вы найдете  более 80 направлений курсов и секций. Помогите ребенку, выбрать кем стать.',
    },
    {
      id: '4',
      title: 'Читайте и отзывы и рекомендации',
      description:
        'На нашем сайте отзывы реальных людей, которые помогут вам определится с выбором, образовательной программы или заведения.',
    },
  ];

  return (
    <section className='service-work'>
      <div className='wrapper'>
        <h2 className='service-work__title'>
          Как работает сервис KinderGuide?
        </h2>
        <p className='service-work__subtitle'>
          Упрости себе жизнь, используя наш полезный сервис
        </p>
        <ul className='service-work__list'>
          {cards?.map((card) => (
            <ServiceWorkCard key={card.id} dataCard={card} />
          ))}
        </ul>
      </div>
    </section>
  );
}

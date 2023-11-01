import { AboutCard } from '../AboutCard';
import './About.scss';

export function About() {
  const cards = [
    {
      id: 'ab1',
      color: 'one',
      title: 'Информированный выбор',
      description:
        'Пользователи получают доступ к подробной информации о детских школах и садах, включая отзывы и рейтинги от других родителей.',
    },
    {
      id: 'ab2',
      color: 'two',
      title: 'Удобство и доступность',
      description:
        'Сервис доступен 24/7 через интернет, что позволяет родителям и опекунам искать и бронировать места в детских учреждениях в любое удобное для них время и место.',
    },
    {
      id: 'ab3',
      color: 'three',
      title: 'Экономия вашего времени',
      description:
        'Родители и опекуны могут быстро и легко находить подходящие детские учреждения, ознакомиться с информацией и бронировать места, всё это в одном месте.',
    },
  ];

  return (
    <section className='about' aria-label='Почему выбирают нас'>
      <div className='wrapper'>
        <h2 className='about__header'>Почему выбирают нас?</h2>
        <ul className='about__list'>
          {cards?.map((card) => (
            <AboutCard key={card.id} dataCard={card} />
          ))}
        </ul>
      </div>
    </section>
  );
}

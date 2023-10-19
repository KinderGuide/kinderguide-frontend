import { NewsData } from '../../../../utils/exampleData';
import { NewsCard } from '../NewsCard';
import './News.scss';

export function News() {
  return (
    <section className='news'>
      <div className='wrapper'>
        <div className='news__container'>
          <h2 className='news__title'>Новости</h2>
          <ul className='news__list'>
            {NewsData?.map((dataCard) => (
              <NewsCard key={dataCard.id} dataCard={dataCard} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

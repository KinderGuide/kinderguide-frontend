import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetKindergartenQuery } from '../../api/kindergartenApi';
import { useGetKindergartenReviewsQuery } from '../../api/kindergartenReviewsApi';

export const Kindergarten = ({ kindergarten_id }) => {
  const { kindergartenData = [] } = useGetKindergartenQuery({
    kindergarten_id,
  });
  const { kindergartenReviewsData = [] } = useGetKindergartenReviewsQuery({
    kindergarten_id,
  });

  return (
    <OrgWrapper
      data={kindergartenData}
      feedback={kindergartenReviewsData}
      org='Детские сады'
    >
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Возраст</h3>
          {kindergartenData.ages?.map((age) => (
            <p key={kindergartenData.name + age} className='school__text'>
              {age}
            </p>
          ))}
        </div>
        <div className='school'>
          <div className='school__activity'>
            <h3 className='school__title'>Время работы</h3>
            <p className='school__text'>{kindergartenData.working_hours}</p>
          </div>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Размер группы</h3>
          <p className='school__text'>{kindergartenData.group_size}</p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Иностранные языки</h3>
          {kindergartenData.languages?.map((language) => (
            <p key={kindergartenData.name + language} className='school__text'>
              {language}
            </p>
          ))}
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Спортивное развитие</h3>
          {kindergartenData.sport_dev?.map((item) => (
            <p key={kindergartenData.name + item} className='school__text'>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Творческое развитие</h3>
          {kindergartenData.create_dev?.map((item) => (
            <p key={kindergartenData.name + item} className='school__text'>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Интеллектуальное развитие</h3>
          {kindergartenData.intel_dev?.map((item) => (
            <p key={kindergartenData.name + item} className='school__text'>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Музыкальное развитие</h3>
          {kindergartenData.music_dev?.map((item) => (
            <p key={kindergartenData.name + item} className='school__text'>
              {item}
            </p>
          ))}
        </div>
      </div>
    </OrgWrapper>
  );
};

import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetSchoolQuery } from '../../api/schoolApi';
import { useGetSchoolReviewsQuery } from '../../api/schoolReviewsApi';

export const School = ({ school_id }) => {
  const { schoolData = [] } = useGetSchoolQuery({ school_id });
  const { schoolReviewsData = [] } = useGetSchoolReviewsQuery({ school_id });

  return (
    <OrgWrapper data={schoolData} feedback={schoolReviewsData} org='Школы'>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Возраст</h3>
          <p className='school__text'>{schoolData.age}</p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Профиль</h3>
          {schoolData.profiles?.map((profile) => (
            <p key={schoolData.name + profile} className='school__text'>
              {profile}
            </p>
          ))}
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Классы</h3>
          <p className='school__text'>{schoolData.classes}</p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Иностранные языки</h3>
          {schoolData.languages?.map((language) => (
            <p key={schoolData.name + language} className='school__text'>
              {language}
            </p>
          ))}
        </div>
      </div>
    </OrgWrapper>
  );
};

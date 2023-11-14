import { useState } from 'react';
import {
  useGetKindergartenAllQuery,
  useGetKindergartenFavoritesQuery,
  useGetKindergartenQuery,
} from '../../api/kindergartenApi';
import {
  useGetSchoolAllQuery,
  useGetSchoolFavoritesQuery,
} from '../../api/schoolApi';
import { ShowList } from '../../components/ShowList';
import './Favorites.scss';
import { NavigationFavorites } from './components/NavigationFavorites';

export function Favorites() {
  const [stateProfile, setStateProfile] = useState('all');

  const { data: dataKindergartenFavorites = [] } =
    useGetKindergartenFavoritesQuery();
  const { data: dataSchoolFavorites = [] } = useGetSchoolFavoritesQuery();
  // const { data = [] } = useGetSchoolAllQuery();
  const { data = [] } = useGetKindergartenAllQuery();

  // const dataFavorites = dataCard.results;
  const dataFavorites =
    stateProfile === 'school'
      ? dataSchoolFavorites.results
      : dataKindergartenFavorites.results;
  // const dataFavorites = () => {
  //   if
  // }
  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          <NavigationFavorites
            stateProfile={stateProfile}
            setStateProfile={setStateProfile}
          />
          <ShowList data={dataFavorites} stateProfile={stateProfile} />
        </div>
      </div>
    </section>
  );
}
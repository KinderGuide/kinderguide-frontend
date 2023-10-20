import React from 'react';
import './Favorites.scss';
import { ShowList } from '../../../../components/ShowList/ShowList';

export function Favorites({ stateProfile }) {
  return (
    <section className='favorites'>
      {stateProfile === 'school' ? <ShowList /> : ''}
      {stateProfile === 'gardens' ? <ShowList /> : ''}
      {stateProfile === 'all' ? <ShowList /> : ''}
    </section>
  );
}

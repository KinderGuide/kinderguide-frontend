import React from 'react';
import './Favorites.scss';
import { NavigationFavorites } from '../NavigationFavorites/NavigationFavorites';
import { ShowList } from '../../../../components/ShowList';

export function Favorites({ setStateFavorites, stateFavorites }) {
  return (
    <section className='favorites'>
      <NavigationFavorites
        setStateFavorites={setStateFavorites}
        stateFavorites={stateFavorites}
      />
      {stateFavorites === 'school' ? <ShowList /> : ''}
      {stateFavorites === 'gardens' ? <ShowList /> : ''}
      {stateFavorites === 'courses' ? <ShowList /> : ''}
    </section>
  );
}

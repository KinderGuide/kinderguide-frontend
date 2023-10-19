import React, { useState } from 'react';
import './Profile.scss';
import { NavigationProfile } from './components/NavigationProfile/NavigationProfile';
import { BreadCrumb } from './components/BreadCrumb/BreadCrumb';
import { User } from './components/User/User';
import { Favorites } from './components/Favorites/Favorites';
import { Schedule } from './components/Schedule/Schedule';

export function Profile() {
  const [stateProfile, setStateProfile] = useState('profile');
  const [stateFavorites, setStateFavorites] = useState('school');

  // const { data = {} } = useGetUserQuery();
  const data = {};
  return (
    <section className='profile'>
      <div className='wrapper'>
        <BreadCrumb />
        <h1 className='profile__title'>Личный кабинет</h1>
        <div className='profile__block'>
          <NavigationProfile
            setStateProfile={setStateProfile}
            stateProfile={stateProfile}
          />
          {stateProfile === 'profile' ? <User dataUser={data} /> : ''}
          {stateProfile === 'schedule' ? (
            <Favorites
              setStateFavorites={setStateFavorites}
              stateFavorites={stateFavorites}
            />
          ) : (
            ''
          )}
          {stateProfile === 'favorites' ? <Schedule /> : ''}
        </div>
      </div>
    </section>
  );
}

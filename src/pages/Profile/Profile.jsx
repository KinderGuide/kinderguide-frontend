import React, { useState } from 'react';
import './Profile.scss';
import { NavigationProfile } from './components/NavigationProfile/NavigationProfile';
import { User } from './components/User/User';
import { Favorites } from './components/Favorites/Favorites';

export function Profile() {
  const [stateProfile, setStateProfile] = useState('profile');
  return (
    <section className='profile'>
      <div className='wrapper'>
        <h1 className='profile__title'>Личный кабинет</h1>
        <div className='profile__block'>
          <NavigationProfile
            setStateProfile={setStateProfile}
            stateProfile={stateProfile}
          />
          {stateProfile === 'profile' ? <User /> : ''}
          {stateProfile === 'all' || 'gardens' || 'school' ? (
            <Favorites stateProfile={stateProfile} />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}

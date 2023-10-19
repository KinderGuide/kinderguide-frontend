import React from 'react';
import './NavigationProfile.scss';

export function NavigationProfile({ setStateProfile, stateProfile }) {
  const handleClick = (data) => {
    setStateProfile(data);
  };
  return (
    <nav className='navigation-profile'>
      <button
        className={
          stateProfile === 'profile'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('profile')}
      >
        Профиль
      </button>
      <button
        className={
          stateProfile === 'favorites'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('favorites')}
      >
        Расписание
      </button>
      <button
        className={
          stateProfile === 'schedule'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('schedule')}
      >
        Избранное
      </button>
    </nav>
  );
}

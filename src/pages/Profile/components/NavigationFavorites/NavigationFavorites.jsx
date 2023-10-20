import React from 'react';
import './NavigationFavorites.scss';

export function NavigationFavorites({ setStateProfile, stateProfile }) {
  const handleClick = (data) => {
    setStateProfile(data);
  };
  return (
    <nav className='navigation-favorites'>
      <button
        className={
          stateProfile === 'all'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('all')}
      >
        Все
      </button>
      <button
        className={
          stateProfile === 'school'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('school')}
      >
        Школы
      </button>
      <button
        className={
          stateProfile === 'gardens'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('gardens')}
      >
        Сады
      </button>
    </nav>
  );
}

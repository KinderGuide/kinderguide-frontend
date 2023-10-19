import React from 'react';
import './NavigationFavorites.scss';

export function NavigationFavorites({ setStateFavorites, stateFavorites }) {
  const handleClick = (data) => {
    setStateFavorites(data);
  };
  return (
    <nav className='navigation-favorites'>
      <button
        className={
          stateFavorites === 'school'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('school')}
      >
        Школы
      </button>
      <button
        className={
          stateFavorites === 'gardens'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('gardens')}
      >
        Сады
      </button>
      <button
        className={
          stateFavorites === 'courses'
            ? 'navigation-favorites__item navigation-favorites__item_active'
            : 'navigation-favorites__item'
        }
        onClick={() => handleClick('courses')}
      >
        Курсы
      </button>
    </nav>
  );
}

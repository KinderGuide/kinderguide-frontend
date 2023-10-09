import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import './Sort.scss';

export function Sort() {
  const [isActive, setIsActive] = useState(false);
  const sortRef = useRef(null);

  useClickOutside(sortRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sort ${isActive ? 'sort_active' : ''}`}>
      <div className='sort__wrapper'>
        <button className='sort__button' type='button' onClick={onClickNavTab}>
          Сортировать
        </button>
        <button
          className='sort__button-arrow'
          type='button'
          aria-label='sort'
          onClick={onClickNavTab}
        />
      </div>
      <ul
        ref={sortRef}
        className={`sort-list ${isActive ? 'sort-list_active' : ''}`}
      >
        <li className='sort-list__item'>
          <button type='button' className='sort-list__button'>
            По названию
          </button>
        </li>
        <li className='sort-list__item'>
          <button type='button' className='sort-list__button'>
            По стоимости
          </button>
        </li>
        <li className='sort-list__item'>
          <button type='button' className='sort-list__button'>
            По отзывам
          </button>
        </li>
        <li className='sort-list__item'>
          <button type='button' className='sort-list__button'>
            По рейтингу
          </button>
        </li>
      </ul>
    </div>
  );
}

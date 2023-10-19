import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import './Sort.scss';

const sortButtons = [
  { title: 'По названию', id: 'name' },
  { title: 'По стоимости', id: 'cost' },
  { title: 'По отзывам', id: 'feedback' },
  { title: 'По рейтингу', id: 'rate' },
];

export function Sort({ sortHandler, sortDirectionHandler }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('name');
  const sortRef = useRef(null);

  useClickOutside(sortRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  const onClickSortHandler = (e) => {
    setSelected(e.target.id);
    sortHandler(e.target.id);
  };

  return (
    <div className='sort'>
      <div className={`sort-wrapper ${isActive ? 'sort-wrapper_active' : ''}`}>
        <button className='sort__button' type='button' onClick={onClickNavTab}>
          Сортировать
        </button>
        <button
          className='sort__button-arrow'
          type='button'
          aria-label='sort'
          onClick={sortDirectionHandler}
        />
      </div>
      <ul
        ref={sortRef}
        className={`sort-list ${isActive ? 'sort-list_active' : ''}`}
      >
        {sortButtons.map((button) => {
          return (
            <li className='sort-list__item' key={button.id}>
              <button
                id={button.id}
                type='button'
                className={`sort-list__button ${
                  selected === button.id ? 'sort-list__button_selected' : ''
                }`}
                onClick={onClickSortHandler}
              >
                {button.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

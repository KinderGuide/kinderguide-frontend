import React from 'react';
import './BreadCrumb.scss';
import { NavLink } from 'react-router-dom';

export function BreadCrumb() {
  return (
    <nav className='bread-crumb'>
      <ul className='bread-crumb__list'>
        <li className='bread-crumb__li'>
          <NavLink
            className={({ isActive }) =>
              `bread-crumb__item ${isActive ? 'bread-crumb__item_active' : ''}`
            }
            to='/'
          >
            Главная
          </NavLink>
        </li>
        <li className='bread-crumb__li'>Личный кабинет</li>
      </ul>
    </nav>
  );
}

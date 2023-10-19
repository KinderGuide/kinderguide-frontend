import { NavLink } from 'react-router-dom';
import './Navigation.scss';

// В зависимости от  места использования меняется ширина блока навигации
// За это отвечает пропс usedFor, применяющий модификатор
export const Navigation = ({ usedFor }) => {
  return (
    <nav className={`navigation navigation_${usedFor}`}>
      <NavLink
        to='/'
        // activeClassName='navigation__item_type_active'
        // className={`navigation__item  ${
        //   usedFor === 'footer' ? 'navigation__item_type_footer' : ''
        // }`}
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer'
            : isActive
            ? 'navigation__item navigation__item_type_active'
            : 'navigation__item';
        }}
      >
        Главная
      </NavLink>
      <NavLink
        to='/catalog'
        // activeClassName='navigation__item_type_active'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer'
            : isActive
            ? 'navigation__item navigation__item_type_active'
            : 'navigation__item';
        }}
      >
        Образование
        {usedFor === 'footer' && (
          <ul className='navigation__item-list'>
            <li>Школы</li>
            <li>Сады</li>
            <li>Курсы</li>
          </ul>
        )}
      </NavLink>
      <NavLink
        to='/specialists'
        // activeClassName='navigation__item_type_active'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer navigation__item_type_soon'
            : isActive
            ? 'navigation__item navigation__item_type_active'
            : 'navigation__item navigation__item_type_soon';
        }}
      >
        Специалисты
        {usedFor === 'header' && (
          <span className='navigation__item-span'>Скоро</span>
        )}
        {usedFor === 'footer' && (
          <ul className='navigation__item-list'>
            <li>Репититоры</li>
            <li>Психологи</li>
          </ul>
        )}
      </NavLink>
      <NavLink
        to='/news'
        // activeClassName='navigation__item_type_active'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer navigation__item_type_soon'
            : isActive
            ? 'navigation__item navigation__item_type_active'
            : 'navigation__item navigation__item_type_soon';
        }}
      >
        Новости
        {usedFor === 'header' && (
          <span className='navigation__item-span'>Скоро</span>
        )}
        {usedFor === 'footer' && (
          <ul className='navigation__item-list'>
            <li>Статьи</li>
            <li>Кейсы</li>
            <li>Подборки</li>
            <li>Тесты</li>
          </ul>
        )}
      </NavLink>
    </nav>
  );
};
